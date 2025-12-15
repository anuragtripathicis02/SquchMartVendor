'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Footer from '@/components/Footer';
import TopDashboard from './TopDashboard';
import ActiveOrders from './ActiveOrders';
import Overview from './Overview';
import TotalRidesChart from './TotalRidesChart';
import BarChart from './BarChart';
import { Dropdown } from 'react-bootstrap';
import TopMenu from './TopMenu';
import CustomerComplaints from './CustomerComplaints';


const Home = () => {

  return (
    <div className=' dashboard-details d-flex flex-column'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
        <div className='dashboard-pages-heading'>
            <div className='page-details'>
              <div className='left-details-heading start-0 ps-2'>
                <h2>Dashboard</h2>
              </div>
            </div>
        </div>
        <div className='top-dashboard mb-4'>
            <TopDashboard />
            <ActiveOrders />
            <Overview />
            <div className='chart-dashboard-sec row mt-4'>
              <div className='col-md-12'>
                <div className='heading-com mb-3'>
                    <h2>Business Insights</h2>
                </div>
              </div>
              <div className='col-xl-4 col-lg-5 mb-lg-0 mb-4'>
                <TotalRidesChart />
              </div>
              <div className='col-xl-8 col-lg-7'>
                <BarChart />
              </div>
            </div>
            <div className='chart-dashboard-sec row mt-4'>
              <div className='col-xl-8 col-lg-12'>
                <TopMenu />
              </div>
              <div className='col-xl-4 col-lg-12 mt-xl-0 mt-4'>
                <CustomerComplaints />
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
