import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { DatePicker } from 'rsuite';
import { format } from 'date-fns';
 
const DatePickers = ({ placement = 'autoVerticalStart' }: { placement?: 'autoVerticalStart' | 'autoVertical' | 'autoHorizontalStart' | 'autoHorizontal' | 'bottomStart' | 'top' | 'topEnd' | 'topStart' | 'bottom' | 'bottomEnd' | 'leftStart' | 'left' | 'leftEnd' | 'rightStart' | 'right' | 'rightEnd' }) => {
  return (
    <div className="position-relative">
      <DatePicker
        placement={placement}
        placeholder="DD / MM / YYYY"
        className="calendar-main"
        renderValue={(value) =>
          value ? format(value, 'dd/MM/yy') : 'Select Date'
        }
        style={{ width: '100%' }}
      />
    </div>
  );
};
 
export default DatePickers;