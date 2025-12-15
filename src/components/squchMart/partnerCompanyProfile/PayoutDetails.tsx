'use client'
import DatePickers from '@/components/DatePickers'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap'
import '../../../app/flags.css';
import LanguageSwitcher from '../Login/LanguageSwitcher'
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName'

const PayoutDetails = () => {
  return (
    <div className='card-box mb-4'>
        <div className='from-bottom-box'>
            <Form>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label >Payout Type</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Bank Payout</option>
                                        <option value="1">Bank Payout </option>
                                        <option value="2">Bank Payout</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label >Payout Frequency</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Weekly</option>
                                        <option value="1">Weekly </option>
                                        <option value="2">Weekly</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label>Bank Name</Form.Label>
                                    <Form.Control type="text" placeholder='Bank name here' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label>Branch Name</Form.Label>
                                    <Form.Control type="text" placeholder='Branch name here' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control type="text" placeholder='12345678901234' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label>IFSC Code</Form.Label>
                                    <Form.Control type="text" placeholder='12345678901234' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group mb-24">
                                    <Form.Label>SWIFT Code</Form.Label>
                                    <Form.Control type="text" placeholder='12345678901234' />
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className="form-group mb-0">
                                    <Form.Label >IBAN Code</Form.Label>
                                    <Form.Control type="text" placeholder='12345678901234' />
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

export default PayoutDetails