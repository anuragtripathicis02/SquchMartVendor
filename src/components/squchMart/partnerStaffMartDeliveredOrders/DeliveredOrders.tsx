'use client'
import Link from 'next/link'
import Image from "next/image";
import AdminDashboard from '../../../../public/images/admin-dashboard.png'
import { Dropdown, ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import OrdersDetailsModal from './OrdersDetailsModal';

const DeliveredOrders = () => {
    
    const [showDateChange, setShowDateChange] = useState(false);
        
    const totalTime = 100; // Total time in seconds
    const [timeLeft, setTimeLeft] = useState(totalTime);
    
    useEffect(() => {
        if (timeLeft <= 0) return;
    
        const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        }, 10);
    
        return () => clearInterval(timer);
    }, [timeLeft]);
    
    const getProgress = () => ((totalTime - timeLeft) / totalTime) * 100;

            

  return (
    <div className='delivered-orders-sec'>
        <div className='inner-active-order'>
            <div className='row'>
                <div className='col-xl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16 text-color-link d-block' >
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
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'  onClick={() => setShowDateChange(true)}> 
                                                <span>View details</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="" onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li className='d-flex align-items-center gap-2 text-black fw-bold'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48628 2.34074L10.6596 4.68741C10.8196 5.01408 11.2463 5.32741 11.6063 5.38741L13.7329 5.74074C15.0929 5.96741 15.4129 6.95408 14.4329 7.92741L12.7796 9.58074C12.4996 9.86074 12.3463 10.4007 12.4329 10.7874L12.9063 12.8341C13.2796 14.4541 12.4196 15.0807 10.9863 14.2341L8.99295 13.0541C8.63295 12.8407 8.03961 12.8407 7.67295 13.0541L5.67961 14.2341C4.25295 15.0807 3.38628 14.4474 3.75961 12.8341L4.23295 10.7874C4.31961 10.4007 4.16628 9.86074 3.88628 9.58074L2.23295 7.92741C1.25961 6.95408 1.57295 5.96741 2.93295 5.74074L5.05961 5.38741C5.41295 5.32741 5.83961 5.01408 5.99961 4.68741L7.17295 2.34074C7.81295 1.06741 8.85295 1.06741 9.48628 2.34074Z" fill="#3D3D3D"/></svg> 4.2
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Completed</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16 text-color-link d-block'>
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
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'  onClick={() => setShowDateChange(true)}> 
                                                <span>View details</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="" onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li className='d-flex align-items-center gap-2 text-black fw-bold'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48628 2.34074L10.6596 4.68741C10.8196 5.01408 11.2463 5.32741 11.6063 5.38741L13.7329 5.74074C15.0929 5.96741 15.4129 6.95408 14.4329 7.92741L12.7796 9.58074C12.4996 9.86074 12.3463 10.4007 12.4329 10.7874L12.9063 12.8341C13.2796 14.4541 12.4196 15.0807 10.9863 14.2341L8.99295 13.0541C8.63295 12.8407 8.03961 12.8407 7.67295 13.0541L5.67961 14.2341C4.25295 15.0807 3.38628 14.4474 3.75961 12.8341L4.23295 10.7874C4.31961 10.4007 4.16628 9.86074 3.88628 9.58074L2.23295 7.92741C1.25961 6.95408 1.57295 5.96741 2.93295 5.74074L5.05961 5.38741C5.41295 5.32741 5.83961 5.01408 5.99961 4.68741L7.17295 2.34074C7.81295 1.06741 8.85295 1.06741 9.48628 2.34074Z" fill="#3D3D3D"/></svg> 4.2
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Completed</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16 text-color-link d-block'>
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
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'  onClick={() => setShowDateChange(true)}> 
                                                <span>View details</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="" onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li className='d-flex align-items-center gap-2 text-black fw-bold'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48628 2.34074L10.6596 4.68741C10.8196 5.01408 11.2463 5.32741 11.6063 5.38741L13.7329 5.74074C15.0929 5.96741 15.4129 6.95408 14.4329 7.92741L12.7796 9.58074C12.4996 9.86074 12.3463 10.4007 12.4329 10.7874L12.9063 12.8341C13.2796 14.4541 12.4196 15.0807 10.9863 14.2341L8.99295 13.0541C8.63295 12.8407 8.03961 12.8407 7.67295 13.0541L5.67961 14.2341C4.25295 15.0807 3.38628 14.4474 3.75961 12.8341L4.23295 10.7874C4.31961 10.4007 4.16628 9.86074 3.88628 9.58074L2.23295 7.92741C1.25961 6.95408 1.57295 5.96741 2.93295 5.74074L5.05961 5.38741C5.41295 5.32741 5.83961 5.01408 5.99961 4.68741L7.17295 2.34074C7.81295 1.06741 8.85295 1.06741 9.48628 2.34074Z" fill="#3D3D3D"/></svg> 4.2
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Completed</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16 text-color-link d-block'>
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
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'  onClick={() => setShowDateChange(true)}> 
                                                <span>View details</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li className='d-flex align-items-center gap-2 text-black fw-bold'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48628 2.34074L10.6596 4.68741C10.8196 5.01408 11.2463 5.32741 11.6063 5.38741L13.7329 5.74074C15.0929 5.96741 15.4129 6.95408 14.4329 7.92741L12.7796 9.58074C12.4996 9.86074 12.3463 10.4007 12.4329 10.7874L12.9063 12.8341C13.2796 14.4541 12.4196 15.0807 10.9863 14.2341L8.99295 13.0541C8.63295 12.8407 8.03961 12.8407 7.67295 13.0541L5.67961 14.2341C4.25295 15.0807 3.38628 14.4474 3.75961 12.8341L4.23295 10.7874C4.31961 10.4007 4.16628 9.86074 3.88628 9.58074L2.23295 7.92741C1.25961 6.95408 1.57295 5.96741 2.93295 5.74074L5.05961 5.38741C5.41295 5.32741 5.83961 5.01408 5.99961 4.68741L7.17295 2.34074C7.81295 1.06741 8.85295 1.06741 9.48628 2.34074Z" fill="#3D3D3D"/></svg> 4.2
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Completed</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16 text-color-link d-block' >
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
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'  onClick={() => setShowDateChange(true)}> 
                                                <span>View details</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="" onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li className='d-flex align-items-center gap-2 text-black fw-bold'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48628 2.34074L10.6596 4.68741C10.8196 5.01408 11.2463 5.32741 11.6063 5.38741L13.7329 5.74074C15.0929 5.96741 15.4129 6.95408 14.4329 7.92741L12.7796 9.58074C12.4996 9.86074 12.3463 10.4007 12.4329 10.7874L12.9063 12.8341C13.2796 14.4541 12.4196 15.0807 10.9863 14.2341L8.99295 13.0541C8.63295 12.8407 8.03961 12.8407 7.67295 13.0541L5.67961 14.2341C4.25295 15.0807 3.38628 14.4474 3.75961 12.8341L4.23295 10.7874C4.31961 10.4007 4.16628 9.86074 3.88628 9.58074L2.23295 7.92741C1.25961 6.95408 1.57295 5.96741 2.93295 5.74074L5.05961 5.38741C5.41295 5.32741 5.83961 5.01408 5.99961 4.68741L7.17295 2.34074C7.81295 1.06741 8.85295 1.06741 9.48628 2.34074Z" fill="#3D3D3D"/></svg> 4.2
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Completed</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16 text-color-link d-block'>
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
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'  onClick={() => setShowDateChange(true)}> 
                                                <span>View details</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="" onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2 m-0'>
                                    <li className='d-flex align-items-center gap-2 text-black fw-bold'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.48628 2.34074L10.6596 4.68741C10.8196 5.01408 11.2463 5.32741 11.6063 5.38741L13.7329 5.74074C15.0929 5.96741 15.4129 6.95408 14.4329 7.92741L12.7796 9.58074C12.4996 9.86074 12.3463 10.4007 12.4329 10.7874L12.9063 12.8341C13.2796 14.4541 12.4196 15.0807 10.9863 14.2341L8.99295 13.0541C8.63295 12.8407 8.03961 12.8407 7.67295 13.0541L5.67961 14.2341C4.25295 15.0807 3.38628 14.4474 3.75961 12.8341L4.23295 10.7874C4.31961 10.4007 4.16628 9.86074 3.88628 9.58074L2.23295 7.92741C1.25961 6.95408 1.57295 5.96741 2.93295 5.74074L5.05961 5.38741C5.41295 5.32741 5.83961 5.01408 5.99961 4.68741L7.17295 2.34074C7.81295 1.06741 8.85295 1.06741 9.48628 2.34074Z" fill="#3D3D3D"/></svg> 4.2
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Completed</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <OrdersDetailsModal show={showDateChange} handleClose={() => setShowDateChange(false)}/>

    </div>
  )
}

export default DeliveredOrders