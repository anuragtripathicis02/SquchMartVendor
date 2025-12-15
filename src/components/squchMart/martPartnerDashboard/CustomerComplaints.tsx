import Link from 'next/link'
import React from 'react'
import { Dropdown } from 'react-bootstrap'

const CustomerComplaints = () => {
  return (
    <div className='top-menu-sec card-box p-16 h-100 d-flex flex-column'>
        <div className='top-box'>
            <div className='heading-com mb-3'>
                <h2>Customer Complaints</h2>
                <div className='top-dashboard-dropdown d-flex align-items-center gap-1'>
                    <p className='m-0 p-0'>Details form</p>
                    <div className='dropdown-sec text-dropdown-box'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" className='text-purple d-flex align-items-center gap-2' id="dropdown-basic">
                            <span>24 Mar to 30 Mar 2024</span>
                            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L8 0H0L4 4Z" fill="#652669"/></svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                <span>24 Mar to 30 Mar 2024</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2' > 
                                <span>24 Mar to 30 Mar 2024</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className='btn-active-red d-flex align-items-center gap-2'> 
                                <span>24 Mar to 30 Mar 2024</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </div>
            </div>
            <div className='complaints-sec'>
                <h4>10 orders with customer complaints</h4>
                <div className='d-flex align-items-center gap-2 text-rating'><span className='d-flex align-items-center gap-1'>2.3 <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.56125 0.699661L5.2457 2.06855C5.33903 2.25911 5.58792 2.44188 5.79792 2.47688L7.03847 2.68299C7.83181 2.81522 8.01847 3.39077 7.44681 3.95855L6.48236 4.92299C6.31903 5.08633 6.22958 5.40133 6.28014 5.62688L6.55625 6.82077C6.77403 7.76577 6.27236 8.13133 5.43625 7.63744L4.27347 6.94911C4.06347 6.82466 3.71736 6.82466 3.50347 6.94911L2.3407 7.63744C1.50847 8.13133 1.00292 7.76188 1.2207 6.82077L1.49681 5.62688C1.54736 5.40133 1.45792 5.08633 1.29458 4.92299L0.33014 3.95855C-0.237637 3.39077 -0.0548595 2.81522 0.738474 2.68299L1.97903 2.47688C2.18514 2.44188 2.43403 2.25911 2.52736 2.06855L3.21181 0.699661C3.58514 -0.0431163 4.19181 -0.0431163 4.56125 0.699661Z" fill="#F35940"/></svg></span> Average rating</div>
            </div>
            <div className='table-sec'>
                <table width='100%'>
                    <tr>
                        <td>Wrong items deliverd</td>
                        <td className='text-end'>01</td>
                    </tr>
                    <tr>
                        <td>Missing items</td>
                        <td className='text-end'>02</td>
                    </tr>
                    <tr>
                        <td>Poor taste/quality</td>
                        <td className='text-end'>01</td>
                    </tr>
                </table>
            </div>
        </div>
        <div className='bg-light-red p-2 grey-content-box mt-xl-auto mt-3'>
            <Link href="" className='d-flex align-items-center gap-2 justify-content-between'>
                <span className='d-flex align-items-center gap-1'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11847_42011)"><path d="M8 1.5C6.264 1.5 4.631 2.176 3.404 3.404C2.177 4.632 1.5 6.264 1.5 8C1.5 9.736 2.176 11.369 3.404 12.596C4.632 13.823 6.264 14.5 8 14.5C9.736 14.5 11.369 13.824 12.596 12.596C13.823 11.368 14.5 9.736 14.5 8C14.5 6.264 13.824 4.631 12.596 3.404C11.368 2.177 9.736 1.5 8 1.5ZM8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM7 11H9V13H7V11ZM7 3H9V9H7V3Z" fill="#F81619"/></g><defs><clipPath id="clip0_11847_42011"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                    4 complaints about your food delivery
                </span>
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45199 6.58023L3.51299 5.52024L9.29199 11.2972C9.38514 11.3898 9.45907 11.4999 9.50952 11.6211C9.55997 11.7424 9.58594 11.8724 9.58594 12.0037C9.58594 12.1351 9.55997 12.2651 9.50952 12.3863C9.45907 12.5076 9.38514 12.6177 9.29199 12.7102L3.51299 18.4902L2.45299 17.4302L7.87699 12.0052L2.45199 6.58023Z" fill="#F81619"/></svg>
            </Link>
        </div>
    </div>
  )
}

export default CustomerComplaints