'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Grid, Navigation, Pagination, Mousewheel, Keyboard, Thumbs, FreeMode } from 'swiper/modules';


import ImageBuilding from '../../../../public/images/city-building.png'
import logoFormWhite from "../../../../public/images/logo-white.png";
import logoForm from "../../../../public/images/logo-bus-vender.png";
import Image from "next/image";
import Link from 'next/link';

import Form from 'react-bootstrap/Form';
import '../../../app/flags.css'



const Home = () => {

      const [passwordVisibility, setPasswordVisibility] = useState({
          password1: false,
          password2: false,
          password3: false
      });

          // Toggle function
    const togglePasswordVisibility = (field) => {
      setPasswordVisibility(prevState => ({
          ...prevState,
          [field]: !prevState[field]
      }));
  };


  return (
    <div className='d-flex flex-wrap auth-wrapper'>
       <div className='auth-info d-lg-block d-none' style={{ backgroundImage: "url('../../images/bg-image.png')" }}>
          <div className='auth-logo '>
            <Image src={logoFormWhite} alt='' />
          </div>

        <div className='banner-slider'>
              <div className="position-relative banner-slider-inner-box">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                          el: '.custom-swiper-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            1200: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                        }}
                        modules={[Grid, Pagination]}
                        className="travel-offers-deals-slider"
                    >
                        <SwiperSlide>
                          <div className="banner-card">
                              <div className='heading'>
                                  <h2>Partner with squch</h2>
                                  <h3>Expand Your Online   Orders</h3>  
                              </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="banner-card">
                                <div className='heading'>
                                    <h2>Partner with squch</h2>
                                    <h3>Serve Customers from Anywhere</h3>  
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="banner-card">
                              <div className='heading'>
                                  <h2>Partner with squch</h2>
                                  <h3>Unlock Powerful Tools & Support with Squch</h3>  
                              </div>
                          </div>
                        </SwiperSlide>
                      
                        <div className="custom-swiper-pagination"></div>
                    </Swiper>
                    
                      <div className='banner-listing-box '>
                        <h4>Keep the following document ready</h4>
                        <Form>
                          <div className='row'>
                            <div className='col-xl-6 col-md-12'>
                              <div className='d-flex align-items-center gap-2'>
                                <Form.Check aria-label="option 1" label="FSSAI License copy"/>
                              </div>
                            </div>
                            <div className='col-xl-6 col-md-12'>
                              <div className='d-flex align-items-center gap-2'>
                                <Form.Check aria-label="option 1" label="Shop and Establishment License"/>
                              </div>
                            </div>
                            <div className='col-xl-6 col-md-12'>
                              <div className='d-flex align-items-center gap-2'>
                                <Form.Check aria-label="option 1" label="Bank Account Details"/>
                              </div>
                            </div>
                            <div className='col-xl-6 col-md-12'>
                              <div className='d-flex align-items-center gap-2'>
                                <Form.Check aria-label="option 1" label="GST/TAX Details"/>
                              </div>
                            </div>
                            <div className='col-xl-6 col-md-12'>
                              <div className='d-flex align-items-center gap-2'>
                                <Form.Check aria-label="option 1" label="PAN card copy"/>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </div>

                </div>
          </div>
      </div>
      <div className='auth-form'>
        <div className='toggle-arrow'>
          <button className='btn btn-white'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7593 7.90723L4.66602 16.0006L12.7593 24.0939" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.3326 16H4.89258" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div className='auth-banner-wrapper'>
          <div className='auth-banner'>
            <div className="auth-img d-lg-block d-none">
              <Image src={ImageBuilding} alt="" />
            </div>
          </div>
          <div className='card card-auth-form verification-sec'>
            <div className='block-head text-center'>
              <div className="auth-logo d-lg-none d-block mb-4">
                <Image src={logoForm} alt="" />
              </div>
              <h2 className='form-title'>OTP Verification</h2>
              <p>Enter the OTP sent to your number ending in  <Link href="" className='text-color-purple'>*******789</Link> to verify your identity.</p>
            </div>

            <div className="form-group mb-24 d-flex align-items-center gap-3 text-center">
                <Form.Control type="text" placeholder='1' className='text-center' maxLength={1}/>
                <Form.Control type="text" placeholder='1' className='text-center' maxLength={1}/>
                <Form.Control type="text" placeholder='1' className='text-center' maxLength={1}/>
                <Form.Control type="text" placeholder='1' className='text-center' maxLength={1}/>
                <Form.Control type="text" placeholder='1' className='text-center' maxLength={1}/>
                <Form.Control type="text" placeholder='1' className='text-center' maxLength={1}/>
            </div>
          
            <div className='sec-privacy-policy text-center mb-32'>
              <h5 className='m-0 text-center'>Didn't Get the OTP? <Link href="">  Resend OTP</Link> </h5>
            </div>
            <div className='mb-0'>
            <button className="btn btn-secondary w-100">Verify OTP</button>
            </div>
          </div>
          <div className='copyright-text text-center'>
              <p>© 2024, SQUCH - Control Panel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
