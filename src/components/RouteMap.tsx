import React from 'react'
import Link from 'next/link'

const RouteMap = () => {
  const routes = [
    {
      category: "Authentication",
      routes: [
        { path: "/squchDashboard/squchMart/Login", name: "Login" },
        { path: "/squchDashboard/squchMart/Signup", name: "Sign Up" },
        { path: "/squchDashboard/squchMart/forgetpassword", name: "Forgot Password" },
        { path: "/squchDashboard/squchMart/otpVerification", name: "OTP Verification" },
        { path: "/squchDashboard/squchMart/resettingPassword", name: "Reset Password" },
      ]
    },
    {
      category: "Dashboards",
      routes: [
        { path: "/squchDashboard/squchMart/martOwnerDashboard", name: "Owner Dashboard" },
        { path: "/squchDashboard/squchMart/martPartnerDashboard", name: "Partner Dashboard" },
        { path: "/squchDashboard/squchMart/martStaffDashboard", name: "Staff Dashboard" },
      ]
    },
    {
      category: "Store Management",
      routes: [
        { path: "/squchDashboard/squchMart/martStoreInventory", name: "Store Inventory" },
        { path: "/squchDashboard/squchMart/martStoreItemsOverview", name: "Items Overview" },
        { path: "/squchDashboard/squchMart/addMartStoreItemDetails", name: "Add Store Items" },
      ]
    },
    {
      category: "Orders & Business",
      routes: [
        { path: "/squchDashboard/squchMart/PartnerMartStoreNewOrders", name: "New Orders" },
        { path: "/squchDashboard/squchMart/partnerMartStoreDeliveredOrders", name: "Delivered Orders" },
        { path: "/squchDashboard/squchMart/businessProfile", name: "Business Profile" },
      ]
    },
    {
      category: "Profile & Settings",
      routes: [
        { path: "/squchDashboard/squchMart/individualPersonalDetails", name: "Personal Details" },
        { path: "/squchDashboard/squchMart/completingIndividualProfile", name: "Complete Profile" },
        { path: "/squchDashboard/squchMart/vendorPersonalInformation", name: "Vendor Information" },
        { path: "/squchDashboard/squchMart/setting", name: "Settings" },
      ]
    },
    {
      category: "Support & Policies",
      routes: [
        { path: "/squchDashboard/squchMart/chatSupport", name: "Chat Support" },
        { path: "/squchDashboard/squchMart/privacyPolicy", name: "Privacy Policy" },
        { path: "/squchDashboard/squchMart/refundPolicy", name: "Refund Policy" },
        { path: "/squchDashboard/squchMart/termsConditions", name: "Terms & Conditions" },
      ]
    },
    {
      category: "Financial",
      routes: [
        { path: "/squchDashboard/squchMart/wallet", name: "Wallet" },
        { path: "/squchDashboard/squchMart/martWallet", name: "Mart Wallet" },
        { path: "/squchDashboard/squchMart/payoutSummeryMart", name: "Payout Summary" },
      ]
    }
  ]

  return (
    <div className="container mt-4">
      <h2>Available Routes</h2>
      <div className="row">
        {routes.map((category, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">{category.category}</h5>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  {category.routes.map((route, routeIndex) => (
                    <Link 
                      key={routeIndex}
                      href={route.path} 
                      className="list-group-item list-group-item-action"
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RouteMap