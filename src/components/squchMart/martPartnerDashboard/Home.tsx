'use client'
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import StatisticsOverview from './StatisticsOverview';
// import PartnerDashboardTabs from './PartnerDashboardTabs';
import MartDashboardInfo from './MartDashboardInfo';


const Home = () => {

  return (
    <div className=' dashboard-details d-flex flex-column'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
        <div className='dashboard-pages-heading'>
            <div className='page-details'>
              <div className='left-details-heading start-0 ps-0'>
                <h2>Dashboard</h2>
              </div>
            </div>
        </div>
        <div className='top-dashboard mb-4'>
            <div className='static-overview'>
              <StatisticsOverview />
            </div>
            <div className='tabs-dashboard'>
              <MartDashboardInfo/>
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
