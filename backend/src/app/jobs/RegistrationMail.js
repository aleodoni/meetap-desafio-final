import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { user, meetup } = data;

    await Mail.sendMail({
      to: `${meetup.organizer.name} <${meetup.organizer.email}>`,
      subject: 'Inscrição Confirmada',
      template: 'registration',
      context: {
        organizer: meetup.organizer.name,
        userName: user.name,
        userEmail: user.email,
        meetupTitle: meetup.title,
      },
    });
  }
}

export default new RegistrationMail();
