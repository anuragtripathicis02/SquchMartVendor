'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import LogoCenter from "../../../../public/images/logo-center.png"

const InitiateSupport = () => {
  return (
    <div className='support-center-box'>
        <div className='inner-support text-center'>
            <Image src={LogoCenter} alt='' />
            <h2>Support Tickets</h2>
            <p className='mb-0'>Need help? Squch Support is here for you. If you’ve faced any issues with our services, you can use this option to contact our support team or report a problem directly to the admin. We're here to assist you.</p>
            <Link href="" className='btn btn-secondary mt-4'>Get Started</Link>
        </div>
    </div>
  )
}

export default InitiateSupport