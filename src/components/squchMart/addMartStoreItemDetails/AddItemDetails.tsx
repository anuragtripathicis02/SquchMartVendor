import React from 'react'
import GalleryUpdateBox from './GalleryUpdateBox'
import ItemDetails from './ItemDetails'
import ItemsPricing from './ItemsPricing'
import Itemsavailable from './Itemsavailable'
import ItemPreferences from './ItemPreferences'
import CustomizeAddOn from './CustomizeAddOn'
import Schedule from './Schedule'
import AddRecommendedItems from './AddRecommendedItems'
import Link from 'next/link'

const AddItemDetails = () => {
  return (
    <div className='add-item-details-sec'>
        <div className='row'>
            <div className='col-xl-6 col-md-12'>
                <div className='gallery-img-box mb-24'>
                    <GalleryUpdateBox />
                </div>
            </div>
            <div className='col-xl-6 col-md-12'>
                <div className='item-details-box mb-24'>
                    <ItemDetails />
                </div>
            </div>
            <div className='col-md-12'>
                <div className='items-pricing-box mb-24'>
                    <ItemsPricing />
                </div>
            </div>
            <div className='col-xl-6 col-lg-5 col-md-12 mb-24'>
                <div className='items-available-box'>
                    <Itemsavailable />
                </div>
            </div>
            <div className='col-xl-6 col-lg-7 col-md-12 mb-24'>
                <div className='item-preferences-sec'>
                    <ItemPreferences />
                </div>
            </div>
            {/* <div className='col-lg-12 col-md-12 mb-24'>
                <div className='customize-add-sec'>
                    <CustomizeAddOn />
                </div>
            </div> */}
            <div className='col-lg-12 col-md-12 mb-24'>
                <div className='schedule-box'>
                    <Schedule />
                </div>
            </div>
            {/* <div className='col-lg-12 col-md-12 mb-24'>
                <div className='add-recommended-items-box'>
                    <AddRecommendedItems />
                </div>
            </div> */}
            <div className='col-lg-12'>
                <div className='footer-boottom-btn d-flex align-items-center justify-content-end gap-2'>
                    <Link href="" className='btn btn-primary bg-white text-gray'>Cancel</Link>
                    <Link href="" className='btn btn-secondary'>Save & Continue</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddItemDetails