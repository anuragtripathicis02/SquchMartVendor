'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import '../../../app/flags.css';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";

const DeleteStaffConfirmationModal = ({ show, handleClose, onFinalClose }: any) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDeleteOrder = () => {
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
      handleClose();
      if (onFinalClose) onFinalClose(); 
    }, 2500);
  };

  return (
    <>
      <Modal show={show && !showSuccessModal} onHide={handleClose} centered className="host-profile-modal common-modal-sec modal-small-box pt-0">
        <Modal.Header className='border-0'>
          <Button variant="close-btn" onClick={handleClose}>
            <Image src={CloseModal} alt="Close" />
          </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-5">
          <div className='modal-box'>
            <div className='delete-modal-item'>
                <span className='d-block m-auto text-center'>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60 2.5C69.3529 2.5 76.2424 2.50157 81.7158 2.875C87.1668 3.24692 91.0306 3.9793 94.3506 5.35449C103.539 9.16052 110.839 16.4609 114.646 25.6494C116.021 28.9694 116.753 32.8332 117.125 38.2842C117.498 43.7576 117.5 50.6471 117.5 60C117.5 69.3529 117.498 76.2424 117.125 81.7158C116.753 87.1668 116.021 91.0306 114.646 94.3506C110.839 103.539 103.539 110.839 94.3506 114.646C91.0306 116.021 87.1668 116.753 81.7158 117.125C76.2424 117.498 69.3529 117.5 60 117.5C50.6471 117.5 43.7576 117.498 38.2842 117.125C32.8332 116.753 28.9694 116.021 25.6494 114.646C16.4609 110.839 9.16052 103.539 5.35449 94.3506C3.9793 91.0306 3.24692 87.1668 2.875 81.7158C2.50157 76.2424 2.5 69.3529 2.5 60C2.5 50.6471 2.50156 43.7576 2.875 38.2842C3.24692 32.8332 3.9793 28.9694 5.35449 25.6494C9.16052 16.4609 16.4609 9.16052 25.6494 5.35449C28.9694 3.9793 32.8332 3.24692 38.2842 2.875C43.7576 2.50156 50.6471 2.5 60 2.5Z" fill="#FEF4F2"/><path d="M60 2.5C69.3529 2.5 76.2424 2.50157 81.7158 2.875C87.1668 3.24692 91.0306 3.9793 94.3506 5.35449C103.539 9.16052 110.839 16.4609 114.646 25.6494C116.021 28.9694 116.753 32.8332 117.125 38.2842C117.498 43.7576 117.5 50.6471 117.5 60C117.5 69.3529 117.498 76.2424 117.125 81.7158C116.753 87.1668 116.021 91.0306 114.646 94.3506C110.839 103.539 103.539 110.839 94.3506 114.646C91.0306 116.021 87.1668 116.753 81.7158 117.125C76.2424 117.498 69.3529 117.5 60 117.5C50.6471 117.5 43.7576 117.498 38.2842 117.125C32.8332 116.753 28.9694 116.021 25.6494 114.646C16.4609 110.839 9.16052 103.539 5.35449 94.3506C3.9793 91.0306 3.24692 87.1668 2.875 81.7158C2.50157 76.2424 2.5 69.3529 2.5 60C2.5 50.6471 2.50156 43.7576 2.875 38.2842C3.24692 32.8332 3.9793 28.9694 5.35449 25.6494C9.16052 16.4609 16.4609 9.16052 25.6494 5.35449C28.9694 3.9793 32.8332 3.24692 38.2842 2.875C43.7576 2.50156 50.6471 2.5 60 2.5Z" stroke="#FFE5E1" stroke-width="5"/><path d="M90 39.9362C78.9 38.8362 67.7333 38.2695 56.6 38.2695C50 38.2695 43.4 38.6029 36.8 39.2695L30 39.9362" stroke="#F35940" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M48.334 36.568L49.0673 32.2013C49.6007 29.0346 50.0006 26.668 55.634 26.668H64.3673C70.0007 26.668 70.434 29.168 70.934 32.2346L71.6673 36.568" stroke="#F35940" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M82.8346 50.4688L80.668 84.0354C80.3013 89.2687 80.0013 93.3354 70.7013 93.3354H49.3013C40.0013 93.3354 39.7013 89.2687 39.3346 84.0354L37.168 50.4688" stroke="#F35940" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.4336 75H65.5336" stroke="#F35940" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M51.666 61.668H68.3327" stroke="#F35940" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <h4 className='mb-2 text-center mt-4'>Are you sure ?</h4>
                <p className='mb-0 text-center'>Do you really want to delete these staff Details from the records ?</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-md-end justify-content-center">
          <button type='button' className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>
            Cancel
          </button>
          <button className='btn btn-primary btn-orange m-0' onClick={handleDeleteOrder}>
            Reject Order
          </button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}

      <Modal show={showSuccessModal} onHide={() => {}} centered className="host-profile-modal common-modal-sec modal-small-box pt-0">
        <Modal.Body className="text-center p-5">
          <div className="mb-3">
            <div className="success-icon mx-auto mb-3" >
                <svg width="118" height="100" viewBox="0 0 118 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><circle cx="47" cy="4.16797" r="4" fill="#FF9988"/><circle cx="114" cy="45.168" r="4" fill="#FF9988"/><circle cx="50.8823" cy="94.9319" r="4" transform="rotate(105 50.8823 94.9319)" fill="#FF9988"/><circle cx="2" cy="30.168" r="2" fill="url(#paint0_linear_10829_48689)"/><circle cx="88" cy="96.168" r="2" fill="url(#paint1_linear_10829_48689)"/><circle cx="98.3323" cy="38.2715" r="2" transform="rotate(-45 98.3323 38.2715)" fill="url(#paint2_linear_10829_48689)"/><circle cx="8.35129" cy="56.6173" r="2" transform="rotate(105 8.35129 56.6173)" fill="#FF9988"/><circle cx="18" cy="15.168" r="3" fill="url(#paint3_linear_10829_48689)"/><circle cx="110" cy="78.168" r="3" fill="url(#paint4_linear_10829_48689)"/><circle cx="101.165" cy="9.98828" r="3" transform="rotate(-45 101.165 9.98828)" fill="url(#paint5_linear_10829_48689)"/><circle cx="20.0445" cy="82.5295" r="3" transform="rotate(105 20.0445 82.5295)" fill="url(#paint6_linear_10829_48689)"/><g filter="url(#filter0_d_10829_48689)"><rect x="34" y="18.168" width="56" height="56" rx="28" fill="#E03C22" shape-rendering="crispEdges"/><path d="M71 41.1678L59 53.1678L53.5 47.6678L54.91 46.2578L59 50.3378L69.59 39.7578L71 41.1678Z" fill="white"/></g></g><defs><filter id="filter0_d_10829_48689" x="18" y="10.168" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.6 0 0 0 0 0.533333 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10829_48689"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10829_48689" result="shape"/></filter><linearGradient id="paint0_linear_10829_48689" x1="2" y1="28.168" x2="2" y2="32.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint1_linear_10829_48689" x1="88" y1="94.168" x2="88" y2="98.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint2_linear_10829_48689" x1="98.3323" y1="36.2715" x2="98.3323" y2="40.2715" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint3_linear_10829_48689" x1="18" y1="12.168" x2="18" y2="18.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint4_linear_10829_48689" x1="110" y1="75.168" x2="110" y2="81.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint5_linear_10829_48689" x1="101.165" y1="6.98828" x2="101.165" y2="12.9883" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint6_linear_10829_48689" x1="20.0445" y1="79.5295" x2="20.0445" y2="85.5295" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient></defs></svg>
            </div>
            <h5 className="font-text mt-3 mb-2">Staff Details Removed</h5>
            <p>The Staff Details has been successfully removed.</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DeleteStaffConfirmationModal