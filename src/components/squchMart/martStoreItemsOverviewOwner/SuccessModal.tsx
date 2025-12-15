'use client';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

const SuccessModal = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 2500); 
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <Modal show={show} onHide={onClose} centered className="host-profile-modal common-modal-sec modal-small-box ">
            <Modal.Body className="common-modal-body p-0 text-center">
                <div className='modal-box-from p-55'>
                    <div className='text-success mb-3'>
                        <svg width="118" height="100" viewBox="0 0 118 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><circle cx="47" cy="4.16797" r="4" fill="#FF9988"/><circle cx="114" cy="45.168" r="4" fill="#FF9988"/><circle cx="50.8823" cy="94.9319" r="4" transform="rotate(105 50.8823 94.9319)" fill="#FF9988"/><circle cx="2" cy="30.168" r="2" fill="url(#paint0_linear_11073_21292)"/><circle cx="88" cy="96.168" r="2" fill="url(#paint1_linear_11073_21292)"/><circle cx="98.3323" cy="38.2715" r="2" transform="rotate(-45 98.3323 38.2715)" fill="url(#paint2_linear_11073_21292)"/><circle cx="8.35129" cy="56.6173" r="2" transform="rotate(105 8.35129 56.6173)" fill="#FF9988"/><circle cx="18" cy="15.168" r="3" fill="url(#paint3_linear_11073_21292)"/><circle cx="110" cy="78.168" r="3" fill="url(#paint4_linear_11073_21292)"/><circle cx="101.165" cy="9.98828" r="3" transform="rotate(-45 101.165 9.98828)" fill="url(#paint5_linear_11073_21292)"/><circle cx="20.0445" cy="82.5295" r="3" transform="rotate(105 20.0445 82.5295)" fill="url(#paint6_linear_11073_21292)"/><g filter="url(#filter0_d_11073_21292)"><rect x="34" y="18.168" width="56" height="56" rx="28" fill="#E03C22" shape-rendering="crispEdges"/><path d="M71 41.1678L59 53.1678L53.5 47.6678L54.91 46.2578L59 50.3378L69.59 39.7578L71 41.1678Z" fill="white"/></g></g><defs><filter id="filter0_d_11073_21292" x="18" y="10.168" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="8"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.6 0 0 0 0 0.533333 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11073_21292"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11073_21292" result="shape"/></filter><linearGradient id="paint0_linear_11073_21292" x1="2" y1="28.168" x2="2" y2="32.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint1_linear_11073_21292" x1="88" y1="94.168" x2="88" y2="98.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint2_linear_11073_21292" x1="98.3323" y1="36.2715" x2="98.3323" y2="40.2715" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint3_linear_11073_21292" x1="18" y1="12.168" x2="18" y2="18.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint4_linear_11073_21292" x1="110" y1="75.168" x2="110" y2="81.168" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint5_linear_11073_21292" x1="101.165" y1="6.98828" x2="101.165" y2="12.9883" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient><linearGradient id="paint6_linear_11073_21292" x1="20.0445" y1="79.5295" x2="20.0445" y2="85.5295" gradientUnits="userSpaceOnUse"><stop stop-color="#E03C22"/><stop offset="1" stop-color="#FF9988"/></linearGradient></defs></svg>

                    </div>
                    <h5 className="font-text mb-2">Promocode Removed</h5>
                    <p className='m-0 p-0'>The Promocode has been successfully removed.</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SuccessModal