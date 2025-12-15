import React, { useEffect, useState } from 'react'
import '../../../app/flags.css'
import Modal from 'react-bootstrap/Modal';

const PromocodeConfirmationModal = ({ show, handleClose }: any) => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const handleCloseAll = () => {
        setShowDetailsModal(false);
        handleClose();
    };

    useEffect(() => {
        if (show && !showDetailsModal) {
            const timer = setTimeout(() => {
                handleCloseAll();
            }, 2500); 

            return () => clearTimeout(timer); 
        }
    }, [show, showDetailsModal]);

    return (
        <>
            <Modal show={show && !showDetailsModal} onHide={handleCloseAll} centered className="host-profile-modal common-modal-sec modal-small-box pt-4">
                <Modal.Body className="common-modal-body p-0 text-center pt-4 pb-4">
                    <div className='modal-box p-3'>
                        <div className='img-top pb-4'>
                            <svg width="118" height="100" viewBox="0 0 118 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><circle cx="47" cy="4.16797" r="4" fill="#D2FFEB"/><circle cx="114" cy="45.168" r="4" fill="#D2FFEB"/><circle cx="50.8823" cy="94.9319" r="4" transform="rotate(105 50.8823 94.9319)" fill="#D2FFEB"/><circle cx="2" cy="30.168" r="2" fill="#23B674"/><circle cx="88" cy="96.168" r="2" fill="#23B674"/><circle cx="98.3323" cy="38.2715" r="2" transform="rotate(-45 98.3323 38.2715)" fill="#23B674"/><circle cx="8.35129" cy="56.6173" r="2" transform="rotate(105 8.35129 56.6173)" fill="#D2FFEB"/><circle cx="18" cy="15.168" r="3" fill="url(#paint0_linear_10829_48447)"/><circle cx="110" cy="78.168" r="3" fill="url(#paint1_linear_10829_48447)"/><circle cx="101.165" cy="9.98828" r="3" transform="rotate(-45 101.165 9.98828)" fill="url(#paint2_linear_10829_48447)"/><circle cx="20.0445" cy="82.5295" r="3" transform="rotate(105 20.0445 82.5295)" fill="url(#paint3_linear_10829_48447)"/><g filter="url(#filter0_d_10829_48447)"><rect x="34" y="18.168" width="56" height="56" rx="28" fill="#23B674" shape-rendering="crispEdges"/><path d="M71 41.1678L59 53.1678L53.5 47.6678L54.91 46.2578L59 50.3378L69.59 39.7578L71 41.1678Z" fill="white"/></g></g><defs><filter id="filter0_d_10829_48447" x="18" y="10.168" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.12375 0 0 0 0 0.9 0 0 0 0 0.55148 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10829_48447"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10829_48447" result="shape"/></filter><linearGradient id="paint0_linear_10829_48447" x1="18" y1="12.168" x2="18" y2="18.168" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint1_linear_10829_48447" x1="110" y1="75.168" x2="110" y2="81.168" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint2_linear_10829_48447" x1="101.165" y1="6.98828" x2="101.165" y2="12.9883" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint3_linear_10829_48447" x1="20.0445" y1="79.5295" x2="20.0445" y2="85.5295" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient></defs></svg>
                        </div>
                        <div className='text-box'>
                            <h5 className='font-text mb-2'>Promocode has been added successfully.</h5>
                            <h6 className='text-purple'>Your offer has been scheduled to start on 17 Mar 2025</h6>
                            <p className='mt-4'>A confirmation email has been sent to your registered email ID, and an SMS has been sent to your registered mobile number for your reference.</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
     </>
  )
}

export default PromocodeConfirmationModal