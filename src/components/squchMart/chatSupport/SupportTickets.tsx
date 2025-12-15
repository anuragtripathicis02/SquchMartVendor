"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'

import LogoIcons from "../../../../public/images/logo-center.png";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"

const SupportTickets = () => {
    return (
        <div className='sec-support-tickets chat-support-main'>
            <div className="support-tickets-content">
                <div className='chat-support-body'>
                    <SimpleBar style={{ maxHeight: '100%' }}>
                        <div className='d-flex mb-1'>
                            <div className='flex-grow-1'>
                                <div className='w-100'>
                                    <div className='d-flex flex-column align-items-start mesge-you'>
                                        <div className='bg-light chat-message'>Hii john! 👋</div>
                                        <div className='bg-light chat-message'>Share your destination, starting point, and trip duration—we’ll create the perfect travel plan for you!" 👋</div>

                                        <div className='bg-light chat-message w-100'>
                                            <ul className="list-unstyled m-0">
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Report a Scam
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Something about the booking
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Something about the booking
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Report Bus Driver
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Report Service Partner
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="small">
                                            <Image src={LogoIcons} alt="" />
                                            12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end text-end mb-1'>
                            <div className='w-100'>
                                <div className='d-flex flex-column align-items-end mesge-me'>
                                    <div className='bg-purple chat-message'>Something about the booking</div>
                                    <div className='d-flex'>
                                        <div className='small'>12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mb-1'>
                            <div className='flex-grow-1'>
                                <div className='w-100'>
                                    <div className='d-flex flex-column align-items-start mesge-you'>
                                        <div className='bg-light chat-message'>Oh! We are sorry that you are facing issues with your booking, please select the booking you are facing the issue with</div>

                                        <div className='bg-light chat-message w-100'>
                                            <ul className="list-unstyled m-0">
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Booking cancelled after confirmation
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Demanded extra cash during check-in
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Something about the booking
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Booked room not available
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Want to cancel the booking
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Other
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="small">
                                            <Image src={LogoIcons} alt="" />
                                            12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end text-end mb-1'>
                            <div className='w-100'>
                                <div className='d-flex flex-column align-items-end mesge-me'>
                                    <div className='bg-purple chat-message'>Other</div>
                                    <div className='d-flex'>
                                        <div className='small'>12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleBar>
                </div>

                <div className='chat-support-footer'>
                    <div className='position-relative d-flex align-items-center w-100'>
                        <textarea className="form-control" data-autoresize="true" placeholder="Enter message here"></textarea>
                        <button className="btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18.0781 3.46407C18.0781 3.46407 18.0781 3.47189 18.0781 3.47579L13.5312 18.4711C13.4624 18.7147 13.3207 18.9313 13.1252 19.0921C12.9297 19.2528 12.6897 19.3499 12.4374 19.3703C12.4015 19.3734 12.3656 19.375 12.3296 19.375C12.0932 19.3757 11.8615 19.3088 11.6619 19.1822C11.4623 19.0555 11.3031 18.8744 11.2031 18.6602L8.35931 12.8242C8.33086 12.7657 8.32136 12.6998 8.33214 12.6357C8.34293 12.5716 8.37345 12.5124 8.41947 12.4664L12.9445 7.94142C13.0567 7.82325 13.1184 7.66591 13.1163 7.50293C13.1142 7.33996 13.0485 7.18424 12.9333 7.06899C12.818 6.95374 12.6623 6.88807 12.4994 6.88599C12.3364 6.8839 12.179 6.94556 12.0609 7.05782L7.53353 11.5828C7.48757 11.6288 7.42839 11.6594 7.36425 11.6701C7.30011 11.6809 7.2342 11.6714 7.17572 11.643L1.33431 8.80001C1.10589 8.69042 0.916158 8.51401 0.790262 8.29416C0.664365 8.07431 0.608246 7.82139 0.629342 7.56892C0.650437 7.31645 0.747752 7.07635 0.908388 6.88043C1.06903 6.68452 1.2854 6.54204 1.52884 6.47188L16.5242 1.92501H16.5359C16.7494 1.86503 16.975 1.86292 17.1896 1.91892C17.4042 1.97491 17.6 2.08698 17.757 2.24364C17.9139 2.40029 18.0264 2.59589 18.0828 2.81036C18.1393 3.02483 18.1376 3.25045 18.0781 3.46407Z" fill="white" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportTickets
