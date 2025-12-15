import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import GalleryUpdateBox from './GalleryUpdateBox';
import ItemDetails from './ItemDetails';
import ItemsPricing from './ItemsPricing';
import GalleryUpdateBoxtable from './GalleryUpdateBoxtable';
import ItemDetailsTable from './ItemDetailsTable';
import ItemPreferencesTable from './ItemPreferencesTable';
import Schedule from './Schedule';

const EditTableDetails = ({ show, handleClose }: any) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const timeoutRef = useRef<any>(null);

  const handleSave = () => {
    setShowSuccess(true); 

    timeoutRef.current = setTimeout(() => {
      setShowSuccess(false);
      handleClose(); 
    }, 3000); 
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <>
    <Modal show={show && !showSuccess} onHide={handleClose} centered className="host-profile-modal common-modal-sec edit-modal pt-4">
        <Modal.Header className='border-0'>
          <Button variant="close-btn" onClick={handleClose}>
            <Image src={CloseModal} alt="" />
          </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-0">
          <div className='modal-box-from'>
            <div className='heading p-3 pt-5 pb-0 d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-2'>
              <h2 className='border-0 m-0 p-0'>Edit Table Details</h2>
              <Link href="" className='btn btn-border rounded-4 btn-red'>Delete Item</Link>
            </div>
            <hr className='light-bg mb-3 mb-0'/>
            <div className='form-modal-box card-box profile-availability bg-transparent shadow-none ps-0 pt-0 pe-0'>
              <div className="profile-owner p-16 pt-0 pb-0">
                <div className='row'>
                  <div className='col-md-12 mb-24'><GalleryUpdateBoxtable /></div>
                  <div className='col-md-12 mb-24'><ItemDetailsTable /></div>
                  <div className='col-md-12 mb-24'><ItemPreferencesTable /></div>
                  <div className='col-md-12 mb-24'><Schedule /></div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-md-end justify-content-center mt-0">
          <Link href="" className='btn btn-primary btn-grey btn-full-grey' onClick={handleClose}>Cancel</Link>
          <button className='btn btn-secondary' onClick={handleSave}>Save Details</button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal show={showSuccess} centered backdrop="static" keyboard={false} className="host-profile-modal modal-small-box sucess-modal-small pt-4">
        <Modal.Body className="common-modal-body p-0 text-center">
          <div className="modal-box-from p-5">
            <div className="mb-4">
                <svg width="118" height="100" viewBox="0 0 118 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><circle cx="47" cy="4.16797" r="4" fill="#D2FFEB"/><circle cx="114" cy="45.168" r="4" fill="#D2FFEB"/><circle cx="50.8823" cy="94.9319" r="4" transform="rotate(105 50.8823 94.9319)" fill="#D2FFEB"/><circle cx="2" cy="30.168" r="2" fill="#23B674"/><circle cx="88" cy="96.168" r="2" fill="#23B674"/><circle cx="98.3323" cy="38.2715" r="2" transform="rotate(-45 98.3323 38.2715)" fill="#23B674"/><circle cx="8.35129" cy="56.6173" r="2" transform="rotate(105 8.35129 56.6173)" fill="#D2FFEB"/><circle cx="18" cy="15.168" r="3" fill="url(#paint0_linear_10829_50511)"/><circle cx="110" cy="78.168" r="3" fill="url(#paint1_linear_10829_50511)"/><circle cx="101.165" cy="9.98828" r="3" transform="rotate(-45 101.165 9.98828)" fill="url(#paint2_linear_10829_50511)"/><circle cx="20.0445" cy="82.5295" r="3" transform="rotate(105 20.0445 82.5295)" fill="url(#paint3_linear_10829_50511)"/><g filter="url(#filter0_d_10829_50511)"><rect x="34" y="18.168" width="56" height="56" rx="28" fill="#23B674" shape-rendering="crispEdges"/><path d="M71 41.1678L59 53.1678L53.5 47.6678L54.91 46.2578L59 50.3378L69.59 39.7578L71 41.1678Z" fill="white"/></g></g><defs><filter id="filter0_d_10829_50511" x="18" y="10.168" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.12375 0 0 0 0 0.9 0 0 0 0 0.55148 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10829_50511"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10829_50511" result="shape"/></filter><linearGradient id="paint0_linear_10829_50511" x1="18" y1="12.168" x2="18" y2="18.168" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint1_linear_10829_50511" x1="110" y1="75.168" x2="110" y2="81.168" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint2_linear_10829_50511" x1="101.165" y1="6.98828" x2="101.165" y2="12.9883" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint3_linear_10829_50511" x1="20.0445" y1="79.5295" x2="20.0445" y2="85.5295" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient></defs></svg>
              {/* <Image src={SuccessIcon} alt="Success" width={64} height={64} /> */}
            </div>
            <h4 className="mb-2">Table added successful</h4>
            <p>Item will be updated in 24 hours</p>
            <p className="text-muted small">we have sent a confirmation email on  your registered email id and sms to your registered mobile number for your reference </p>
          </div>
        </Modal.Body>
      </Modal>
      </>
  )
}

export default EditTableDetails