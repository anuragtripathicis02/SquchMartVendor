'use client'
import React from 'react'
import Image from "next/image";
import ReviewAdming from '../../../../public/images/review-adming.png'
import Link from 'next/link';
import { Dropdown } from 'react-bootstrap'

const RatingsReviews = () => {
  return (
    <div className='ratings-reviews-sec'>
        <div className='row'>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='reviews-rating card-box'>
                    <div className='top-rating d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-rating'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>
                                    <Image src={ReviewAdming} alt="" />
                                </li>
                                <li>
                                    <span className='admin-name d-block'>Mike Show</span>
                                    <span className='location d-block'>Ghana, Africa</span>
                                </li>
                            </ul>
                        </div>
                        <div className='admin-details'>
                            <div className='admin-review d-flex align-items-center gap-1 justify-content-end'>
                                <h5>3.6 </h5>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67626C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46867 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94434 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6064 5.59342C14.765 5.71926 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48105 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z" fill="#FFB411"/></svg>
                            </div>
                            <div className='id-number'><span>BKID</span>#1234567890</div>
                        </div>
                    </div>
                    <div className='mid-details'>
                        <p>“Lorem ipsum dolor sit amet consectetur. Suspendisse risus consectetur nunc sodales nunc vestibulum tristique enim. Eleifend mattis ac nulla consectetur adipiscing et purus senectus.”</p>
                    </div>
                    <div className='footer-admin-revide-details'>
                        <ul className='footer-btn-box d-flex justify-content-between gap-2 align-items-center'>
                            <li>
                                <Link href="" className='btn btn-secondary'>Active</Link>
                            </li>
                            <li> 
                                <div className='dropdown-card dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdown-menu-end fixed-space' align='end'>
                                            <Dropdown.Item href="#">Mark In-active</Dropdown.Item>
                                            <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                            <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='reviews-rating card-box'>
                    <div className='top-rating d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-rating'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>
                                    <Image src={ReviewAdming} alt="" />
                                </li>
                                <li>
                                    <span className='admin-name d-block'>Mike Show</span>
                                    <span className='location d-block'>Ghana, Africa</span>
                                </li>
                            </ul>
                        </div>
                        <div className='admin-details'>
                            <div className='admin-review d-flex align-items-center gap-1 justify-content-end'>
                                <h5>3.6 </h5>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67626C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46867 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94434 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6064 5.59342C14.765 5.71926 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48105 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z" fill="#FFB411"/></svg>
                            </div>
                            <div className='id-number'><span>BKID</span>#1234567890</div>
                        </div>
                    </div>
                    <div className='mid-details'>
                        <p>“Lorem ipsum dolor sit amet consectetur. Suspendisse risus consectetur nunc sodales nunc vestibulum tristique enim. Eleifend mattis ac nulla consectetur adipiscing et purus senectus.”</p>
                    </div>
                    <div className='footer-admin-revide-details'>
                        <ul className='footer-btn-box d-flex justify-content-between gap-2 align-items-center'>
                            <li>
                                <Link href="" className='btn btn-secondary'>Active</Link>
                            </li>
                            <li> 
                                <div className='dropdown-card dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdown-menu-end fixed-space' align='end'>
                                            <Dropdown.Item href="#">Mark In-active</Dropdown.Item>
                                            <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                            <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='reviews-rating card-box'>
                    <div className='top-rating d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-rating'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>
                                    <Image src={ReviewAdming} alt="" />
                                </li>
                                <li>
                                    <span className='admin-name d-block'>Mike Show</span>
                                    <span className='location d-block'>Ghana, Africa</span>
                                </li>
                            </ul>
                        </div>
                        <div className='admin-details'>
                            <div className='admin-review d-flex align-items-center gap-1 justify-content-end'>
                                <h5>3.6 </h5>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67626C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46867 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94434 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6064 5.59342C14.765 5.71926 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48105 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z" fill="#FFB411"/></svg>
                            </div>
                            <div className='id-number'><span>BKID</span>#1234567890</div>
                        </div>
                    </div>
                    <div className='mid-details'>
                        <p>“Lorem ipsum dolor sit amet consectetur. Suspendisse risus consectetur nunc sodales nunc vestibulum tristique enim. Eleifend mattis ac nulla consectetur adipiscing et purus senectus.”</p>
                    </div>
                    <div className='footer-admin-revide-details'>
                        <ul className='footer-btn-box d-flex justify-content-between gap-2 align-items-center'>
                            <li>
                                <Link href="" className='btn btn-secondary'>Active</Link>
                            </li>
                            <li> 
                                <div className='dropdown-card dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdown-menu-end fixed-space' align='end'>
                                            <Dropdown.Item href="#">Mark In-active</Dropdown.Item>
                                            <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                            <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='reviews-rating card-box'>
                    <div className='top-rating d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-rating'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>
                                    <Image src={ReviewAdming} alt="" />
                                </li>
                                <li>
                                    <span className='admin-name d-block'>Mike Show</span>
                                    <span className='location d-block'>Ghana, Africa</span>
                                </li>
                            </ul>
                        </div>
                        <div className='admin-details'>
                            <div className='admin-review d-flex align-items-center gap-1 justify-content-end'>
                                <h5>3.6 </h5>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67626C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46867 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94434 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6064 5.59342C14.765 5.71926 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48105 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z" fill="#FFB411"/></svg>
                            </div>
                            <div className='id-number'><span>BKID</span>#1234567890</div>
                        </div>
                    </div>
                    <div className='mid-details'>
                        <p>“Lorem ipsum dolor sit amet consectetur. Suspendisse risus consectetur nunc sodales nunc vestibulum tristique enim. Eleifend mattis ac nulla consectetur adipiscing et purus senectus.”</p>
                    </div>
                    <div className='footer-admin-revide-details'>
                        <ul className='footer-btn-box d-flex justify-content-between gap-2 align-items-center'>
                            <li>
                                <Link href="" className='btn btn-secondary'>Active</Link>
                            </li>
                            <li> 
                                <div className='dropdown-card dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdown-menu-end fixed-space' align='end'>
                                            <Dropdown.Item href="#">Mark In-active</Dropdown.Item>
                                            <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                            <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='reviews-rating card-box'>
                    <div className='top-rating d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-rating'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>
                                    <Image src={ReviewAdming} alt="" />
                                </li>
                                <li>
                                    <span className='admin-name d-block'>Mike Show</span>
                                    <span className='location d-block'>Ghana, Africa</span>
                                </li>
                            </ul>
                        </div>
                        <div className='admin-details'>
                            <div className='admin-review d-flex align-items-center gap-1 justify-content-end'>
                                <h5>3.6 </h5>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67626C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46867 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94434 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6064 5.59342C14.765 5.71926 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48105 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z" fill="#FFB411"/></svg>
                            </div>
                            <div className='id-number'><span>BKID</span>#1234567890</div>
                        </div>
                    </div>
                    <div className='mid-details'>
                        <p>“Lorem ipsum dolor sit amet consectetur. Suspendisse risus consectetur nunc sodales nunc vestibulum tristique enim. Eleifend mattis ac nulla consectetur adipiscing et purus senectus.”</p>
                    </div>
                    <div className='footer-admin-revide-details'>
                        <ul className='footer-btn-box d-flex justify-content-between gap-2 align-items-center'>
                            <li>
                                <Link href="" className='btn btn-secondary'>Active</Link>
                            </li>
                            <li> 
                                <div className='dropdown-card dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdown-menu-end fixed-space' align='end'>
                                            <Dropdown.Item href="#">Mark In-active</Dropdown.Item>
                                            <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                            <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className='reviews-rating card-box'>
                    <div className='top-rating d-flex align-items-center justify-content-between gap-2'>
                        <div className='admin-rating'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>
                                    <Image src={ReviewAdming} alt="" />
                                </li>
                                <li>
                                    <span className='admin-name d-block'>Mike Show</span>
                                    <span className='location d-block'>Ghana, Africa</span>
                                </li>
                            </ul>
                        </div>
                        <div className='admin-details'>
                            <div className='admin-review d-flex align-items-center gap-1 justify-content-end'>
                                <h5>3.6 </h5>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67626C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46867 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94434 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6064 5.59342C14.765 5.71926 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48105 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z" fill="#FFB411"/></svg>
                            </div>
                            <div className='id-number'><span>BKID</span>#1234567890</div>
                        </div>
                    </div>
                    <div className='mid-details'>
                        <p>“Lorem ipsum dolor sit amet consectetur. Suspendisse risus consectetur nunc sodales nunc vestibulum tristique enim. Eleifend mattis ac nulla consectetur adipiscing et purus senectus.”</p>
                    </div>
                    <div className='footer-admin-revide-details'>
                        <ul className='footer-btn-box d-flex justify-content-between gap-2 align-items-center'>
                            <li>
                                <Link href="" className='btn btn-secondary'>Active</Link>
                            </li>
                            <li> 
                                <div className='dropdown-card dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdown-menu-end fixed-space' align='end'>
                                            <Dropdown.Item href="#">Mark In-active</Dropdown.Item>
                                            <Dropdown.Item href="#">Mark active</Dropdown.Item>
                                            <Dropdown.Item href="#">View Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" className='red-text'>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        <div className="col-md-12 mt-4 mb-4">
            <Link className="btn-load-more d-flex align-items-center gap-2 justify-content-center" href="">
            <span>See More</span>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.85347 3.14586C3.80702 3.0994 3.75187 3.06255 3.69117 3.03741C3.63047 3.01227 3.56542 2.99933 3.49972 2.99933C3.43402 2.99933 3.36897 3.01227 3.30827 3.03741C3.24758 3.06255 3.19243 3.0994 3.14597 3.14586C3.09952 3.19231 3.06267 3.24746 3.03753 3.30816C3.01238 3.36886 2.99944 3.43391 2.99944 3.49961C2.99944 3.5653 3.01238 3.63036 3.03753 3.69106C3.06267 3.75175 3.09952 3.8069 3.14597 3.85336L8.14597 8.85336C8.19241 8.89985 8.24755 8.93672 8.30825 8.96189C8.36895 8.98705 8.43401 9 8.49972 9C8.56543 9 8.63049 8.98705 8.69119 8.96189C8.75189 8.93672 8.80704 8.89985 8.85347 8.85336L13.8535 3.85336C13.9473 3.75954 14 3.63229 14 3.49961C14 3.36693 13.9473 3.23968 13.8535 3.14586C13.7597 3.05204 13.6324 2.99933 13.4997 2.99933C13.367 2.99933 13.2398 3.05204 13.146 3.14586L8.49972 7.79273L3.85347 3.14586ZM8.49972 12.7927L13.146 8.14586C13.2398 8.05204 13.367 7.99933 13.4997 7.99933C13.6324 7.99933 13.7597 8.05204 13.8535 8.14586C13.9473 8.23968 14 8.36692 14 8.49961C14 8.63229 13.9473 8.75954 13.8535 8.85336L8.85347 13.8534C8.80704 13.8998 8.75189 13.9367 8.69119 13.9619C8.63049 13.987 8.56543 14 8.49972 14C8.43401 14 8.36895 13.987 8.30825 13.9619C8.24755 13.9367 8.19241 13.8998 8.14597 13.8534L3.14597 8.85336C3.09952 8.8069 3.06267 8.75175 3.03753 8.69105C3.01238 8.63036 2.99944 8.5653 2.99944 8.49961C2.99944 8.43391 3.01238 8.36885 3.03753 8.30816C3.06267 8.24746 3.09952 8.19231 3.14597 8.14586C3.19243 8.0994 3.24758 8.06255 3.30827 8.03741C3.36897 8.01227 3.43402 7.99933 3.49972 7.99933C3.56542 7.99933 3.63047 8.01227 3.69117 8.03741C3.75187 8.06255 3.80702 8.0994 3.85347 8.14586L8.49972 12.7927Z" fill="#652669"/></svg>
           </Link>
        </div>

        </div>
    </div>
  )
}

export default RatingsReviews