import React, { useState } from "react";
import "../../../app/flags.css";
import { Form, Button, Dropdown } from "react-bootstrap";

const ItemDetailsTable = () => {
        const [selected, setSelected] = useState('Delivery only');
  return (
    <div className="item-details-sec card-box p-16">
      <div className="row">
        <div className="col-md-12 mb-3">
            <h2 className=" border-0 pb-0 mb-0">Table Details</h2>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Table Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Table Name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Booking Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter Booking amount" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Number of Table Quanity</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Table Quantity</option>
              <option value="1">Select Table Quantity</option>
              <option value="2">Select Table Quantity</option>
              <option value="3">Select Table Quantity</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-24">
            <Form.Label>Allowed Number of Guest</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Number of guest</option>
              <option value="1">Select Number of guest</option>
              <option value="2">Select Number of guest</option>
              <option value="3">Select Number of guest</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <Form.Label>Item description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" style={{ height: '140px' }} className=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsTable;
