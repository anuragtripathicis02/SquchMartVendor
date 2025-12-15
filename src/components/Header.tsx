'use client'
import React from 'react'
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../../public/images/logo.png'
// import RideShareLogo from '../../public/images/rideShareLogo.png'
import Author from '../../public/images/admin-img.png'
import { Form, Button, InputGroup } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='header-menu position-fixed top-0 w-100 '>
        <div className='inner-header-menu d-flex flex-wrap align-items-center'>
            <div className='menu-logo-box d-flex align-items-center justify-content-between gap-2'>
                <a href="#" className='logo'>
                   <Image src={Logo} alt="" />
                </a>
                
                {/* <button className="btn bg-transparent border-0 p-0" type="button" >
                    <span className="mobile-nav">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="1.60156" width="16.5" height="14.25" rx="1.25" stroke="#3D3D3D" stroke-width="1.5"/><line x1="6.375" y1="1.97656" x2="6.375" y2="16.6016" stroke="#3D3D3D" stroke-width="1.5"/></svg>
                    </span>
                </button> */}
            </div>
            <div className='admin-details-box  d-flex align-items-center justify-content-end gap-2'>
                {/* <div className='page-details'>
                    <Image src={RideShareLogo} alt=''/>
                    <h2>Dashboard</h2>
                </div> */}
                <div className='author-details  d-flex align-items-center gap-3'>
                    {/* <div className='search-box position-relative'>
                        <InputGroup>
                            <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                            <Form.Control type="text" placeholder="Search..." />
                        </InputGroup>
                    </div> */}
                    <div className='notification position-relative'>
                        <span></span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53001 13.77C1.31701 15.164 2.26801 16.131 3.43201 16.613C7.89501 18.463 14.105 18.463 18.568 16.613C19.732 16.131 20.683 15.163 20.47 13.77C20.34 12.913 19.693 12.2 19.214 11.503C18.587 10.579 18.525 9.572 18.524 8.5C18.525 4.358 15.157 1 11 1C6.843 1 3.47501 4.358 3.47501 8.5C3.47501 9.572 3.41301 10.58 2.78501 11.503C2.30701 12.2 1.66101 12.913 1.53001 13.77Z" stroke="#161925" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 18C7.458 19.725 9.076 21 11 21C12.925 21 14.541 19.725 15 18" stroke="#161925" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    <div className='author-box dropdown'>
                        <Dropdown data-bs-theme="dark" align={'end' }>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" >
                                <Image  src={Author} alt=''/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdown-menu-end' >
                                <Dropdown.Item href="#" active>
                                    Home
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Login</Dropdown.Item>
                                <Dropdown.Item href="#">Profile details</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header