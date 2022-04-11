import React, {useState, useEffect} from 'react'

import { 
  ClockContainer,
  Hour,
  DateText
 } from './style';


const Clock = ({teste}) => {

  const [dateObject, setDateObject] = useState({});

  const weekArray = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  const monthArray = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

  const toWeek = (day) => weekArray[day];

  const toMonth = (month) => monthArray[month];

  useEffect(()=>{
    setInterval(()=>{
      const date = new Date();
      setDateObject({
        hour: date.getHours(),
        minute: String(date.getMinutes()).padStart(2, '0'),
        day: date.getDate(),
        weekDay: toWeek(date.getDay()),
        month: toMonth(date.getMonth()),
        year: date.getFullYear(),
      });
    }, 1000) // 1 seg
    clearInterval();
  }, dateObject);

  return (
    <ClockContainer>
      <Hour>
        {dateObject.hour}:{dateObject.minute}
      </Hour>
      <DateText>
      {dateObject.weekDay}, {dateObject.day} de {dateObject.month} de {dateObject.year}
      </DateText>
    </ClockContainer>
  );
}

export default Clock