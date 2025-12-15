import React from 'react'
import NotificationBox from './NotificationBox'
import Overview from './Overview'
import TotalRidesChart from './TotalRidesChart'
import BarChart from './BarChart'
// import TopMenu from '../partnerDashboard/TopMenu'
import CustomerComplaints from './CustomerComplaints'
import TopMenu from './TopMenu'
// import TopDashboard from './TopDashboard'
import ActiveOrders from './ActiveOrders'

const OverviewDshboard = () => {
  return (
    <div className='over-view-dshboard-sec'>
        <div className='row'>
            <div className='col-md-12'>
                <NotificationBox />
            </div>
            <div className='col-md-12'>
            <ActiveOrders />
            <Overview />
            <div className='chart-dashboard-sec row mt-4'>
              <div className='col-md-12'>
                <div className='heading-com mb-3'>
                    <h2>Food Ordering Insights</h2>
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
    </div>
  )
}

export default OverviewDshboard