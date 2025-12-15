import React, { useRef, useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import "../../../app/flags.css";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import DatePickers from "@/components/DatePickers";
import CloseModal from "../../../../public/images/close-modal.png";

const InventoryRestockItemModal = ({ show, handleClose }: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const triggerUpload = () => {
    inputRef.current?.click();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="modal-filter common-modal-sec pt-4"
    >
      <Modal.Header>
        <Button variant="close-btn" onClick={handleClose}>
          <Image src={CloseModal} alt="" />
        </Button>
      </Modal.Header>
      <Modal.Body className="common-modal-body">
        <div className="modal-box">
          <div className="heading">
            <h2 className=" pb-3 mb-4">Restock Item</h2>
          </div>
          <Form className="position-relative">
            <div className="img-add-staff-box">
              <div className="form-group mb-24">
                <Form.Label className="d-none">Upload Profile Image</Form.Label>
                <div
                  onClick={triggerUpload}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="border-upload text-center d-flex align-items-center justify-content-center"
                  style={{
                    height: "357px",
                    width: "100%",
                    aspectRatio: "3 / 1",
                    cursor: "pointer",
                  }}
                >
                  <div className="text-muted small">
                    <div className="fs-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="19"
                          height="19"
                          rx="9.5"
                          fill="#652669"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="19"
                          height="19"
                          rx="9.5"
                          stroke="white"
                        />
                        <path
                          d="M13.5 10.5H10.5V13.5H9.5V10.5H6.5V9.5H9.5V6.5H10.5V9.5H13.5V10.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    {uploadedFile ? uploadedFile.name : ""}
                  </div>
                  <Form.Control
                    type="file"
                    onChange={handleChange}
                    ref={inputRef}
                    className="d-none"
                  />
                </div>
              </div>
            </div>
            {/* <div className='order-slider-box staff-box card-box p-16'>
                        <div className='admin-card-box border-0 p-0'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                        <span className='active-dot'></span>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Ade (M)</h6>
                                        <p className='m-0 p-0'>Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
            <div className="row">
              <div className="col-md-4">
                <div className="form-group mb-24">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type="text" placeholder="Amul Masti Dahi " />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-24">
                  <Form.Label>Item Code</Form.Label>
                  <Form.Control type="text" placeholder="45678090 " />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-24">
                  <Form.Label>Item Price</Form.Label>
                  <Form.Control type="text" placeholder="₵20.00" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-24">
                  <Form.Label>Item Quantity</Form.Label>
                  <Form.Control type="text" placeholder="500gm" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-24">
                  <Form.Label>Item on stock</Form.Label>
                  <Form.Control type="text" placeholder="10kg" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-24">
                  <Form.Label>Status</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Active</option>
                    <option value="1">Active</option>
                    <option value="2">Active</option>
                  </Form.Select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-1">
                  <Form.Label>Item Expire Date</Form.Label>
                  <DatePickers />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-4">
                  <Form.Label>Item description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="This is the description of this item & it will only have 2 line max.."
                    style={{ height: "80px" }}
                    className=""
                  />
                </div>
              </div>
            </div>
          </Form>
          <div className="bottom-stock-box mb-4">
            <h5 className="mb-2">Manual Reactivation</h5>
            <div className="text-operator restock-text-box d-flex align-items-center justify-content-between">
              <div className="text-box">
                <span className="font-12">Item Name</span>
                <h6>Amul Masti Dahi </h6>
              </div>
              <div className="text-box">
                <span className="font-12">Item Code</span>
                <h6>45678090</h6>
              </div>
              <div className="text-box">
                <span className="font-12">Item Price</span>
                <h6>₵20.00</h6>
              </div>
              <div className="text-box">
                <span className="font-12">Item Quantity</span>
                <h6>500gm</h6>
              </div>
              <div className="text-box">
                <span className="font-12">Item in stock</span>
                <h6>1kg</h6>
              </div>
              <div className="text-box">
                <span className="font-12">Item Expire Date</span>
                <h6>03-06-2025</h6>
              </div>
              <div className="text-box ">
                <span className="font-12">Status</span>
                <Link href="" className="text-blue mt-5">
           Low on stock
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-end mt-0 ">
        <Link
          href=""
          className="btn btn-primary btn-gray bg-grey text-gray m-0"
          onClick={handleClose}
        >
          Cancel
        </Link>
        <button className="btn btn-secondary ">Add Item</button>
      </Modal.Footer>
    </Modal>
  );
};

export default InventoryRestockItemModal;
