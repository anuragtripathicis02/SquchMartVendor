import React from 'react';
import { DatePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';
import { format } from 'date-fns';

const DatePickers = () => {
  return (
    <div className='position-relative'>
      <DatePicker
        placeholder="DD / MM / YYYY"
        className="calendar-main"
        renderValue={(value) => value ? format(value, 'dd/MM/yy') : 'Select Date'}
        style={{ marginBottom: 20 }}
      />
    </div>
  );
};

export default DatePickers;
