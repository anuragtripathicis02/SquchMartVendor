import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import UpperCrust from '../../../../public/images/upper-crust.png'

const TopDashboard = () => {
  return (
    <div className='top-dashboard'>
        <div className='inner-top-dashboard d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3 mb-4'>
            <div className='left-details d-flex align-items-center gap-3 flex-wrap'>
                <div className='img-box'>
                    <Image src={UpperCrust} alt=''></Image>
                </div>
                <div className='text-box'>
                    <h2>Ubuntu Fresh Mart</h2>
                    <p className='m-0 p-0'>g7 10th St Osu, Accra, Ghana</p>
                </div>
            </div>
            <div className='right-btn'>
                <ul className='d-flex align-items-center flex-md-nowrap flex-wrap gap-2'>
                    <li>
                        <Link href="" className='btn btn-black'>Business Details</Link>
                    </li>
                    <li>
                        <Link href="" className='btn btn-border'>Mart / Store</Link>
                    </li>                  
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopDashboard