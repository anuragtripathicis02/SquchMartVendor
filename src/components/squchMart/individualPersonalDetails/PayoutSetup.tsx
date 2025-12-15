'use client'
import React, { useState } from 'react'
import '../../../app/flags.css'
import { Form, Button, Dropdown } from 'react-bootstrap';


interface Props {
    nextStep: () => void;
}

const PayoutSetup : React.FC<Props> = ({ nextStep }) => {
    return (
      
      <div className='card-box'>
        <Form>
          
          <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                  <Form.Label >Payout Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                      <option>Bank Payout</option>
                      <option value="1">Bank Transfer</option>
                      <option value="2">Mobile Money</option>
                      <option value="3">Paypal</option>
                    </Form.Select>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                  <Form.Label >Payout Frequency</Form.Label>
                  <Form.Select aria-label="Default select example">
                      <option>Weekly Payout</option>
                      <option value="1">Weekly Payout One</option>
                      <option value="2">Weekly Payout Two</option>
                      <option value="3">Weekly Payout Three</option>
                    </Form.Select>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >Bank Name</Form.Label>
                    <Form.Control type="text" placeholder='Bank name here' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >Branch Name</Form.Label>
                    <Form.Control type="text" placeholder='Branch name here' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >Account Number</Form.Label>
                    <Form.Control type="text" placeholder='12345678901234' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >IFSC Code</Form.Label>
                    <Form.Control type="text" placeholder='12345678901234' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >SWIFT Code</Form.Label>
                    <Form.Control type="text" placeholder='12345678901234' />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className="form-group mb-24">
                    <Form.Label >IBAN Code</Form.Label>
                    <Form.Control type="text" placeholder='12345678901234' />
                </div>
              </div>
              
          </div>
  
          <div className='footer-step-form d-flex justify-content-end'>
              <Button variant="primary" onClick={nextStep} className="btn btn-next-box">
              Save & Next
              </Button>
          </div>
  
        </Form>
      </div>
  
  )
}

export default PayoutSetup