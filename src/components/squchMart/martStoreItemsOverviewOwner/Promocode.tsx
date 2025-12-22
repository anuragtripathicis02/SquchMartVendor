import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Form, InputGroup, Dropdown } from 'react-bootstrap'
import PromocodeDetailsModal from './PromocodeDetailsModal';
import CreatePromocodeModal from './CreatePromocodeModal';
import ConfirmRemoveModal from './ConfirmRemoveModal';

const Promocode = () => {
    const [showPromoChange, setShowPromoChange] = useState(false);
    const [showDateChange, setShowDateChange] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    

  return (
    <div className='promocode-sec'>
        <div className='top-promocode'>
            <div className='top-btn-heading d-flex align-items-center justify-content-between gap-2'>
                <h2 className='m-0 p-0'>Promocode list</h2>
                <Button type='button' className='btn btn-secondary d-flex align-items-center gap-2' onClick={() => setShowDateChange(true)} >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="currentColor"/></svg>
                    <span>Add Promocode</span>
                </Button>
            </div>
            
            <div className='top-search-filter-box d-flex gap-2 justify-content-between flex-wrap mt-4'>
                <div className='search-left'>
                    <div className='search-box position-relative'>
                        <InputGroup className='form-group'>
                            <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                            <Form.Control type="text" placeholder="Search..." className='rounded-input'/>
                        </InputGroup>
                    </div>
                </div>
                <div className='right-filter overflow-auto'>
                    <div className='scrollbar-box w-100 d-flex align-items-center gap-2'>
                        <div className='list-status'>
                            <div className="form-group">
                                <Form.Label  className='d-none'>All Offers</Form.Label>
                                <Form.Select aria-label="Default select example" className='btn-select-top'>
                                    <option>All Offers</option>
                                    <option value="2">Active Offers </option>
                                    <option value="3">Scheduled Offers </option>
                                    <option value="4">Scheduled Offers </option>
                                </Form.Select>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>

        </div>

        <div className='routes-sec promocode-sec mt-5'>
            <div className='row'>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <div className='card-box routes-card p-16'>
                        <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                            <div className='btn-box'>
                                <Link href="" className='btn btn-green'>Active</Link>
                            </div>
                            <div className='dropdown-card dropdown-sec'>
                                <Dropdown align="end">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setShowPromoChange(true)}>View Details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Edit Promocode</Dropdown.Item>
                                        <Dropdown.Item className='delete-btn'  onClick={() => setShowDelete(true)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='bottom-card mt-3'>
                            <h3>upto $50 Off </h3>
                            <p>Get $50 OFF on booking over $200 on your first oder</p>
                            <div className='btn-box'>
                                <ul className='d-flex align-items-center gap-2 mb-0'>
                                    <li>21 Jan - 04 Mar 2025</li>
                                    <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                    <li>104 Applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <div className='card-box routes-card'>
                        <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                            <div className='btn-box'>
                                <Link href="" className='btn btn-dark-blue'>Upcoming</Link>
                            </div>
                            <div className='dropdown-card dropdown-sec'>
                                <Dropdown align="end">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setShowPromoChange(true)}>View Details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Edit Promocode</Dropdown.Item>
                                        <Dropdown.Item className='delete-btn'  onClick={() => setShowDelete(true)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='bottom-card mt-3'>
                            <h3>upto $50 Off </h3>
                            <p>Get $50 OFF on booking over $200</p>
                            <div className='btn-box'>
                                <ul className='d-flex align-items-center gap-2 mb-0'>
                                    <li>21 Jan - 04 Mar 2025</li>
                                    <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                    <li>104 Applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <div className='card-box routes-card'>
                        <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                            <div className='btn-box'>
                                <Link href="" className='btn btn-light-grey'>In-Active</Link>
                            </div>
                            <div className='dropdown-card dropdown-sec'>
                                <Dropdown align="end">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setShowPromoChange(true)}>View Details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Edit Promocode</Dropdown.Item>
                                        <Dropdown.Item className='delete-btn'  onClick={() => setShowDelete(true)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='bottom-card mt-3'>
                            <h3>upto $50 Off </h3>
                            <p>Get $50 OFF on booking over $200</p>
                            <div className='btn-box'>
                                <ul className='d-flex align-items-center gap-2 mb-0'>
                                    <li>21 Jan - 04 Mar 2025</li>
                                    <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                    <li>104 Applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>


        <PromocodeDetailsModal show={showPromoChange} handleClose={() => setShowPromoChange(false)} />
        <CreatePromocodeModal show={showDateChange} handleClose={() => setShowDateChange(false)} />
        <ConfirmRemoveModal show={showDelete} handleClose={() => setShowDelete(false)} />

    </div>
  )
}

export default Promocode