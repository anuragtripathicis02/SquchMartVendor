'use client'
import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';
import Footer from '@/components/Footer';
import WalletTopField from './WalletTopField';
import FilterTop from './FilterTop';
import PaymentDetails from './PaymentDetails';

const Home = () => {
  return (
    <div className='vehicle-page'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
        <div className='dashboard-pages-heading Breadcrumb-sec'>
            <div className='page-details d-flex align-items-center gap-2'>
                <Link href="" className="btn-back d-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
                <div className='left-details-heading start-0'>
                    <h2>Wallet</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>My Wallet</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
          </div>
          <div className='multitem-search search-filter-sec mt-2'>
              <WalletTopField />
              <div className='filter-box'>
                <FilterTop />
              </div>
          </div>
          <div className='operator-list mt-4'>
            <PaymentDetails />
          </div>
           <div className='report-bottom-sec pb-4'>
              
                <ul className='d-flex align-items-center gap-2 justify-content-lg-end justify-content-center flex-wrap'>
                  
                    <li>
                        <Link href="" className='btn btn-primary-text'>Download Statement</Link>
                    </li>
                  
                </ul>
            </div>
      </div>
      <div className='footer-vendor text-center pt-4 pb-4'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
