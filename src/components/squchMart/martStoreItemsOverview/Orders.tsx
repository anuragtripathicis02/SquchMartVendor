import React from 'react'
import ActiveOrderstop from './ActiveOrderStop'
import DeliveredOrders from './DeliveredOrders'
import MartDelivery from './MartDelivery'

const Orders = () => {
  return (
    <div className='over-view-dshboard-sec'>
        <div className='row'>
            <div className='col-md-12 mb-4'>
                <MartDelivery />
            </div>
            <div className='col-md-12'>
                <ActiveOrderstop />
                <DeliveredOrders />
            </div>
        </div>
    </div>
  )
}

export default Orders