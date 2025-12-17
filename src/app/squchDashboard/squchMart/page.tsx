import React from 'react'
import Link from 'next/link'
import RouteMap from '@/components/RouteMap'

const SquchMart = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Squch Mart</h1>
          <p>Welcome to Squch Mart - Your one-stop solution for mart management</p>
          
          <div className="row mt-4">
            {/* Authentication */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Authentication</h5>
                  <div className="d-grid gap-2">
                    <Link href="/squchDashboard/squchMart/Login" className="btn btn-outline-primary btn-sm">
                      Login
                    </Link>
                    <Link href="/squchDashboard/squchMart/Signup" className="btn btn-outline-primary btn-sm">
                      Sign Up
                    </Link>
                    <Link href="/squchDashboard/squchMart/forgetpassword" className="btn btn-outline-secondary btn-sm">
                      Forgot Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboards */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Dashboards</h5>
                  <div className="d-grid gap-2">
                    <Link href="/squchDashboard/squchMart/martOwnerDashboard" className="btn btn-outline-success btn-sm">
                      Owner Dashboard
                    </Link>
                    <Link href="/squchDashboard/squchMart/martPartnerDashboard" className="btn btn-outline-success btn-sm">
                      Partner Dashboard
                    </Link>
                    <Link href="/squchDashboard/squchMart/martStaffDashboard" className="btn btn-outline-success btn-sm">
                      Staff Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Management */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Store Management</h5>
                  <div className="d-grid gap-2">
                    <Link href="/squchDashboard/squchMart/martStoreInventory" className="btn btn-outline-info btn-sm">
                      Inventory
                    </Link>
                    <Link href="/squchDashboard/squchMart/martStoreItemsOverview" className="btn btn-outline-info btn-sm">
                      Items Overview
                    </Link>
                    <Link href="/squchDashboard/squchMart/addMartStoreItemDetails" className="btn btn-outline-info btn-sm">
                      Add Items
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders & Business */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Orders & Business</h5>
                  <div className="d-grid gap-2">
                    <Link href="/squchDashboard/squchMart/PartnerMartStoreNewOrders" className="btn btn-outline-warning btn-sm">
                      New Orders
                    </Link>
                    <Link href="/squchDashboard/squchMart/partnerMartStoreDeliveredOrders" className="btn btn-outline-warning btn-sm">
                      Delivered Orders
                    </Link>
                    <Link href="/squchDashboard/squchMart/businessProfile" className="btn btn-outline-warning btn-sm">
                      Business Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Support & Settings */}
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Support & Settings</h5>
                  <div className="d-grid gap-2">
                    <Link href="/squchDashboard/squchMart/setting" className="btn btn-outline-dark btn-sm">
                      Settings
                    </Link>
                    <Link href="/squchDashboard/squchMart/chatSupport" className="btn btn-outline-dark btn-sm">
                      Chat Support
                    </Link>
                    <Link href="/squchDashboard/squchMart/wallet" className="btn btn-outline-dark btn-sm">
                      Wallet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RouteMap />
    </div>
  )
}

export default SquchMart