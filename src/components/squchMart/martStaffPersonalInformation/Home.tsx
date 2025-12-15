"use client";
import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import '../../../app/flags.css';

import AvatarProfileNew from "../../../../public/images/profile-vendor.png";
import Footer from "@/components/Footer";
import { Button, Form, InputGroup } from "react-bootstrap";
import LanguageSwitcher from "../Login/LanguageSwitcher";

const Home = () => {
  return (
    <div className="vehicle-page">
      <div className="booking-sec height-fixed-main d-flex flex-column">
        <div className="dashboard-pages-heading Breadcrumb-sec">
          <div className="page-details d-flex align-items-center gap-2">
            <Link href="" className="btn-back mb-1 d-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.56951 5.92969L3.49951 11.9997L9.56951 18.0697"
                  stroke="#652669"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5004 12H3.67041"
                  stroke="#652669"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <div className="left-details-heading ms-0 position-static">
              <h2>Profile</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Profile</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div className="delivery-order-sec mt-0">
          <div className="top-dashboard tabs-booking">
            <div className="inner-tabs-booking-box">
              <div className="mt-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="operatorTop-sec card-box p-4">
                      <div className="top-operator d-flex align-items-center flex-wrap gap-md-2 gap-1 justify-content-between">
                        <div className="profile-left-box d-flex align-items-center gap-3">
                          <div className="profile position-relative">
                            <Image src={AvatarProfileNew} alt=""></Image>
                            <span className="active"></span>
                          </div>
                          <div className="text">
                            <h5>Leonardo Jovanović</h5>
                            <div className="d-flex align-items-center gap-2">
                              <h6 className="m-0 p-0">
                                <span>#SB3456789008</span>
                              </h6>
                              <div className="d-flex align-items-center gap-1 verified">
                                <span>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.475 6.34995L4.775 5.64995C4.675 5.54995 4.55833 5.49995 4.425 5.49995C4.29167 5.49995 4.175 5.54995 4.075 5.64995C3.975 5.74995 3.925 5.86878 3.925 6.00645C3.925 6.14412 3.975 6.26278 4.075 6.36245L5.125 7.42495C5.225 7.52495 5.34167 7.57495 5.475 7.57495C5.60833 7.57495 5.725 7.52495 5.825 7.42495L7.95 5.29995C8.05 5.19995 8.1 5.08128 8.1 4.94395C8.1 4.80662 8.05 4.68778 7.95 4.58745C7.85 4.48712 7.73133 4.43712 7.594 4.43745C7.45667 4.43778 7.33783 4.48778 7.2375 4.58745L5.475 6.34995ZM6 10.95C5.94167 10.95 5.8875 10.9458 5.8375 10.9375C5.7875 10.9291 5.7375 10.9166 5.6875 10.9C4.5625 10.525 3.66667 9.83128 3 8.81895C2.33333 7.80662 2 6.71695 2 5.54995V3.18745C2 2.97912 2.0605 2.79162 2.1815 2.62495C2.3025 2.45828 2.45867 2.33745 2.65 2.26245L5.65 1.13745C5.76667 1.09578 5.88333 1.07495 6 1.07495C6.11667 1.07495 6.23333 1.09578 6.35 1.13745L9.35 2.26245C9.54167 2.33745 9.698 2.45828 9.819 2.62495C9.94 2.79162 10.0003 2.97912 10 3.18745V5.54995C10 6.71662 9.66667 7.80628 9 8.81895C8.33333 9.83162 7.4375 10.5253 6.3125 10.9C6.2625 10.9166 6.2125 10.9291 6.1625 10.9375C6.1125 10.9458 6.05833 10.95 6 10.95Z"
                                      fill="#20A66A"
                                    />
                                  </svg>
                                </span>
                                <span>Verified Partner</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn-box">
                          <Link href="" className="btn btn-border rounded-3">
                            Change Image
                          </Link>
                        </div>
                      </div>
                      <div className="bottom-profile-box mt-4">
                         <div className='from-bottom-box'>
                              <Form>
                                  <div className='row'>
                                      <div className='col-md-12'>
                                          <div className='row'>
                                              <div className='col-md-4'>
                                                  <div className="form-group mb-24">
                                                      <Form.Label>Full Name</Form.Label>
                                                      <Form.Control type="text" placeholder='Ade' />
                                                  </div>
                                              </div>
                                              <div className='col-md-4'>
                                                  <div className="flag-box form-group mb-24">
                                                      <Form.Label className='fw-mediam'>Contact Number</Form.Label>
                                                      <div className="d-flex border-outer">
                                                          <LanguageSwitcher />
                                                          <div className="flex-grow-1">
                                                              <Form.Control type="text" aria-describedby="" placeholder='1234567890' />
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className='col-md-4'>
                                                  <div className="form-group mb-24">
                                                      <Form.Label>Email</Form.Label>
                                                      <Form.Control type="email" placeholder='adequansah@gmial.com' />
                                                  </div>
                                              </div>
                                              <div className='col-md-4'>
                                                  <div className="form-group mb-24">
                                                      <Form.Label >Gender</Form.Label>
                                                      <Form.Select aria-label="Default select example">
                                                          <option>Male</option>
                                                          <option value="1">Male </option>
                                                          <option value="2">Fe-Male</option>
                                                      </Form.Select>
                                                  </div>
                                              </div>
                                              <div className='col-md-4'>
                                                  <div className="form-group mb-24">
                                                      <Form.Label >Language</Form.Label>
                                                      <Form.Select aria-label="Default select example">
                                                          <option>English</option>
                                                          <option value="1">English </option>
                                                          <option value="2">Hindi</option>
                                                      </Form.Select>
                                                  </div>
                                              </div>
                                              <div className='col-md-4'>
                                                  <div className="form-group mb-24">
                                                      <Form.Label>Position</Form.Label>
                                                      <Form.Control type="text" placeholder='Manager' />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className='w-100 d-flex justify-content-end'>
                                          <Link href="" className='btn btn-primary bg-grey text-gray'>Save Changes</Link>
                                      </div>
                                  </div>
                              </Form>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-vendor text-center pt-4 pb-4">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
