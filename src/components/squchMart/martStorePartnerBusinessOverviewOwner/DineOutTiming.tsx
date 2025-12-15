import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import AddTableTimingModal from './AddTableTimingModal'
import EditTableTimingModal from './EditTableTimingModal'

const DineOutTiming = () => {
    const [showTiming, setShowTiming] = useState(false);
    const [showEditTiming, setShowEditTiming] = useState(false);

  return (
    <div className='dine-table-timing-sec'>
        <div className='heading-top-list top-search-filter-box align-items-center mb-4'>
            <div className='heading-box mb-3 d-flex align-items-center gap-2 justify-content-between'>
                <h2>Dine Out Table Timing</h2>
                <Link href="" className='btn btn-secondary gap-1 d-flex align-items-center'  onClick={() => setShowTiming(true)}> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="white"/></svg>
                    <span>Add</span>
                </Link>
            </div>
        </div>
        <div className='lunch-timing-box mb-24'>
            <div className='head-box position-relative mb-2'>
                <h2>Lunch Timing</h2>
                <span className='line-full'></span>
            </div>
            <ul className='btn-timing-list d-flex align-items-center gap-2 flex-wrap'>
                <li>
                    <Link href="" className='btn btn-white btn-active' onClick={() => setShowEditTiming(true)}>12:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>12:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>01:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>01:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>02:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>02:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>03:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>03:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>04:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>04:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>05:00 PM</Link>
                </li>
            </ul>
        </div>
        <div className='lunch-timing-box mb-24'>
            <div className='head-box position-relative mb-2'>
                <h2>Dinner Timing</h2>
                <span className='line-full'></span>
            </div>
            <ul className='btn-timing-list d-flex align-items-center gap-2 flex-wrap'>
                <li>
                    <Link href="" className='btn btn-white'>06:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>06:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>07:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>07:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>08:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>08:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>09:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>09:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>10:00 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>10:30 PM</Link>
                </li>
                <li>
                    <Link href="" className='btn btn-white '>11:00 PM</Link>
                </li>
            </ul>
        </div>

        <AddTableTimingModal  show={showTiming} handleClose={() => setShowTiming(false)}/>
        <EditTableTimingModal show={showEditTiming} handleClose={() => setShowEditTiming(false)}/>

    </div>
  )
}

export default DineOutTiming