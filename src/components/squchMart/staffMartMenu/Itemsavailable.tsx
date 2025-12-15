import React from 'react'
import { Form } from 'react-bootstrap'

const Itemsavailable = () => {
  return (
    <div className='items-available-sec  card-box p-16'>
        <div className="row">
            <div className="col-md-12 mb-3">
                <h2 className=" border-0 pb-0 mb-0">Items available on</h2>
            </div>
            <div className="col-md-12">
                <div className="checkbox-inline  pt-3 pb-3 d-flex border-bottom-fixed-box flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                    <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                        <div className='icons-text d-flex align-items-center gap-2'>
                            <span className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14.48L19 10.35V7ZM4 14V13C4 11.9 4.9 11 6 11H8V14H4ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z" fill="#5D5D5D"/><path d="M5 6H10V8H5V6ZM19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z" fill="#5D5D5D"/></svg>
                            </span>
                            <span className='text'>Delivery</span>
                        </div>
                        <Form.Check type="checkbox" id="item-custom-switch1" className='m-0' label="" checked/>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="checkbox-inline pt-3 pb-3 d-flex border-bottom-fixed-box flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                    <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                        <div className='icons-text d-flex align-items-center gap-2'>
                            <span className='icons'>
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V6.82C18.0001 7.59621 18.1808 8.36175 18.528 9.056L19.472 10.944C19.8192 11.6382 19.9999 12.4038 20 13.18V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V13.18C4.00005 12.4038 4.18082 11.6382 4.528 10.944L6 8V5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3Z" stroke="#5D5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V13.18C7.99995 12.4038 7.81918 11.6382 7.472 10.944L6 8M11 7H13M12 15C12 15.5304 12.2107 16.0391 12.5858 16.4142C12.9609 16.7893 13.4696 17 14 17C14.5304 17 15.0391 16.7893 15.4142 16.4142C15.7893 16.0391 16 15.5304 16 15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13C13.4696 13 12.9609 13.2107 12.5858 13.5858C12.2107 13.9609 12 14.4696 12 15Z" stroke="#5D5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </span>
                            <span className='text'>Carry-out</span>
                        </div>
                        <Form.Check type="checkbox" id="item-custom-switch2" className='m-0' label="" checked/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Itemsavailable