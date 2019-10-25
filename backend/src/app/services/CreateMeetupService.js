import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';

class CreateMeetupService {
  async run({ title, description, place, date, bannerId, userId }) {
    if (!userId) {
      throw new Error('User not logged in.');
    }
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error("Can't create meetup for past dates.");
    }

    const meetup = await Meetup.create({
      title,
      description,
      place,
      date,
      banner_id: bannerId,
      user_id: userId,
    });

    return meetup;
  }
}

export default new CreateMeetupService();
