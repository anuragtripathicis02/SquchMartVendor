'use client'
import Link from 'next/link'
import React from 'react'

const PaymentDetails = () => {
  return (
    <div className='paymentDetails-sec'>
        <div className='card-box payment-box flex-md-nowrap flex-wrap mb-2 d-flex align-items-center justify-content-between gap-2'>
            <div className='box-details'>
                <h6 className='text-green d-flex align-items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11764_73293)"><path d="M7.99968 14.6673C8.87532 14.6684 9.74254 14.4965 10.5515 14.1614C11.3605 13.8263 12.0953 13.3346 12.7137 12.7147C13.3336 12.0963 13.8253 11.3615 14.1604 10.5525C14.4955 9.74351 14.6674 8.87629 14.6663 8.00066C14.6674 7.12502 14.4955 6.2578 14.1604 5.44882C13.8253 4.63984 13.3336 3.90505 12.7137 3.28666C12.0953 2.66671 11.3605 2.17506 10.5515 1.83996C9.74254 1.50486 8.87532 1.33291 7.99968 1.33399C7.12404 1.33291 6.25682 1.50486 5.44784 1.83996C4.63886 2.17506 3.90407 2.66671 3.28568 3.28666C2.66573 3.90505 2.17409 4.63984 1.83898 5.44882C1.50388 6.2578 1.33193 7.12502 1.33301 8.00066C1.33193 8.87629 1.50388 9.74351 1.83898 10.5525C2.17409 11.3615 2.66573 12.0963 3.28568 12.7147C3.90407 13.3346 4.63886 13.8263 5.44784 14.1614C6.25682 14.4965 7.12404 14.6684 7.99968 14.6673Z" stroke="#20A66A" stroke-width="2" stroke-linejoin="round"/><path d="M5.33301 8L7.33301 10L11.333 6" stroke="#20A66A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_11764_73293"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Payout Complete</h6>
                <p>Transection Id <span className='text-purple'>#12345678090</span></p>
            </div>
            <div className='box-details'>
                <h5>01 APR - 07 APR, 2025</h5>
            </div>
            <div className='box-details'>
                <h5>123 Bookings</h5>
            </div>
            <div className='box-details text-md-end'>
                <h4 className='text-green'>+ ₵12,765.00</h4>
                <p>08 APR 2025 , 12:30 PM</p>
            </div>
        </div>
        <div className='card-box payment-box mb-2 flex-md-nowrap flex-wrap d-flex align-items-center justify-content-between gap-2'>
            <div className='box-details'>
                <h6 className='text-yellow d-flex align-items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 9.19987C7.82286 9.19987 7.65329 9.12963 7.52827 9.00461C7.40325 8.87958 7.33301 8.71001 7.33301 8.5332V5.19987C7.33301 5.02306 7.40325 4.85349 7.52827 4.72847C7.65329 4.60344 7.82286 4.5332 7.99967 4.5332C8.17649 4.5332 8.34605 4.60344 8.47108 4.72847C8.5961 4.85349 8.66634 5.02306 8.66634 5.19987V8.5332C8.66634 8.71001 8.5961 8.87958 8.47108 9.00461C8.34605 9.12963 8.17649 9.19987 7.99967 9.19987Z" fill="#D19C00"/><path d="M7.29785 10.6375C7.29785 10.4514 7.37181 10.2728 7.50346 10.1412C7.63511 10.0095 7.81367 9.93555 7.99985 9.93555C8.18603 9.93555 8.36459 10.0095 8.49624 10.1412C8.62789 10.2728 8.70185 10.4514 8.70185 10.6375C8.70185 10.8237 8.62789 11.0023 8.49624 11.1339C8.36459 11.2656 8.18603 11.3395 7.99985 11.3395C7.81367 11.3395 7.63511 11.2656 7.50346 11.1339C7.37181 11.0023 7.29785 10.8237 7.29785 10.6375Z" fill="#D19C00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4047 3.09418L14.322 10.2408C15.33 12.0802 14.0067 14.3328 11.9173 14.3328H4.08266C1.99333 14.3328 0.669328 12.0795 1.67799 10.2402L5.59533 3.09352C6.63933 1.19018 9.36066 1.19018 10.4047 3.09352V3.09418ZM9.20199 3.76085C8.68066 2.80818 7.31933 2.80818 6.79799 3.76085L2.87999 10.9062C2.37533 11.8262 3.03733 12.9522 4.08199 12.9522H11.9167C12.9613 12.9522 13.6233 11.8255 13.1187 10.9055L9.20199 3.76085Z" fill="#D19C00"/></svg> Pending Payout</h6>
                <p>Transection Id <span className='text-purple'>#12345678090</span></p>
            </div>
            <div className='box-details'>
                <h5>01 APR - 07 APR, 2025</h5>
            </div>
            <div className='box-details'>
                <h5>129 Bookings</h5>
            </div>
            <div className='box-details text-md-end'>
                <h4 className='text-yellow'>+ ₵12,765.00</h4>
                <p>08 APR 2025 , 12:30 PM</p>
            </div>
        </div>
        <div className='card-box payment-box mb-2 flex-md-nowrap flex-wrap d-flex align-items-center  justify-content-between gap-2'>
            <div className='box-details'>
                <h6 className='text-green d-flex align-items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11764_73293)"><path d="M7.99968 14.6673C8.87532 14.6684 9.74254 14.4965 10.5515 14.1614C11.3605 13.8263 12.0953 13.3346 12.7137 12.7147C13.3336 12.0963 13.8253 11.3615 14.1604 10.5525C14.4955 9.74351 14.6674 8.87629 14.6663 8.00066C14.6674 7.12502 14.4955 6.2578 14.1604 5.44882C13.8253 4.63984 13.3336 3.90505 12.7137 3.28666C12.0953 2.66671 11.3605 2.17506 10.5515 1.83996C9.74254 1.50486 8.87532 1.33291 7.99968 1.33399C7.12404 1.33291 6.25682 1.50486 5.44784 1.83996C4.63886 2.17506 3.90407 2.66671 3.28568 3.28666C2.66573 3.90505 2.17409 4.63984 1.83898 5.44882C1.50388 6.2578 1.33193 7.12502 1.33301 8.00066C1.33193 8.87629 1.50388 9.74351 1.83898 10.5525C2.17409 11.3615 2.66573 12.0963 3.28568 12.7147C3.90407 13.3346 4.63886 13.8263 5.44784 14.1614C6.25682 14.4965 7.12404 14.6684 7.99968 14.6673Z" stroke="#20A66A" stroke-width="2" stroke-linejoin="round"/><path d="M5.33301 8L7.33301 10L11.333 6" stroke="#20A66A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_11764_73293"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Payout Complete</h6>
                <p>Transection Id <span className='text-purple'>#12345678090</span></p>
            </div>
            <div className='box-details'>
                <h5>01 APR - 07 APR, 2025</h5>
            </div>
            <div className='box-details'>
                <h5>123 Bookings</h5>
            </div>
            <div className='box-details text-md-end'>
                <h4 className='text-green'>+ ₵12,765.00</h4>
                <p>08 APR 2025 , 12:30 PM</p>
            </div>
        </div>
        <div className='card-box payment-box flex-md-nowrap flex-wrap mb-2 d-flex align-items-center  justify-content-between gap-2'>
            <div className='box-details'>
                <h6 className='text-green d-flex align-items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11764_73293)"><path d="M7.99968 14.6673C8.87532 14.6684 9.74254 14.4965 10.5515 14.1614C11.3605 13.8263 12.0953 13.3346 12.7137 12.7147C13.3336 12.0963 13.8253 11.3615 14.1604 10.5525C14.4955 9.74351 14.6674 8.87629 14.6663 8.00066C14.6674 7.12502 14.4955 6.2578 14.1604 5.44882C13.8253 4.63984 13.3336 3.90505 12.7137 3.28666C12.0953 2.66671 11.3605 2.17506 10.5515 1.83996C9.74254 1.50486 8.87532 1.33291 7.99968 1.33399C7.12404 1.33291 6.25682 1.50486 5.44784 1.83996C4.63886 2.17506 3.90407 2.66671 3.28568 3.28666C2.66573 3.90505 2.17409 4.63984 1.83898 5.44882C1.50388 6.2578 1.33193 7.12502 1.33301 8.00066C1.33193 8.87629 1.50388 9.74351 1.83898 10.5525C2.17409 11.3615 2.66573 12.0963 3.28568 12.7147C3.90407 13.3346 4.63886 13.8263 5.44784 14.1614C6.25682 14.4965 7.12404 14.6684 7.99968 14.6673Z" stroke="#20A66A" stroke-width="2" stroke-linejoin="round"/><path d="M5.33301 8L7.33301 10L11.333 6" stroke="#20A66A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_11764_73293"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Payout Complete</h6>
                <p>Transection Id <span className='text-purple'>#12345678090</span></p>
            </div>
            <div className='box-details'>
                <h5>01 APR - 07 APR, 2025</h5>
            </div>
            <div className='box-details'>
                <h5>123 Bookings</h5>
            </div>
            <div className='box-details text-md-end'>
                <h4 className='text-green'>+ ₵12,765.00</h4>
                <p>08 APR 2025 , 12:30 PM</p>
            </div>
        </div>
        <div className='card-box payment-box flex-md-nowrap flex-wrap mb-2 d-flex align-items-center  justify-content-between gap-2'>
            <div className='box-details'>
                <h6 className='text-green d-flex align-items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11764_73293)"><path d="M7.99968 14.6673C8.87532 14.6684 9.74254 14.4965 10.5515 14.1614C11.3605 13.8263 12.0953 13.3346 12.7137 12.7147C13.3336 12.0963 13.8253 11.3615 14.1604 10.5525C14.4955 9.74351 14.6674 8.87629 14.6663 8.00066C14.6674 7.12502 14.4955 6.2578 14.1604 5.44882C13.8253 4.63984 13.3336 3.90505 12.7137 3.28666C12.0953 2.66671 11.3605 2.17506 10.5515 1.83996C9.74254 1.50486 8.87532 1.33291 7.99968 1.33399C7.12404 1.33291 6.25682 1.50486 5.44784 1.83996C4.63886 2.17506 3.90407 2.66671 3.28568 3.28666C2.66573 3.90505 2.17409 4.63984 1.83898 5.44882C1.50388 6.2578 1.33193 7.12502 1.33301 8.00066C1.33193 8.87629 1.50388 9.74351 1.83898 10.5525C2.17409 11.3615 2.66573 12.0963 3.28568 12.7147C3.90407 13.3346 4.63886 13.8263 5.44784 14.1614C6.25682 14.4965 7.12404 14.6684 7.99968 14.6673Z" stroke="#20A66A" stroke-width="2" stroke-linejoin="round"/><path d="M5.33301 8L7.33301 10L11.333 6" stroke="#20A66A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_11764_73293"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Payout Complete</h6>
                <p>Transection Id <span className='text-purple'>#12345678090</span></p>
            </div>
            <div className='box-details'>
                <h5>01 APR - 07 APR, 2025</h5>
            </div>
            <div className='box-details'>
                <h5>123 Bookings</h5>
            </div>
            <div className='box-details text-md-end'>
                <h4 className='text-green'>+ ₵12,765.00</h4>
                <p>08 APR 2025 , 12:30 PM</p>
            </div>
        </div>
        <div className='card-box payment-box flex-md-nowrap flex-wrap mb-2 d-flex align-items-center justify-content-between gap-2'>
            <div className='box-details'>
                <h6 className='text-green d-flex align-items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11764_73293)"><path d="M7.99968 14.6673C8.87532 14.6684 9.74254 14.4965 10.5515 14.1614C11.3605 13.8263 12.0953 13.3346 12.7137 12.7147C13.3336 12.0963 13.8253 11.3615 14.1604 10.5525C14.4955 9.74351 14.6674 8.87629 14.6663 8.00066C14.6674 7.12502 14.4955 6.2578 14.1604 5.44882C13.8253 4.63984 13.3336 3.90505 12.7137 3.28666C12.0953 2.66671 11.3605 2.17506 10.5515 1.83996C9.74254 1.50486 8.87532 1.33291 7.99968 1.33399C7.12404 1.33291 6.25682 1.50486 5.44784 1.83996C4.63886 2.17506 3.90407 2.66671 3.28568 3.28666C2.66573 3.90505 2.17409 4.63984 1.83898 5.44882C1.50388 6.2578 1.33193 7.12502 1.33301 8.00066C1.33193 8.87629 1.50388 9.74351 1.83898 10.5525C2.17409 11.3615 2.66573 12.0963 3.28568 12.7147C3.90407 13.3346 4.63886 13.8263 5.44784 14.1614C6.25682 14.4965 7.12404 14.6684 7.99968 14.6673Z" stroke="#20A66A" stroke-width="2" stroke-linejoin="round"/><path d="M5.33301 8L7.33301 10L11.333 6" stroke="#20A66A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_11764_73293"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Payout Complete</h6>
                <p>Transection Id <span className='text-purple'>#12345678090</span></p>
            </div>
            <div className='box-details'>
                <h5>01 APR - 07 APR, 2025</h5>
            </div>
            <div className='box-details'>
                <h5>123 Bookings</h5>
            </div>
            <div className='box-details text-md-end'>
                <h4 className='text-green'>+ ₵12,765.00</h4>
                <p>08 APR 2025 , 12:30 PM</p>
            </div>
        </div>

        
        <div className="col-md-12 mt-4 mb-4">
            <Link className="btn-load-more d-flex align-items-center gap-2 justify-content-center" href="">
            <span>See More</span>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.85347 3.14586C3.80702 3.0994 3.75187 3.06255 3.69117 3.03741C3.63047 3.01227 3.56542 2.99933 3.49972 2.99933C3.43402 2.99933 3.36897 3.01227 3.30827 3.03741C3.24758 3.06255 3.19243 3.0994 3.14597 3.14586C3.09952 3.19231 3.06267 3.24746 3.03753 3.30816C3.01238 3.36886 2.99944 3.43391 2.99944 3.49961C2.99944 3.5653 3.01238 3.63036 3.03753 3.69106C3.06267 3.75175 3.09952 3.8069 3.14597 3.85336L8.14597 8.85336C8.19241 8.89985 8.24755 8.93672 8.30825 8.96189C8.36895 8.98705 8.43401 9 8.49972 9C8.56543 9 8.63049 8.98705 8.69119 8.96189C8.75189 8.93672 8.80704 8.89985 8.85347 8.85336L13.8535 3.85336C13.9473 3.75954 14 3.63229 14 3.49961C14 3.36693 13.9473 3.23968 13.8535 3.14586C13.7597 3.05204 13.6324 2.99933 13.4997 2.99933C13.367 2.99933 13.2398 3.05204 13.146 3.14586L8.49972 7.79273L3.85347 3.14586ZM8.49972 12.7927L13.146 8.14586C13.2398 8.05204 13.367 7.99933 13.4997 7.99933C13.6324 7.99933 13.7597 8.05204 13.8535 8.14586C13.9473 8.23968 14 8.36692 14 8.49961C14 8.63229 13.9473 8.75954 13.8535 8.85336L8.85347 13.8534C8.80704 13.8998 8.75189 13.9367 8.69119 13.9619C8.63049 13.987 8.56543 14 8.49972 14C8.43401 14 8.36895 13.987 8.30825 13.9619C8.24755 13.9367 8.19241 13.8998 8.14597 13.8534L3.14597 8.85336C3.09952 8.8069 3.06267 8.75175 3.03753 8.69105C3.01238 8.63036 2.99944 8.5653 2.99944 8.49961C2.99944 8.43391 3.01238 8.36885 3.03753 8.30816C3.06267 8.24746 3.09952 8.19231 3.14597 8.14586C3.19243 8.0994 3.24758 8.06255 3.30827 8.03741C3.36897 8.01227 3.43402 7.99933 3.49972 7.99933C3.56542 7.99933 3.63047 8.01227 3.69117 8.03741C3.75187 8.06255 3.80702 8.0994 3.85347 8.14586L8.49972 12.7927Z" fill="#652669"/></svg>
           </Link>
        </div>
    </div>
  )
}

export default PaymentDetails