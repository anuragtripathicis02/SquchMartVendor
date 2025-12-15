'use client'
import Link from 'next/link'
import Image from "next/image";

import AdminDashboard from '../../../../public/images/admin-dashboard.png'
import { Dropdown, ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const DeliveredOrders = () => {
        
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
        <div className='heading-line position-relative mb-3'>
            <p className='p-0 m-0'>Delivered Orders</p>
            <span className='line-shape'></span>
        </div>
        <div className='inner-active-order'>
            <div className='row'>
                <div className='col-xl-4 col-md-6 mb-3'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between'>
                            <div className='left-box'>
                                <h6>#1258</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                            <div className='right-box d-flex align-items-center gap-2'>
                                <Link href="" className='btn btn-purple'>Out For Delivery</Link>
                                <div className='dropdown-sec'>
                                <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
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
                                    <span>1 x Butter Paneer</span>
                                </li>
                                <li>₵27.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>1 x Dal Makhani</span>
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
                                <ul className='d-flex align-items-center gap-2'>
                                    <li>
                                        <Link href="">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#652669"/><path d="M7.77984 5.35366C7.53984 5.35366 7.29317 5.40699 7.05317 5.52033C6.81317 5.63366 6.5865 5.78033 6.37317 5.97366C6.01317 6.30033 5.75317 6.66033 5.5865 7.06699C5.41984 7.46699 5.33317 7.90033 5.33317 8.36699C5.33317 9.04699 5.49317 9.77366 5.81984 10.5403C6.1465 11.307 6.5865 12.0737 7.13984 12.8337C7.69984 13.6003 8.31984 14.327 9.0065 15.0203C9.69984 15.707 10.4265 16.327 11.1865 16.8803C11.9465 17.427 12.7065 17.867 13.4598 18.187C14.2198 18.507 14.9465 18.667 15.6398 18.667C16.0932 18.667 16.5265 18.587 16.9265 18.427C17.3332 18.267 17.7065 18.0137 18.0398 17.6603C18.4598 17.2337 18.6665 16.767 18.6665 16.2737C18.6665 16.087 18.6265 15.9003 18.5465 15.7337C18.4665 15.5603 18.3465 15.407 18.1732 15.287L15.9932 13.7403C15.8265 13.6203 15.6732 13.5337 15.5265 13.4737C15.3865 13.4137 15.2465 13.3803 15.1198 13.3803C14.9598 13.3803 14.7998 13.427 14.6465 13.5203C14.4932 13.607 14.3332 13.7337 14.1732 13.8937L13.6465 14.4003C13.5732 14.4737 13.4865 14.507 13.3798 14.507C13.3265 14.507 13.2798 14.5003 13.2265 14.487C13.1732 14.467 13.1332 14.447 13.0932 14.4337C12.8732 14.3137 12.5865 14.107 12.2398 13.8137C11.8932 13.5137 11.5398 13.1937 11.1865 12.847C10.8332 12.487 10.5065 12.1403 10.2065 11.787C9.91317 11.4403 9.71317 11.1537 9.59317 10.927C9.57984 10.8937 9.55984 10.8537 9.53984 10.807C9.51984 10.7537 9.51317 10.7003 9.51317 10.6403C9.51317 10.527 9.55317 10.4403 9.6265 10.367L10.1265 9.86033C10.2932 9.69366 10.4198 9.53366 10.4998 9.38033C10.5932 9.22699 10.6398 9.07366 10.6398 8.90699C10.6398 8.78033 10.6132 8.64699 10.5532 8.50033C10.4932 8.35366 10.4065 8.20033 10.2932 8.03366L8.7265 5.82699C8.6065 5.65366 8.4665 5.53366 8.29984 5.46033C8.13317 5.39366 7.9665 5.35366 7.77984 5.35366Z" stroke="white" stroke-miterlimit="10"/><path d="M14.0002 7.66667C14.4002 7.66667 15.0135 7.98 15.5135 8.44667C15.9735 8.87333 16.3335 9.44 16.3335 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9998 5.33333C16.5798 5.33333 18.6665 7.42 18.6665 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#652669"/><path d="M9.66683 16.6663H9.3335C6.66683 16.6663 5.3335 15.9997 5.3335 12.6663V9.33301C5.3335 6.66634 6.66683 5.33301 9.3335 5.33301L14.6668 5.33301C17.3335 5.33301 18.6668 6.66634 18.6668 9.33301V12.6663C18.6668 15.333 17.3335 16.6663 14.6668 16.6663H14.3335C14.1268 16.6663 13.9268 16.7663 13.8002 16.933L12.8002 18.2663C12.3602 18.853 11.6402 18.853 11.2002 18.2663L10.2002 16.933C10.0935 16.7863 9.84683 16.6663 9.66683 16.6663Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6665 9.33301L15.3332 9.33301" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6665 12.667H12.6665" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Rider out for delivery</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
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
                                <Link href="" className='btn btn-purple'>Completed</Link>
                                <div className='dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
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
                                    <span>1 x Butter Paneer</span>
                                </li>
                                <li>₵27.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>1 x Dal Makhani</span>
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
                                    {/* <span className="text-muted">0:20 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={2}/>
                            </div>
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
                                <Link href="" className='btn btn-purple'>Delivered</Link>
                                <div className='dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
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
                                    <span>1 x Butter Paneer</span>
                                </li>
                                <li>₵27.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>1 x Dal Makhani</span>
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
                                    <span className="text-muted">Delivered</span>
                                    {/* <span className="text-muted">2:52 min</span> */}
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 1.0} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DeliveredOrders