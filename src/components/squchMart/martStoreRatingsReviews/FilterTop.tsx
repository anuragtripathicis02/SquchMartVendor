'use client'
import Link from 'next/link';
import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';

const FilterTop = () => {
  return (
    <div className='filter-top-sec'>
      
                <div className='top-dashboard mb-4'>
                    <div className='promocode-sec'>
                        <div className='top-promocode'>
                            
                            <div className='top-search-filter-box d-flex gap-2 justify-content-between flex-wrap mt-4'>
                                <div className='right-filter overflow-auto'>
                                    <div className='scrollbar-box w-100 d-flex align-items-center gap-2'>
                                        <div className='list-status'>
                                            <Link href="" className='btn btn-primary btn-fixed-h bg-white d-flex align-items-center gap-2 text-gray'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12.0018H8.895M4.534 12.0018H2.75M4.534 12.0018C4.534 11.4237 4.76368 10.8692 5.17251 10.4604C5.58134 10.0515 6.13583 9.82184 6.714 9.82184C7.29217 9.82184 7.84666 10.0515 8.25549 10.4604C8.66432 10.8692 8.894 11.4237 8.894 12.0018C8.894 12.58 8.66432 13.1345 8.25549 13.5433C7.84666 13.9522 7.29217 14.1818 6.714 14.1818C6.13583 14.1818 5.58134 13.9522 5.17251 13.5433C4.76368 13.1345 4.534 12.58 4.534 12.0018ZM21.25 18.6088H15.502M15.502 18.6088C15.502 19.1871 15.2718 19.7423 14.8628 20.1512C14.4539 20.5601 13.8993 20.7898 13.321 20.7898C12.7428 20.7898 12.1883 20.5592 11.7795 20.1503C11.3707 19.7415 11.141 19.187 11.141 18.6088M15.502 18.6088C15.502 18.0305 15.2718 17.4764 14.8628 17.0675C14.4539 16.6586 13.8993 16.4288 13.321 16.4288C12.7428 16.4288 12.1883 16.6585 11.7795 17.0674C11.3707 17.4762 11.141 18.0307 11.141 18.6088M11.141 18.6088H2.75M21.25 5.39484H18.145M13.784 5.39484H2.75M13.784 5.39484C13.784 4.81667 14.0137 4.26218 14.4225 3.85335C14.8313 3.44452 15.3858 3.21484 15.964 3.21484C16.2503 3.21484 16.5338 3.27123 16.7983 3.38079C17.0627 3.49034 17.3031 3.65092 17.5055 3.85335C17.7079 4.05578 17.8685 4.2961 17.9781 4.56059C18.0876 4.82508 18.144 5.10856 18.144 5.39484C18.144 5.68113 18.0876 5.9646 17.9781 6.22909C17.8685 6.49358 17.7079 6.7339 17.5055 6.93634C17.3031 7.13877 17.0627 7.29935 16.7983 7.4089C16.5338 7.51846 16.2503 7.57484 15.964 7.57484C15.3858 7.57484 14.8313 7.34517 14.4225 6.93634C14.0137 6.52751 13.784 5.97302 13.784 5.39484Z" stroke="#5D5D5D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>
                                                <span>Filter</span>
                                            </Link>
                                        </div>
                                        <div className='list-status'>
                                            <Link href="" className='btn btn-primary btn-fixed-h bg-white d-flex align-items-center gap-2 text-gray'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12.0018H8.895M4.534 12.0018H2.75M4.534 12.0018C4.534 11.4237 4.76368 10.8692 5.17251 10.4604C5.58134 10.0515 6.13583 9.82184 6.714 9.82184C7.29217 9.82184 7.84666 10.0515 8.25549 10.4604C8.66432 10.8692 8.894 11.4237 8.894 12.0018C8.894 12.58 8.66432 13.1345 8.25549 13.5433C7.84666 13.9522 7.29217 14.1818 6.714 14.1818C6.13583 14.1818 5.58134 13.9522 5.17251 13.5433C4.76368 13.1345 4.534 12.58 4.534 12.0018ZM21.25 18.6088H15.502M15.502 18.6088C15.502 19.1871 15.2718 19.7423 14.8628 20.1512C14.4539 20.5601 13.8993 20.7898 13.321 20.7898C12.7428 20.7898 12.1883 20.5592 11.7795 20.1503C11.3707 19.7415 11.141 19.187 11.141 18.6088M15.502 18.6088C15.502 18.0305 15.2718 17.4764 14.8628 17.0675C14.4539 16.6586 13.8993 16.4288 13.321 16.4288C12.7428 16.4288 12.1883 16.6585 11.7795 17.0674C11.3707 17.4762 11.141 18.0307 11.141 18.6088M11.141 18.6088H2.75M21.25 5.39484H18.145M13.784 5.39484H2.75M13.784 5.39484C13.784 4.81667 14.0137 4.26218 14.4225 3.85335C14.8313 3.44452 15.3858 3.21484 15.964 3.21484C16.2503 3.21484 16.5338 3.27123 16.7983 3.38079C17.0627 3.49034 17.3031 3.65092 17.5055 3.85335C17.7079 4.05578 17.8685 4.2961 17.9781 4.56059C18.0876 4.82508 18.144 5.10856 18.144 5.39484C18.144 5.68113 18.0876 5.9646 17.9781 6.22909C17.8685 6.49358 17.7079 6.7339 17.5055 6.93634C17.3031 7.13877 17.0627 7.29935 16.7983 7.4089C16.5338 7.51846 16.2503 7.57484 15.964 7.57484C15.3858 7.57484 14.8313 7.34517 14.4225 6.93634C14.0137 6.52751 13.784 5.97302 13.784 5.39484Z" stroke="#5D5D5D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>
                                                <span>Filter</span>
                                            </Link>
                                        </div>
                                        <div className='list-status'>
                                            <div className="form-group">
                                                <Form.Label  className='d-none'>Select Status</Form.Label>
                                                <Form.Select aria-label="Default select example" className='btn-select-top'>
                                                    <option>Select Status</option>
                                                    <option value="2">All Status </option>
                                                    <option value="3">waiter </option>
                                                    <option value="4">Manager </option>
                                                </Form.Select>
                                            </div>
                                        </div>
                    
                                    </div>
                                </div>
                                <div className='search-left'>
                                    <div className='search-box position-relative'>
                                        <InputGroup className='form-group'>
                                            <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                                            <Form.Control type="text" placeholder="Search..." className=' rounded-4'/>
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                      </div>
                </div>
    </div>
  )
}

export default FilterTop