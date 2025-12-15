import React, { useRef, useState } from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";

const AddMenuItems  = ({ show, handleClose }: any) => {
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
    
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec pt-4">
        <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-0">
            <div className='modal-box-from'>
                <div className='heading p-3 pt-4 pb-0'>
                    <h2 className='border-0 m-0 p-0'>Add Menu Items</h2>
                </div>
                <hr className='light-bg mb-3 mb-0'/>
                <div className='form-modal-box card-box profile-availability bg-transparent shadow-none ps-0 pt-0 pe-0'>
                    <div className="profile-owner p-16 pt-0 pb-0">
                        <div className='from-download'>
                            <Form>
                                <Link href="" className='btn btn-grey border-1 border rounded-3 ps-4 pe-4 pt-2 pb-2 mb-4'>Download Sample CSV</Link>

                                <div className="form-group mb-24">
                                    <Form.Label>Upload CSV file</Form.Label>
                                    <div onClick={triggerUpload}
                                    onDrop={handleDrop}
                                    onDragOver={(e) => e.preventDefault()}
                                    className="border-upload text-center d-flex align-items-center justify-content-center"
                                    style={{
                                        height: '220px',
                                        width: '100%',
                                        aspectRatio: '3 / 1',
                                        cursor: 'pointer',
                                    }}
                                    >
                                    <div className="text-muted small">
                                        <div className="fs-4">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 20.0001C5.45 20.0001 4.97933 19.8044 4.588 19.4131C4.19667 19.0217 4.00067 18.5507 4 18.0001V16.0001C4 15.7167 4.096 15.4794 4.288 15.2881C4.48 15.0967 4.71733 15.0007 5 15.0001C5.28267 14.9994 5.52033 15.0954 5.713 15.2881C5.90567 15.4807 6.00133 15.7181 6 16.0001V18.0001H18V16.0001C18 15.7167 18.096 15.4794 18.288 15.2881C18.48 15.0967 18.7173 15.0007 19 15.0001C19.2827 14.9994 19.5203 15.0954 19.713 15.2881C19.9057 15.4807 20.0013 15.7181 20 16.0001V18.0001C20 18.5501 19.8043 19.0211 19.413 19.4131C19.0217 19.8051 18.5507 20.0007 18 20.0001H6ZM11 7.85006L9.125 9.72506C8.925 9.92506 8.68767 10.0211 8.413 10.0131C8.13833 10.0051 7.90067 9.90073 7.7 9.70006C7.51667 9.50006 7.42067 9.26673 7.412 9.00006C7.40333 8.7334 7.49933 8.50006 7.7 8.30006L11.3 4.70006C11.4 4.60006 11.5083 4.5294 11.625 4.48806C11.7417 4.44673 11.8667 4.42573 12 4.42506C12.1333 4.4244 12.2583 4.4454 12.375 4.48806C12.4917 4.53073 12.6 4.6014 12.7 4.70006L16.3 8.30006C16.5 8.50006 16.596 8.7334 16.588 9.00006C16.58 9.26673 16.484 9.50006 16.3 9.70006C16.1 9.90006 15.8627 10.0044 15.588 10.0131C15.3133 10.0217 15.0757 9.92573 14.875 9.72506L13 7.85006V15.0001C13 15.2834 12.904 15.5211 12.712 15.7131C12.52 15.9051 12.2827 16.0007 12 16.0001C11.7173 15.9994 11.48 15.9034 11.288 15.7121C11.096 15.5207 11 15.2834 11 15.0001V7.85006Z" fill="#838383"/></svg>
                                        </div>
                                        {uploadedFile ? (
                                            uploadedFile.name
                                        ) : (
                                            <>
                                            Drag & Drop a CSV file here or click to upload<br />
                                            Upload a CSV or Excel file to begin the import process
                                            </>
                                        )}
                                    </div>
                                    <Form.Control
                                        type="file"
                                        onChange={handleChange}
                                        ref={inputRef}
                                        className="d-none"
                                    />
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-center mt-0 position-relative">
            <div className='or-line position-absolute'>Or</div>
            <button className='btn btn-secondary' >Add Item Manually</button>
        </Modal.Footer>
    </Modal>

  )
}

export default AddMenuItems