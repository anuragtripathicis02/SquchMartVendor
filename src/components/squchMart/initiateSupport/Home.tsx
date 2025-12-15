'use client'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '@/components/Footer';
import InitiateSupport from './InitiateSupport';


const Home = () => {
  return (
    <div className='dashboard-details '>
      <div className='booking-sec height-fixed-main d-flex flex-lg-column flex-wrap justify-content-center'>
        <div className='dashboard-pages-heading Breadcrumb-sec me-auto'>
            <div className='page-details d-flex align-items-center gap-2'>
                <Link href="" className="btn-back d-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
                <div className='left-details-heading start-0'>
                    <h2>Get Support</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Get Support</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
          </div>
          <div className='search-filter-sec mt-2 position-relative w-100 '>
              <InitiateSupport />
          </div>
        </div>

        <div className='footer-vendor text-center pt-4 pb-4'>
            <Footer />
        </div>
    </div>
  )
}

export default Home