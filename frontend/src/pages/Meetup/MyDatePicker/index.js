import React, { useRef, useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css';

import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function MyDatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(
    defaultValue ? parseISO(defaultValue) : new Date()
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function handleChange(date) {
    setSelected(date);
  }

  return (
    <Container>
      <DatePicker
        name={fieldName}
        selected={selected}
        // onChange={date => setSelected(date)}
        onChange={date => handleChange(date)}
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="hora"
        dateFormat="d MMMM yyyy h:mm aa"
        showTimeSelect
        ref={ref}
        locale={pt}
        placeholderText="Data do meetup"
      />
      {error && <span>{error}</span>}
    </Container>
  );
}
