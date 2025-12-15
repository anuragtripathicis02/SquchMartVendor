'use client'
import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button, Form, InputGroup } from 'react-bootstrap';
import MenuItemList from './MenuItemList';

const Home = () => {
  return (
    <div className='vehicle-page'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
        <div className='dashboard-pages-heading Breadcrumb-sec'>
            <div className='page-details d-flex align-items-center gap-2'>
                <Link href="" className="btn-back">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
                <div className='left-details-heading'>
                    <h2>Items</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Orders</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" active>Items</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
          </div>
          <div className='delivery-order-sec mt-2'>
            <div className="top-dashboard tabs-booking">
              <div className="inner-tabs-booking-box">
                <div className='menu-top-sec'>
                    <div className="checkbox-inline pb-2 d-flex flex-wrap align-items-center gap-2"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3 mb-3">
                            <div className='icons-text d-flex align-items-center gap-2'>
                                <span className='icons item-card-d'>
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text text-decoration-line-through'><strong>Green Peas (500 gms)</strong></span>
                            </div>
                            <div className='price-list-item text-decoration-line-through'>
                              <strong>₵20.00</strong>
                            </div>
                        </div>
                        <h4 className='w-100 mb-0 pb-0'>Alternative Option</h4>
                        <p className='m-0'>You can select more than 1 item</p>
                        
                        <div className='w-100 heading-top-list top-search-filter-box align-items-center mb-0 mt-2'>
                            <div className='search-left'>
                                <div className='search-box position-relative'>
                                    <InputGroup className='form-group input-width-fixed w-100'>
                                        <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                                        <Form.Control type="text" placeholder="Search for order" className=' w-100 mw-100 ful-width-input rounded-5' />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className='mt-4'>
                  <MenuItemList />
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
