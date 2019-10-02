import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: ptBR }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" onClick={handlePrevDay} />
        </button>

        <strong>{dateFormatted}</strong>

        <button type="button">
          <MdChevronRight size={36} color="#fff" onClick={handleNextDay} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Felipe Bergamin</span>
        </Time>

        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>

        <Time>
          <strong>10:00</strong>
          <span>Felipe Bergamin</span>
        </Time>

        <Time>
          <strong>11:00</strong>
          <span>Felipe Bergamin</span>
        </Time>
      </ul>
    </Container>
  );
}
