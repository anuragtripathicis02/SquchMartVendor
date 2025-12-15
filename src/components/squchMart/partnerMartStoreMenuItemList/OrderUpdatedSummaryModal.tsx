import React from 'react';
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";

const OrderUpdatedSummaryModal = ({ show, handleClose }: any) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec modal-small-box pt-4">
        {/* <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header> */}

        <Modal.Body className="common-modal-body text-center p-0 pt-4 pb-2">
            <div className='modal-box p-3'>
                <div className='img-top pb-4'>
                    <svg width="118" height="100" viewBox="0 0 118 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><circle cx="47" cy="4.16797" r="4" fill="#D2FFEB"/><circle cx="114" cy="45.168" r="4" fill="#D2FFEB"/><circle cx="50.8823" cy="94.9319" r="4" transform="rotate(105 50.8823 94.9319)" fill="#D2FFEB"/><circle cx="2" cy="30.168" r="2" fill="#23B674"/><circle cx="88" cy="96.168" r="2" fill="#23B674"/><circle cx="98.3323" cy="38.2715" r="2" transform="rotate(-45 98.3323 38.2715)" fill="#23B674"/><circle cx="8.35129" cy="56.6173" r="2" transform="rotate(105 8.35129 56.6173)" fill="#D2FFEB"/><circle cx="18" cy="15.168" r="3" fill="url(#paint0_linear_10829_48447)"/><circle cx="110" cy="78.168" r="3" fill="url(#paint1_linear_10829_48447)"/><circle cx="101.165" cy="9.98828" r="3" transform="rotate(-45 101.165 9.98828)" fill="url(#paint2_linear_10829_48447)"/><circle cx="20.0445" cy="82.5295" r="3" transform="rotate(105 20.0445 82.5295)" fill="url(#paint3_linear_10829_48447)"/><g filter="url(#filter0_d_10829_48447)"><rect x="34" y="18.168" width="56" height="56" rx="28" fill="#23B674" shape-rendering="crispEdges"/><path d="M71 41.1678L59 53.1678L53.5 47.6678L54.91 46.2578L59 50.3378L69.59 39.7578L71 41.1678Z" fill="white"/></g></g><defs><filter id="filter0_d_10829_48447" x="18" y="10.168" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.12375 0 0 0 0 0.9 0 0 0 0 0.55148 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10829_48447"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10829_48447" result="shape"/></filter><linearGradient id="paint0_linear_10829_48447" x1="18" y1="12.168" x2="18" y2="18.168" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint1_linear_10829_48447" x1="110" y1="75.168" x2="110" y2="81.168" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint2_linear_10829_48447" x1="101.165" y1="6.98828" x2="101.165" y2="12.9883" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient><linearGradient id="paint3_linear_10829_48447" x1="20.0445" y1="79.5295" x2="20.0445" y2="85.5295" gradientUnits="userSpaceOnUse"><stop stop-color="#23B674"/><stop offset="1" stop-color="#7DE9B9"/></linearGradient></defs></svg>
                </div>
                <div className='text-box'>
                    <h5 className='font-text mb-2'>Your order has been successfully updated</h5>
                    <p>Here's your revised order summary</p>
                </div>
                
                <div className='order-slider-box mb-0'>
                    <div className='item-box'>
                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                            <li>
                                <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                <span>Carrot (500 gms)</span>
                            </li>
                            <li>₵20.00</li>
                        </ul>
                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                            <li>
                                <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                <span>Potato (500 gms)</span>
                            </li>
                            <li>₵24.00</li>
                        </ul>
                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                            <li>
                                <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                <span>Hybrid tomato (1 kg)</span>
                            </li>
                            <li>₵24.00</li>
                        </ul>
                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                            <li>
                                <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                <span>Premium Guava (500gms)</span>
                            </li>
                            <li>₵20.00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-end mt-0 ">
            {/* <Link href="" className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>Cancel</Link> */}
            <button className='btn btn-secondary' >Order Details</button>
        </Modal.Footer>

    </Modal>
  );
};

export default OrderUpdatedSummaryModal;
