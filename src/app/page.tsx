"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="main-page-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mb-4">Welcome to Squch</h1>
            <p className="lead mb-4">Your comprehensive business management platform</p>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Squch Dashboard</h5>
                    <p className="card-text">Access your main dashboard and manage all your business operations.</p>
                    <Link href="/squchDashboard" className="btn btn-primary">
                      Go to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Squch Mart</h5>
                    <p className="card-text">Direct access to your mart management system.</p>
                    <Link href="/squchDashboard/squchMart" className="btn btn-success">
                      Go to Mart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <Link href="/squchDashboard/squchMart/Login" className="btn btn-outline-primary me-2">
                Login
              </Link>
              <Link href="/squchDashboard/squchMart/Signup" className="btn btn-outline-secondary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
