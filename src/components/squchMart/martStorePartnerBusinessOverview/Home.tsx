'use client'
import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button, Form, InputGroup } from 'react-bootstrap';
import TopDashboard from './TopDashboard';
import PartnerBusinessOverview from './PartnerBusinessOverview';
// import BusinessList from './BusinessList';

const Home = () => {
  return (
    <div className='vehicle-page'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
          <div className='dashboard-pages-heading Breadcrumb-sec'>
            <div className='page-details d-flex align-items-center gap-2'>
                <Link href="" className="btn-back mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
                <div className='left-details-heading'>
                    <h2>Ubuntu Fresh Mart</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">My Business</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Ubuntu Fresh Mart</Breadcrumb.Item>
                        <Breadcrumb.Item active>Business Details</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
          </div>
          <div className='delivery-order-sec mt-2'>
            <div className="top-dashboard tabs-booking">
              <div className="inner-tabs-booking-box">
                {/* <div className='heading-top-list top-search-filter-box align-items-center d-flex gap-2 justify-content-between flex-wrap  mb-4'>
                  <div className='heading-box'>
                      <h2>Business List</h2>
                  </div>
                  
                  <div className='search-left w-auto'>
                      <div className='search-box position-relative'>
                          <Link href="" className='btn btn-secondary'>Add Restaurants</Link>
                      </div>
                  </div>
                </div> */}
                <div className='mt-4'>
                  <TopDashboard />
                </div>
                <div className='mt-4'>
                  <PartnerBusinessOverview />
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='footer-vendor text-center pt-4 pb-4'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
