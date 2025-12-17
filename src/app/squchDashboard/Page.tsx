import React from 'react'
import Link from 'next/link'

const SquchDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Squch Dashboard</h1>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Squch Mart</h5>
                  <p className="card-text">Access your mart dashboard and manage your store.</p>
                  <Link href="/squchDashboard/squchMart/Login" className="btn btn-primary">
                    Go to Mart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SquchDashboard