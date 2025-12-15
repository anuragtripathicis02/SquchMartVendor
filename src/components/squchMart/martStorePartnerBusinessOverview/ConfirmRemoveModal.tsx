'use client';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import CloseModal from "../../../../public/images/close-modal.png";
import SuccessModal from './SuccessModal';
const ConfirmRemoveModal = ({ show, handleClose, onConfirm }: any) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleConfirm = () => {
        onConfirm(); // your original callback
        handleClose(); // close current confirm modal
        setShowSuccess(true); // open success modal
    };

    const handleSuccessClose = () => setShowSuccess(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec modal-small-box pt-4">
                <Modal.Header className='border-0'>
                    <Button variant="close-btn" onClick={handleClose}>
                        <Image src={CloseModal} alt="Close" />
                    </Button>
                </Modal.Header>
                <Modal.Body className="common-modal-body p-0 text-center">
                    <div className='modal-box-from p-4'>
                        <div className='text-danger mb-3'>
                            <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51 10C73.6443 10 92 28.3557 92 51C92 73.6443 73.6443 92 51 92C28.3557 92 10 73.6443 10 51C10 28.3557 28.3557 10 51 10Z" stroke="#E03C22" strokeWidth="3"/>
                                <path d="M51 34H51.034M51 68V46.75M93.5 51C93.5 74.4727 74.4727 93.5 51 93.5C27.5273 93.5 8.5 74.4727 8.5 51C8.5 27.5273 27.5273 8.5 51 8.5C74.4727 8.5 93.5 27.5273 93.5 51Z" stroke="#E03C22" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h5 className="font-text">Are you sure you want to remove the table timing?</h5>
                    </div>
                </Modal.Body>
                <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-md-end justify-content-center mt-0">
                    <Button variant="light" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleConfirm}>Yes</Button>
                </Modal.Footer>
            </Modal>

            <SuccessModal show={showSuccess} onClose={handleSuccessClose} />
        </>
    );
};

export default ConfirmRemoveModal;