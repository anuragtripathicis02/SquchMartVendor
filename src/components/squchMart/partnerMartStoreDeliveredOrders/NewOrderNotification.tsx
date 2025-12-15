import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';

const NewOrderNotification = () => {
    const [dateRange, setDateRange] = useState<[Date?, Date?] | null>(null);

  return (
    <div className='food-delivery-sec'>
        <div className='top-search-filter-box d-flex gap-2 justify-content-between flex-wrap mt-4'>
            <div className='right-filter overflow-auto'>
                <div className='scrollbar-box w-100 d-flex align-items-center gap-2'>
                    
                    <div className='list-status'>
                        <div className="form-group">
                            <Form.Label  className='d-none'>Ubuntu Fresh Mart</Form.Label>
                            <Form.Select aria-label="Default select example" className='btn-select-top'>
                                <option value="1">Ubuntu Fresh Mart</option>
                                <option value="2">Ubuntu Fresh Mart </option>
                                <option value="3">Karoo Grillhouse </option>
                                <option value="4">Karoo Grillhouse</option>
                                <option value="4">Select Your Mart</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className='list-status'>
                        <div className="form-group">
                            <Form.Label  className='d-none'>Delivered Orders</Form.Label>
                            <Form.Select aria-label="Default select example" className='btn-select-top'>
                                <option>Delivered Orders</option>
                                <option value="2">Select Orders </option>
                                <option value="3">New Orders</option>
                                <option value="4">active Orders </option>
                                <option value="5">Ready Orders </option>
                                <option value="6">Preparing Orders </option>
                                <option value="7">Out for Delivery </option>
                                <option value="8">Completed Orders </option>
                                <option value="9">Rejected Orders </option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='calendy-box'>
                        <div className="d-flex align-items-center gap-2">

                            {/* RSuite DateRangePicker */}
                            <div className="calendar ">
                                <DateRangePicker
                                value={dateRange}
                                onChange={setDateRange}
                                format="MM/dd/yyyy"
                                placeholder="MM/DD/YYYY - MM/DD/YYYY"
                                appearance="subtle"
                                size="lg"
                                style={{
                                    borderRadius: '9999px',
                                    border: 'none',
                                    padding: '6px 12px',
                                }}
                                menuClassName="custom-range-menu"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default NewOrderNotification