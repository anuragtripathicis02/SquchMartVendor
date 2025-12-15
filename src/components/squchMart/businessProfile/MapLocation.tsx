'use client';
import React, { useRef, useState } from 'react';

export default function MapLocation() {
    return (
      <>

      <div className="map-sec h-100 height-full-box">
        <div className="position-relative d-inline-block w-100 h-100">
          {/* Google Maps Iframe Embed */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3201986229523!2d-1.626615724094991!3d6.688499321197588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc10b7a63f3075%3A0x73b6c66c270b8d29!2sKejetia%20Traffic%20Light!5e0!3m2!1sen!2sgh!4v1714683184105!5m2!1sen!2sgh" width="100%" height="300"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* Circle overlay */}
          <div className="position-absolute rounded-circle circle-box"></div>

          <div className="map-icons">
            <svg width="88" height="100%" className='h-100' viewBox="0 0 88 99" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_10723_24710)"><path d="M37.5975 71.0763L36.9255 70.6213C33.5623 68.2681 30.4371 65.5919 27.5945 62.6308C22.6 57.3983 17 49.5548 17 40.2973C17 28.9083 26.2435 17.5508 39.75 17.5508C53.2565 17.5508 62.5 28.9083 62.5 40.3008C62.5 49.5583 56.9 57.4018 51.9055 62.6273C49.0629 65.5884 45.9377 68.2646 42.5745 70.6178C42.2898 70.8161 42.0658 70.9678 41.9025 71.0728C41.192 71.5453 40.4675 71.9933 39.75 72.4483C39.0325 71.9933 38.308 71.5453 37.5975 71.0763ZM39.75 47.3008C41.6065 47.3008 43.387 46.5633 44.6997 45.2505C46.0125 43.9378 46.75 42.1573 46.75 40.3008C46.75 38.4443 46.0125 36.6638 44.6997 35.351C43.387 34.0383 41.6065 33.3008 39.75 33.3008C37.8935 33.3008 36.113 34.0383 34.8003 35.351C33.4875 36.6638 32.75 38.4443 32.75 40.3008C32.75 42.1573 33.4875 43.9378 34.8003 45.2505C36.113 46.5633 37.8935 47.3008 39.75 47.3008Z" fill="#E03C22"/><path d="M39.75 15.0508C54.7855 15.0508 65 27.6807 65 40.3008C65 50.545 58.8383 58.992 53.7129 64.3545L53.709 64.3584C50.7536 67.437 47.5044 70.2195 44.0078 72.666L44.0039 72.6689C43.7104 72.8735 43.4569 73.0459 43.2549 73.1758L43.2539 73.1748C42.5232 73.6598 41.7645 74.1311 41.0889 74.5596L39.75 75.4082L38.4111 74.5596C37.7259 74.125 36.9563 73.6486 36.2207 73.1631L36.208 73.1543L36.1963 73.1465L35.5234 72.6914L35.4922 72.6699C31.9956 70.2234 28.7464 67.4409 25.791 64.3623L25.7861 64.3574C20.6619 58.9891 14.5 50.5411 14.5 40.2969C14.5002 27.6801 24.7149 15.0508 39.75 15.0508ZM39.75 35.8008C38.6311 35.8008 37.555 36.2173 36.7295 36.9648L36.5684 37.1191C35.7244 37.9631 35.25 39.1073 35.25 40.3008C35.25 41.4943 35.7244 42.6385 36.5684 43.4824L36.7295 43.6367C37.555 44.3842 38.6311 44.8008 39.75 44.8008C40.9435 44.8008 42.0877 44.3263 42.9316 43.4824L43.0859 43.3213C43.8334 42.4958 44.25 41.4197 44.25 40.3008C44.25 39.1819 43.8334 38.1058 43.0859 37.2803L42.9316 37.1191C42.0877 36.2752 40.9435 35.8008 39.75 35.8008Z" stroke="white" stroke-width="5"/></g><defs><filter id="filter0_d_10723_24710" x="0" y="0.550781" width="87.5" height="97.8184" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10723_24710"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10723_24710" result="shape"/></filter></defs></svg>
          </div>
        </div>
      </div>
    </>
  );
}
