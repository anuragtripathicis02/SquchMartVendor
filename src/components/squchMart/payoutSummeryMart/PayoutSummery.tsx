import Link from 'next/link'
import React, { useState } from 'react'
import BillingSummeryModal from './BillingSummeryModal'

const PayoutSummery = () => {
     const [showPromoChange, setShowPromoChange] = useState(false);
  return (
    <div className='payout-summery-sec'>
        <div className='heading-box mb-4'>
            <h2>All Bookings (123)</h2>
        </div>
        <div className='row'>
            <div className='col-xl-3 col-md-6 mb-4'>
                <Link href="" className='d-block payout-box card-box' onClick={() => setShowPromoChange(true)}>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='cancelled-box'>Cancelled</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵15</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='cancelled-box'>Cancelled</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵15</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6 mb-4'>
                <div className='payout-box card-box'>
                    <div className='payout-top d-flex align-items-center gap-2 justify-content-between'>
                        <div className='payout-com'>
                            <h3>John Doe</h3>
                            <p className='text-purple'>BKID1234567890</p>
                        </div>
                        <div className='payout-com text-end'>
                            <span className='active-box'>Paid</span>
                            <p>28-04-2025</p>
                        </div>
                    </div>
                    <div className='payout-bottom'>
                        <ul className="d-flex align-items-center gap-2">
                            <li>5 Seats</li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Route<span className='d-inline text-purple'>#1234</span></li>
                            <li><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.25" cy="2.5" r="2" fill="#262626"/></svg></li>
                            <li>Earning<span className='d-inline text-purple'> ₵95</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-12 mt-4 mb-4"><a className="btn-load-more d-flex align-items-center gap-2 justify-content-center" href=""><span>See More</span><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" transform="matrix(0 -1 -1 0 32.5 32)" fill="#F6F6F6"></rect><path d="M11.8535 11.1463C11.807 11.0999 11.7519 11.063 11.6912 11.0379C11.6305 11.0128 11.5654 10.9998 11.4997 10.9998C11.434 10.9998 11.369 11.0128 11.3083 11.0379C11.2476 11.063 11.1924 11.0999 11.146 11.1463C11.0995 11.1928 11.0627 11.248 11.0375 11.3086C11.0124 11.3693 10.9994 11.4344 10.9994 11.5001C10.9994 11.5658 11.0124 11.6308 11.0375 11.6915C11.0627 11.7522 11.0995 11.8074 11.146 11.8538L16.146 16.8538C16.1924 16.9003 16.2476 16.9372 16.3083 16.9624C16.369 16.9875 16.434 17.0005 16.4997 17.0005C16.5654 17.0005 16.6305 16.9875 16.6912 16.9624C16.7519 16.9372 16.807 16.9003 16.8535 16.8538L21.8535 11.8538C21.9473 11.76 22 11.6328 22 11.5001C22 11.3674 21.9473 11.2402 21.8535 11.1463C21.7597 11.0525 21.6324 10.9998 21.4997 10.9998C21.367 10.9998 21.2398 11.0525 21.146 11.1463L16.4997 15.7932L11.8535 11.1463ZM16.4997 20.7932L21.146 16.1463C21.2398 16.0525 21.367 15.9998 21.4997 15.9998C21.6324 15.9998 21.7597 16.0525 21.8535 16.1463C21.9473 16.2402 22 16.3674 22 16.5001C22 16.6328 21.9473 16.76 21.8535 16.8538L16.8535 21.8538C16.807 21.9003 16.7519 21.9372 16.6912 21.9624C16.6305 21.9875 16.5654 22.0005 16.4997 22.0005C16.434 22.0005 16.369 21.9875 16.3083 21.9624C16.2476 21.9372 16.1924 21.9003 16.146 21.8538L11.146 16.8538C11.0995 16.8074 11.0627 16.7522 11.0375 16.6915C11.0124 16.6308 10.9994 16.5658 10.9994 16.5001C10.9994 16.4344 11.0124 16.3693 11.0375 16.3086C11.0627 16.248 11.0995 16.1928 11.146 16.1463C11.1924 16.0999 11.2476 16.063 11.3083 16.0379C11.369 16.0128 11.434 15.9998 11.4997 15.9998C11.5654 15.9998 11.6305 16.0128 11.6912 16.0379C11.7519 16.063 11.807 16.0999 11.8535 16.1463L16.4997 20.7932Z" fill="#652669"></path></svg></a></div>
            
            <BillingSummeryModal show={showPromoChange} handleClose={() => setShowPromoChange(false)} />

        </div>
    </div>
  )
}

export default PayoutSummery