import React from 'react'
import { Dropdown } from 'react-bootstrap'

const TopMenu = () => {
  return (
    <div className='top-menu-sec card-box p-16'>
         <div className='heading-com mb-3'>
            <h2>Top dishes in your menu</h2>
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
        <div className='table-sec'>
            <table width='100%'>
                <tr>
                    <th>Menu Items</th>
                    <th>Revenue Contribution</th>
                    <th>Quantity Sold</th>
                </tr>
                <tr>
                    <td>Butter Chicken</td>
                    <td>52%</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>Paneer Tikka</td>
                    <td>10%</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Dal Makhni</td>
                    <td>6%</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>Afghani Chickens</td>
                    <td>4%</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
        <div className='bg-grey p-2 grey-content-box mt-2'>
            <h3>Run promotions to get more orders</h3>
            <p>Set campaigns on your own and offer customized discounts to gve a further boost to your sales.</p>
        </div>
    </div>
  )
}

export default TopMenu