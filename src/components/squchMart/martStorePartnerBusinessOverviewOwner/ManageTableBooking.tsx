import Link from 'next/link'
import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import ManageTable from './ManageTable'

const ManageTableBooking = () => {
  return (
    <div className='restaurant-menu-sec'>
        <div className='heading-top-list top-search-filter-box align-items-center mb-4'>
            <div className='heading-box mb-3 d-flex align-items-center gap-2 justify-content-between'>
                <h2>Manage Table</h2>
                <Link href="" className='btn btn-secondary gap-1 d-flex align-items-center'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z" fill="white"/></svg>
                  <span>Add</span>
                </Link>
            </div>
            <div className='search-left'>
                <div className='search-box position-relative'>
                    <InputGroup className='form-group input-width-fixed w-100'>
                        <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                        <Form.Control type="text" placeholder="Search by restaurant name" className='full-width-100' />
                    </InputGroup>
                </div>
            </div>
        </div>
        
        <div className='listing-border-sec mb-4'>
            <ul className='d-flex align-items-center gap-2 flex-wrap'>
                <li>
                    <div className='btn btn-border bg-white'>Images In review (2)</div>
                </li>  
                <li>
                    <div className='btn btn-border bg-white'>Image rejected (1)</div>
                </li>  
            </ul>
        </div>


        <div className='manage-table-sec'>
            <ManageTable />
        </div>

    </div>
  )
}

export default ManageTableBooking