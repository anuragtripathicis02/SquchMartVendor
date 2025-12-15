'use client';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { DatePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';

const Schedule = () => {
    
    const [time1, setTime1] = useState<Date | null>(null);
    const [time2, setTime2] = useState<Date | null>(null);
  return (
    
    <div className="schedule-sec card-box p-16">
        <div className="heading-box mb-4">
            <h2 className=" border-0 pb-0 mb-0">Schedule</h2>
        </div>
        <div className="checkbox-inline">
            <div className="customise-status w-100">
                <Form.Check type="checkbox" id="custom-switch22" label="Monday" defaultChecked />
            </div>
            <div className="timmer-box-mid row">
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <Form.Label className="d-none">Start time</Form.Label>
                        <DatePicker className="w-100" format="HH:mm:ss" value={time1} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime1(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-2">
                        <Form.Label className="d-none">End Time</Form.Label>
                        <DatePicker className="w-100" format="HH:mm:ss" value={time2} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime2(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0} />
                    </div>
                </div>
            </div>
            <div className="customise-status">
                <Form.Check type="checkbox" id="custom-switch23" label="Tuesday"/>
            </div>
            <div className="customise-status">
                <Form.Check type="checkbox" id="custom-switch24" label="Wednesday"/>
            </div>
            <div className="customise-status">
                <Form.Check type="checkbox" id="custom-switch25" label="Thursday"/>
            </div>
            <div className="customise-status">
                <Form.Check type="checkbox" id="custom-switch26" label="Friday"/>
            </div>
            <div className="customise-status">
                <Form.Check type="checkbox" id="custom-switch27" label="Saturday"/>
            </div>
            <div className="customise-status">
                <Form.Check type="checkbox" id="custom-switch28" label="Sunday"/>
            </div>
        </div>
    </div>
  )
}

export default Schedule