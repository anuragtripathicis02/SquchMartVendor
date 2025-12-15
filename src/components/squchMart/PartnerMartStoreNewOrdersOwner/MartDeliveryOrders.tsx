import Link from 'next/link'
import React  from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
// import 'rsuite/dist/rsuite.min.css';

const MartDeliveryOrders = () => {
  return (
    <div className='food-delivery-sec'>
        <div className='top-search-filter-box d-flex gap-2 justify-content-between flex-wrap '>
            <div className='search-left'>
                <div className='search-box position-relative'>
                    <InputGroup className='form-group'>
                        <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                        <Form.Control type="text" placeholder="Search..." />
                    </InputGroup>
                </div>
            </div>
            <div className='right-filter overflow-auto'>
                <div className='scrollbar-box w-100 d-flex align-items-center gap-2'>
                    <div className='list-status'>
                        <div className="form-group">
                            <Form.Label  className='d-none'>Select Orders</Form.Label>
                            <Form.Select aria-label="Default select example" className='btn-select-top'>
                                <option>Sort by</option>
                                <option value="2">High to Low </option>
                                <option value="3">Low to high </option>
                                <option value="4">New Order First </option>
                            </Form.Select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MartDeliveryOrders