import Link from 'next/link'
import React, { useState } from 'react'
import SelectLanguage from './SelectLanguage';
import ChangeCurrency from './ChangeCurrency';
// import NotificationPreferences from './NotificationPreferences';

const Setting = () => {
     const [showPromoChange, setShowPromoChange] = useState(false);
     const [showCurrencyChange, setShowCurrencyChange] = useState(false);
    //  const [showNotificationChange, setShowNotificationChange] = useState(false);

  return (
    <div className='setting-sec'>
        {/* <Link href="" className='setting-box d-flex align-items-center gap-2 justify-content-between'>
            <div className='left-text-box'>
                <h2>Change Password</h2>
                <p className='mb-0'>Allow vendors to securely change their account password</p>
            </div>
            <div className='right-icons-box'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.031 12.531L9.53104 20.031C9.46136 20.1007 9.37863 20.156 9.28759 20.1937C9.19654 20.2314 9.09896 20.2508 9.00042 20.2508C8.90187 20.2508 8.80429 20.2314 8.71324 20.1937C8.6222 20.156 8.53947 20.1007 8.46979 20.031C8.40011 19.9614 8.34483 19.8786 8.30712 19.7876C8.26941 19.6965 8.25 19.599 8.25 19.5004C8.25 19.4019 8.26941 19.3043 8.30712 19.2132C8.34483 19.1222 8.40011 19.0395 8.46979 18.9698L15.4401 12.0004L8.46979 5.03104C8.32906 4.89031 8.25 4.69944 8.25 4.50042C8.25 4.30139 8.32906 4.11052 8.46979 3.96979C8.61052 3.82906 8.80139 3.75 9.00042 3.75C9.19944 3.75 9.39031 3.82906 9.53104 3.96979L17.031 11.4698C17.1008 11.5394 17.1561 11.6222 17.1938 11.7132C17.2316 11.8043 17.251 11.9019 17.251 12.0004C17.251 12.099 17.2316 12.1966 17.1938 12.2876C17.1561 12.3787 17.1008 12.4614 17.031 12.531Z" fill="#262626"/></svg>
            </div>
        </Link> */}
        {/* <Link href="" className='setting-box d-flex align-items-center gap-2 justify-content-between'>
            <div className='left-text-box'>
                <h2>Payout Setting</h2>
                <p className='mb-0'>Add or edit payout method (bank account, mobile money, PayPal)</p>
            </div>
            <div className='right-icons-box'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.031 12.531L9.53104 20.031C9.46136 20.1007 9.37863 20.156 9.28759 20.1937C9.19654 20.2314 9.09896 20.2508 9.00042 20.2508C8.90187 20.2508 8.80429 20.2314 8.71324 20.1937C8.6222 20.156 8.53947 20.1007 8.46979 20.031C8.40011 19.9614 8.34483 19.8786 8.30712 19.7876C8.26941 19.6965 8.25 19.599 8.25 19.5004C8.25 19.4019 8.26941 19.3043 8.30712 19.2132C8.34483 19.1222 8.40011 19.0395 8.46979 18.9698L15.4401 12.0004L8.46979 5.03104C8.32906 4.89031 8.25 4.69944 8.25 4.50042C8.25 4.30139 8.32906 4.11052 8.46979 3.96979C8.61052 3.82906 8.80139 3.75 9.00042 3.75C9.19944 3.75 9.39031 3.82906 9.53104 3.96979L17.031 11.4698C17.1008 11.5394 17.1561 11.6222 17.1938 11.7132C17.2316 11.8043 17.251 11.9019 17.251 12.0004C17.251 12.099 17.2316 12.1966 17.1938 12.2876C17.1561 12.3787 17.1008 12.4614 17.031 12.531Z" fill="#262626"/></svg>
            </div>
        </Link> */}
        <Link href="" className='setting-box d-flex align-items-center gap-2 justify-content-between' onClick={() => setShowPromoChange(true)}>
            <div className='left-text-box'>
                <h2>Change Language</h2>
                <p className='mb-0'>Select app language</p>
            </div>
            <div className='right-icons-box'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.031 12.531L9.53104 20.031C9.46136 20.1007 9.37863 20.156 9.28759 20.1937C9.19654 20.2314 9.09896 20.2508 9.00042 20.2508C8.90187 20.2508 8.80429 20.2314 8.71324 20.1937C8.6222 20.156 8.53947 20.1007 8.46979 20.031C8.40011 19.9614 8.34483 19.8786 8.30712 19.7876C8.26941 19.6965 8.25 19.599 8.25 19.5004C8.25 19.4019 8.26941 19.3043 8.30712 19.2132C8.34483 19.1222 8.40011 19.0395 8.46979 18.9698L15.4401 12.0004L8.46979 5.03104C8.32906 4.89031 8.25 4.69944 8.25 4.50042C8.25 4.30139 8.32906 4.11052 8.46979 3.96979C8.61052 3.82906 8.80139 3.75 9.00042 3.75C9.19944 3.75 9.39031 3.82906 9.53104 3.96979L17.031 11.4698C17.1008 11.5394 17.1561 11.6222 17.1938 11.7132C17.2316 11.8043 17.251 11.9019 17.251 12.0004C17.251 12.099 17.2316 12.1966 17.1938 12.2876C17.1561 12.3787 17.1008 12.4614 17.031 12.531Z" fill="#262626"/></svg>
            </div>
        </Link>
        <Link href="" className='setting-box d-flex align-items-center gap-2 justify-content-between' onClick={() => setShowCurrencyChange(true)}>
            <div className='left-text-box'>
                <h2>Change Currency</h2>
                <p className='mb-0'>Select display currency</p>
            </div>
            <div className='right-icons-box'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.031 12.531L9.53104 20.031C9.46136 20.1007 9.37863 20.156 9.28759 20.1937C9.19654 20.2314 9.09896 20.2508 9.00042 20.2508C8.90187 20.2508 8.80429 20.2314 8.71324 20.1937C8.6222 20.156 8.53947 20.1007 8.46979 20.031C8.40011 19.9614 8.34483 19.8786 8.30712 19.7876C8.26941 19.6965 8.25 19.599 8.25 19.5004C8.25 19.4019 8.26941 19.3043 8.30712 19.2132C8.34483 19.1222 8.40011 19.0395 8.46979 18.9698L15.4401 12.0004L8.46979 5.03104C8.32906 4.89031 8.25 4.69944 8.25 4.50042C8.25 4.30139 8.32906 4.11052 8.46979 3.96979C8.61052 3.82906 8.80139 3.75 9.00042 3.75C9.19944 3.75 9.39031 3.82906 9.53104 3.96979L17.031 11.4698C17.1008 11.5394 17.1561 11.6222 17.1938 11.7132C17.2316 11.8043 17.251 11.9019 17.251 12.0004C17.251 12.099 17.2316 12.1966 17.1938 12.2876C17.1561 12.3787 17.1008 12.4614 17.031 12.531Z" fill="#262626"/></svg>
            </div>
        </Link>
        {/* <Link href="" className='setting-box d-flex align-items-center gap-2 justify-content-between' onClick={() => setShowNotificationChange(true)}>
            <div className='left-text-box'>
                <h2>Notification Preferences</h2>
                <p className='mb-0'>Set your notification preferances</p>
            </div>
            <div className='right-icons-box'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.031 12.531L9.53104 20.031C9.46136 20.1007 9.37863 20.156 9.28759 20.1937C9.19654 20.2314 9.09896 20.2508 9.00042 20.2508C8.90187 20.2508 8.80429 20.2314 8.71324 20.1937C8.6222 20.156 8.53947 20.1007 8.46979 20.031C8.40011 19.9614 8.34483 19.8786 8.30712 19.7876C8.26941 19.6965 8.25 19.599 8.25 19.5004C8.25 19.4019 8.26941 19.3043 8.30712 19.2132C8.34483 19.1222 8.40011 19.0395 8.46979 18.9698L15.4401 12.0004L8.46979 5.03104C8.32906 4.89031 8.25 4.69944 8.25 4.50042C8.25 4.30139 8.32906 4.11052 8.46979 3.96979C8.61052 3.82906 8.80139 3.75 9.00042 3.75C9.19944 3.75 9.39031 3.82906 9.53104 3.96979L17.031 11.4698C17.1008 11.5394 17.1561 11.6222 17.1938 11.7132C17.2316 11.8043 17.251 11.9019 17.251 12.0004C17.251 12.099 17.2316 12.1966 17.1938 12.2876C17.1561 12.3787 17.1008 12.4614 17.031 12.531Z" fill="#262626"/></svg>
            </div>
        </Link> */}
        {/* <Link href="" className='setting-box d-flex align-items-center gap-2 justify-content-between'>
            <div className='left-text-box'>
                <h2>Policies</h2>
                <p className='mb-0'>Edit cancellation, refund, check-in/out rules</p>
            </div>
            <div className='right-icons-box'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.031 12.531L9.53104 20.031C9.46136 20.1007 9.37863 20.156 9.28759 20.1937C9.19654 20.2314 9.09896 20.2508 9.00042 20.2508C8.90187 20.2508 8.80429 20.2314 8.71324 20.1937C8.6222 20.156 8.53947 20.1007 8.46979 20.031C8.40011 19.9614 8.34483 19.8786 8.30712 19.7876C8.26941 19.6965 8.25 19.599 8.25 19.5004C8.25 19.4019 8.26941 19.3043 8.30712 19.2132C8.34483 19.1222 8.40011 19.0395 8.46979 18.9698L15.4401 12.0004L8.46979 5.03104C8.32906 4.89031 8.25 4.69944 8.25 4.50042C8.25 4.30139 8.32906 4.11052 8.46979 3.96979C8.61052 3.82906 8.80139 3.75 9.00042 3.75C9.19944 3.75 9.39031 3.82906 9.53104 3.96979L17.031 11.4698C17.1008 11.5394 17.1561 11.6222 17.1938 11.7132C17.2316 11.8043 17.251 11.9019 17.251 12.0004C17.251 12.099 17.2316 12.1966 17.1938 12.2876C17.1561 12.3787 17.1008 12.4614 17.031 12.531Z" fill="#262626"/></svg>
            </div>
        </Link> */}

        <SelectLanguage show={showPromoChange} handleClose={() => setShowPromoChange(false)} />
        <ChangeCurrency show={showCurrencyChange} handleClose={() => setShowCurrencyChange(false)} />
        {/* <NotificationPreferences show={showNotificationChange} handleClose={() => setShowNotificationChange(false)} /> */}
        

    </div>
  )
}

export default Setting