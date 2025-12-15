'use client'
import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Button, Form, InputGroup } from 'react-bootstrap';
import PartnerStaffList from './PartnerStaffList';
import AddStaffDetails from './AddStaffDetails';
// import DineOutOverview from './DineOutOverview';
// import FoodDeliveryOverview from './FoodDeliveryOverview';

const Home = () => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    
    const handleShowDetails = () => {
        setShowDetailsModal(true);
    };

    const handleCloseAll = () => {
        setShowDetailsModal(false);
    };


  return (
    <div className='vehicle-page'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
          <div className='dashboard-pages-heading Breadcrumb-sec'>
            <div className='page-details d-flex align-items-center gap-2 p-0'>
                <Link href="" className="btn-back mb-1 d-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5004 12H3.67041" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
                <div className='left-details-heading position-static'>
                    <h2>Staff</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Staff</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
          </div>
          <div className='top-dashboard mb-4'>
              <div className='promocode-sec'>
                  <div className='top-promocode'>
                      <div className='top-btn-heading d-flex align-items-center justify-content-between gap-2'>
                          <h2 className='m-0 p-0'>List of staff</h2>
                          <Button type='button' className='btn btn-secondary d-flex align-items-center gap-2' onClick={handleShowDetails}> 
                              <span>Add Staff</span>
                          </Button>
                      </div>
                      
                      <div className='top-search-filter-box d-flex gap-2 justify-content-between flex-wrap mt-4'>
                          <div className='search-left'>
                              <div className='search-box position-relative'>
                                  <InputGroup className='form-group'>
                                      <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                                      <Form.Control type="text" placeholder="Search..." className='rounded-input'/>
                                  </InputGroup>
                              </div>
                          </div>
                          <div className='right-filter overflow-auto'>
                              <div className='scrollbar-box w-100 d-flex align-items-center gap-2'>
                                  <div className='list-status'>
                                      <div className="form-group">
                                          <Form.Label  className='d-none'>Supreme Upper Crust</Form.Label>
                                          <Form.Select aria-label="Default select example" className='btn-select-top'>
                                              <option>Supreme Upper Crust</option>
                                              <option value="2">Supreme Upper Crust </option>
                                              <option value="3">Supreme Upper Crust </option>
                                              <option value="4">Supreme Upper Crust </option>
                                          </Form.Select>
                                      </div>
                                  </div>
                                  <div className='list-status'>
                                      <div className="form-group">
                                          <Form.Label  className='d-none'>Select Staff</Form.Label>
                                          <Form.Select aria-label="Default select example" className='btn-select-top'>
                                              <option>Select Staff</option>
                                              <option value="2">All Staff </option>
                                              <option value="3">waiter </option>
                                              <option value="4">Manager </option>
                                          </Form.Select>
                                      </div>
                                  </div>
              
                              </div>
                          </div>
                      </div>
          
                  </div>
                </div>
          </div>
          <div className='staff-sec mb-4'>
            <PartnerStaffList />
          </div>
      </div>
      <div className='footer-vendor text-center pt-4 pb-4'>
        <Footer />
      </div>

      <AddStaffDetails  show={showDetailsModal} handleClose={handleCloseAll} />

    </div>
  );
};

export default Home;
