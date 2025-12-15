'use client'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '@/components/Footer';
import TopPayout from './TopPayout';
import PayoutSummery from './PayoutSummery';
// import FilterTop from './FilterTop';
// import RideShareBanksTabs from './RideShareBanksTabs';


const Home = () => {
  return (
    <div className='dashboard-details'>
        <div className='booking-sec height-fixed-main d-flex flex-column'>
            <div className='dashboard-pages-heading Breadcrumb-sec'>
                <div className='page-details d-flex align-items-center gap-2'>
                    <Link href="" className="btn-back">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </Link>
                    <div className='left-details-heading'>
                        <h2>Payout Summery</h2>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Wallet
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Payout Summery</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className='search-filter-sec mt-2'>
                <TopPayout />
            </div>
            <div className='table-inner-page mt-0'>
            <PayoutSummery />
            </div>
            <div className='report-bottom-sec pb-4'>
                <hr />
                <ul className='d-flex align-items-center gap-2 justify-content-lg-end justify-content-center flex-wrap'>
                    <li>
                        <Link href="" className='btn btn-white'>Report an Issue</Link>
                    </li>
                    <li>
                        <Link href="" className='btn btn-primary-text'>Download CSV</Link>
                    </li>
                    <li>
                        <Link href="" className='btn btn-primary-text'>Export Report</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='footer-vendor text-center pt-4 pb-4'>
            <Footer />
        </div>
    </div>
  )
}

export default Home