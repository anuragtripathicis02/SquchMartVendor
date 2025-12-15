'use client'
import DatePickers from '@/components/DatePickers'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import Image from "next/image";
import { Form } from 'react-bootstrap'
import '../../../app/flags.css';
import LanguageSwitcher from '../Login/LanguageSwitcher'
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName'
import AvatarProfileNew from '../../../../public/images/profile-img.png'
import Signature from '../../../../public/images/signature.png'



const CompanyProfile = () => {
  return (
    <div className='card-box mb-4'>
        <div className='from-bottom-box'>
            <Form>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-xl-2 col-md-4 mb-24'>
                                <div className="form-group d-block">
                                    <Form.Label>Logo Icon</Form.Label>
                                    <div className='from-box-img txet-center d-flex align-items-center justify-content-center'>
                                        <Image src={AvatarProfileNew} alt=''></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-10 col-md-8 mb-24'>
                                <div className="form-group">
                                    <Form.Label>Authorized Signature</Form.Label>
                                    <div className='from-box-img text-center'>
                                        <Image src={Signature} alt=''></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" placeholder='Ubuntu Fresh Mart' />
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
                                    <Form.Control type="email" placeholder='UbuntuFreshMart@gmail.com' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='position-relative location-lung-box'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Country</Form.Label>
                                        <LanguageSwitcherCountryName  paramKey="lang1"/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label >City</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>-- Select a City --</option>
                                        <option value="1">Ostin </option>
                                        <option value="2">Ostin old</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24 mb-md-0">
                                    <Form.Label >Zip Code / Digital Address</Form.Label>
                                    <Form.Control type="text" placeholder='GU-564-5765' />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="form-group mb-24">
                                    <Form.Label >Address</Form.Label>
                                    <Form.Control type="text" placeholder='Enter full Address' />
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
  )
}

export default CompanyProfile