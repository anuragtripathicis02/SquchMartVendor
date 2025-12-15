import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import OperatorTop from './OperatorTop';
import PersonalInformation from './PersonalInformation';
import IdProofDetails from './IdProofDetails';
import PayoutDetails from './PayoutDetails';
import CompanyProfile from './CompanyProfile';



const VendorPersonalInformationTabs = () => {
    const [key, setKey] = useState('DatePlace');
   
     const handleTabSelect = (selectedKey) => {
       setKey(selectedKey);
     };
   
     const renderTitle = (label) => (
       <span className="tab-title d-flex align-items-center gap-2 justify-content-center">
         {label}
       </span>
     );

 return (
   <div className="order-tabs-sec">
    <OperatorTop />

     <Tabs
       activeKey={key}
       onSelect={handleTabSelect}
       className="tabs-nav-box align-items-center text-center flex-nowrap overflow-auto d-flex gap-0"
     >
       <Tab eventKey="DatePlace" title={renderTitle('Company Profile')}>
         <div className="top-dashboard tabs-booking">
           <div className="inner-tabs-booking-box">
               <div className='mt-4'>
                  <CompanyProfile />
               </div>
           </div>
         </div>
       </Tab>

        <Tab eventKey="PersonalTable" title={renderTitle('Personal / Owen Details')}>
            <div className="top-dashboard tabs-booking">
                <div className="inner-tabs-booking-box">
                    <div className='mt-4'>
                      <PersonalInformation />
                    </div>
                </div>
            </div>
        </Tab>

       <Tab eventKey="ManageTable" title={renderTitle('Id Proof Details')}>
           <div className="top-dashboard tabs-booking">
               <div className="inner-tabs-booking-box">
                   <div className='mt-4'>
                        <IdProofDetails />
                   </div>
               </div>
           </div>
       </Tab>

       <Tab eventKey="DineOutTiming" title={renderTitle('Payout Details')}>
           <div className="top-dashboard tabs-booking">
               <div className="inner-tabs-booking-box">
                   <div className='mt-4'>
                    <PayoutDetails />
                   </div>
               </div>
           </div>
       </Tab>

     </Tabs>
   </div>

  )
}

export default VendorPersonalInformationTabs