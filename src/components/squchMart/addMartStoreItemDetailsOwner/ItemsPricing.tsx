import Link from 'next/link'
import React from 'react'
import { Form } from 'react-bootstrap'

const ItemsPricing = () => {
  return (
    <div className="item-details-sec card-box p-16">
      <div className="row">
        <div className="col-md-12 mb-3">
            <h2>Items Pricing</h2>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Item Quantity</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Quantity</option>
              <option value="1">Select Quantity</option>
              <option value="2">Select Quantity</option>
              <option value="3">Select Quantity</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Item Quantity</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Quantity</option>
              <option value="1">Select Quantity One</option>
              <option value="2">Select Quantity Two</option>
              <option value="3">Select Quantity Three</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Price" />
          </div>
        </div>
        <div className="col-md-12">
            <Link className="btn-add d-flex justify-content-end" href="">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#652669"/><path d="M11.1992 16H20.7992" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20.8012V11.2012" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemsPricing