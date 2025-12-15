import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DineOutCompleted = () => {
  return (
    <div className='dine-out-sec'>
        <div className='delivered-orders-sec'>
            <div className='heading-line position-relative mb-3'>
                <p className='p-0 m-0'>Dine-out Completed</p>
                <span className='line-shape'></span>
            </div>
            <div className='inner-active-order'>
                <div className='row'>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='order-slider-box card-box p-16'>
                            <div className='top-box d-flex gap-2 justify-content-between'>
                                <div className='left-box'>
                                    <h6>#1258</h6>
                                    <span>24-03-2024 | 08:30 pm</span>
                                </div>
                                <div className='right-box d-flex align-items-center gap-2'>
                                    <div className='btn btn-purple'>Completed</div>
                                    <div className='dropdown-sec'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align='end' className='pt-2 pb-2'>
                                                <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                                <span>View Details</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2' > 
                                                    <span>Edit Details</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1" className='btn-active-red d-flex align-items-center gap-2'> 
                                                    <span>Delete Property</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className='details-out'>
                                <ul className='p-0 m-0'>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Lawn Table</span>
                                        <span className='d-block light-h'>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.33008 20L7.83008 16.25C7.98008 15.8667 8.22175 15.5623 8.55508 15.337C8.88841 15.1117 9.26341 14.9993 9.68008 15H11.3301V10.975C8.78008 10.8917 6.64241 10.5167 4.91708 9.85C3.19175 9.18333 2.32941 8.4 2.33008 7.5C2.33008 6.53333 3.30508 5.70833 5.25508 5.025C7.20508 4.34167 9.56341 4 12.3301 4C15.1134 4 17.4761 4.34167 19.4181 5.025C21.3601 5.70833 22.3307 6.53333 22.3301 7.5C22.3301 8.4 21.4674 9.18333 19.7421 9.85C18.0167 10.5167 15.8794 10.8917 13.3301 10.975V15H14.9801C15.3801 15 15.7511 15.1127 16.0931 15.338C16.4351 15.5633 16.6807 15.8673 16.8301 16.25L18.3301 20H16.3301L15.1301 17H9.53008L8.33008 20H6.33008ZM12.3301 9C13.9467 9 15.4717 8.85833 16.9051 8.575C18.3384 8.29167 19.3884 7.93333 20.0551 7.5C19.3884 7.06667 18.3384 6.70833 16.9051 6.425C15.4717 6.14167 13.9467 6 12.3301 6C10.7134 6 9.18841 6.14167 7.75508 6.425C6.32175 6.70833 5.27175 7.06667 4.60508 7.5C5.27175 7.93333 6.32175 8.29167 7.75508 8.575C9.18841 8.85833 10.7134 9 12.3301 9Z" fill="#6D6D6D"/></svg>
                                        </span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Lunch</span>
                                        <span className='d-block light-h'>12:00 PM to 03:00 PM</span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Number of Guest</span>
                                        <span className='d-block light-h'>02</span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Food Items </span>
                                        <span className='d-block light-h'>Not Added</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='order-slider-box card-box p-16'>
                            <div className='top-box d-flex gap-2 justify-content-between'>
                                <div className='left-box'>
                                    <h6>#1258</h6>
                                    <span>24-03-2024 | 08:30 pm</span>
                                </div>
                                <div className='right-box d-flex align-items-center gap-2'>
                                    <div className='btn btn-purple'>Completed</div>
                                    <div className='dropdown-sec'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align='end' className='pt-2 pb-2'>
                                                <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                                <span>View Details</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2' > 
                                                    <span>Edit Details</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1" className='btn-active-red d-flex align-items-center gap-2'> 
                                                    <span>Delete Property</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className='details-out'>
                                <ul className='p-0 m-0'>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Lawn Table</span>
                                        <span className='d-block light-h'>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.33008 20L7.83008 16.25C7.98008 15.8667 8.22175 15.5623 8.55508 15.337C8.88841 15.1117 9.26341 14.9993 9.68008 15H11.3301V10.975C8.78008 10.8917 6.64241 10.5167 4.91708 9.85C3.19175 9.18333 2.32941 8.4 2.33008 7.5C2.33008 6.53333 3.30508 5.70833 5.25508 5.025C7.20508 4.34167 9.56341 4 12.3301 4C15.1134 4 17.4761 4.34167 19.4181 5.025C21.3601 5.70833 22.3307 6.53333 22.3301 7.5C22.3301 8.4 21.4674 9.18333 19.7421 9.85C18.0167 10.5167 15.8794 10.8917 13.3301 10.975V15H14.9801C15.3801 15 15.7511 15.1127 16.0931 15.338C16.4351 15.5633 16.6807 15.8673 16.8301 16.25L18.3301 20H16.3301L15.1301 17H9.53008L8.33008 20H6.33008ZM12.3301 9C13.9467 9 15.4717 8.85833 16.9051 8.575C18.3384 8.29167 19.3884 7.93333 20.0551 7.5C19.3884 7.06667 18.3384 6.70833 16.9051 6.425C15.4717 6.14167 13.9467 6 12.3301 6C10.7134 6 9.18841 6.14167 7.75508 6.425C6.32175 6.70833 5.27175 7.06667 4.60508 7.5C5.27175 7.93333 6.32175 8.29167 7.75508 8.575C9.18841 8.85833 10.7134 9 12.3301 9Z" fill="#6D6D6D"/></svg>
                                        </span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Lunch</span>
                                        <span className='d-block light-h'>12:00 PM to 03:00 PM</span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Number of Guest</span>
                                        <span className='d-block light-h'>02</span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Food Items </span>
                                        <span className='d-block light-h'>Not Added</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-md-6 mb-4'>
                        <div className='order-slider-box card-box p-16'>
                            <div className='top-box d-flex gap-2 justify-content-between'>
                                <div className='left-box'>
                                    <h6>#1258</h6>
                                    <span>24-03-2024 | 08:30 pm</span>
                                </div>
                                <div className='right-box d-flex align-items-center gap-2'>
                                    <div className='btn btn-purple'>Completed</div>
                                    <div className='dropdown-sec'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align='end' className='pt-2 pb-2'>
                                                <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                                <span>View Details</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2' > 
                                                    <span>Edit Details</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-1" className='btn-active-red d-flex align-items-center gap-2'> 
                                                    <span>Delete Property</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className='details-out'>
                                <ul className='p-0 m-0'>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Lawn Table</span>
                                        <span className='d-block light-h'>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.33008 20L7.83008 16.25C7.98008 15.8667 8.22175 15.5623 8.55508 15.337C8.88841 15.1117 9.26341 14.9993 9.68008 15H11.3301V10.975C8.78008 10.8917 6.64241 10.5167 4.91708 9.85C3.19175 9.18333 2.32941 8.4 2.33008 7.5C2.33008 6.53333 3.30508 5.70833 5.25508 5.025C7.20508 4.34167 9.56341 4 12.3301 4C15.1134 4 17.4761 4.34167 19.4181 5.025C21.3601 5.70833 22.3307 6.53333 22.3301 7.5C22.3301 8.4 21.4674 9.18333 19.7421 9.85C18.0167 10.5167 15.8794 10.8917 13.3301 10.975V15H14.9801C15.3801 15 15.7511 15.1127 16.0931 15.338C16.4351 15.5633 16.6807 15.8673 16.8301 16.25L18.3301 20H16.3301L15.1301 17H9.53008L8.33008 20H6.33008ZM12.3301 9C13.9467 9 15.4717 8.85833 16.9051 8.575C18.3384 8.29167 19.3884 7.93333 20.0551 7.5C19.3884 7.06667 18.3384 6.70833 16.9051 6.425C15.4717 6.14167 13.9467 6 12.3301 6C10.7134 6 9.18841 6.14167 7.75508 6.425C6.32175 6.70833 5.27175 7.06667 4.60508 7.5C5.27175 7.93333 6.32175 8.29167 7.75508 8.575C9.18841 8.85833 10.7134 9 12.3301 9Z" fill="#6D6D6D"/></svg>
                                        </span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Lunch</span>
                                        <span className='d-block light-h'>12:00 PM to 03:00 PM</span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Number of Guest</span>
                                        <span className='d-block light-h'>02</span>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between gap-2'>
                                        <span className='d-block dark-h'>Food Items </span>
                                        <span className='d-block light-h'>Not Added</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default DineOutCompleted