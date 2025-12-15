import React from 'react'

const TermsConditions = () => {
  return (
    <div className='terms-conditions-sec'>
        <p className='mb-0'>Welcome to SQUCH! These Terms and Conditions ("Terms") govern your use of the SQUCH app and its services, including but not limited to bus ticket booking, event booking, food and grocery ordering, online table reservations, and stay bookings. By using SQUCH, you agree to comply with these Terms.</p>
        <div className='terms-box mt-2'>
            <h2>1. General Use</h2>
            <ul>
                <li>SQUCH is a multi-service platform offering various booking and ordering options.</li>
                <li>You must be at least 18 years old or have parental consent to use the app.</li>
                <li>Accurate information must be provided during registration and use of services.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>2. Services</h2>
            <ul>
                <li>Bus Ticket Booking: SQUCH connects users with transport providers. SQUCH is not responsible for cancellations or delays by bus operators.</li>
                <li>Event Booking: Event details are provided by organizers. SQUCH is not liable for event changes or cancellations.</li>
                <li>Food and Grocery Ordering: SQUCH facilitates orders between users and vendors. Responsibility for product quality lies with the vendor.</li>
                <li>Table Reservations: SQUCH helps users book tables at partnered restaurants. Availability is subject to the restaurant's confirmation.</li>
                <li>Stay Booking: SQUCH connects users with property hosts. SQUCH is not responsible for host cancellations or listing inaccuracies.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>3. Payments and Refunds</h2>
            <ul>
                <li>All payments are processed through secure gateways.</li>
                <li>Refund policies vary by service provider; users must review individual policies before confirming bookings or orders.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>4. Cancellations and Modifications</h2>
            <p className='mb-0'>Cancellation and modification rules depend on the specific service selected. Please review the terms provided during each transaction.</p>
        </div>
        <div className='terms-box mt-2'>
            <h2>5. User Responsibilities</h2>
            <ul>
                <li>You agree not to misuse the app or engage in fraudulent activities.</li>
                <li>Respect all service partners’ rules and policies.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>6. Liability</h2>
            <p className='mb-0'>SQUCH acts as a facilitator and is not responsible for any direct or indirect losses resulting from service disruptions, third-party errors, or unforeseen circumstances.</p>
        </div>
        <div className='terms-box mt-2'>
            <h2>7. Privacy</h2>
            <p className='mb-0'>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your data.</p>
        </div>
        <div className='terms-box mt-2'>
            <h2>8. Changes to Terms</h2>
            <p className='mb-0'>SQUCH may update these Terms at any time. Continued use of the app implies acceptance of the revised Terms.</p>
        </div>
        <div className='terms-box mt-2 mb-2'>
            <h2>9. Contact Us</h2>
            <p className='mb-0'>For any questions or concerns regarding these Terms, please contact our support team through the app.</p>
        </div>
        <p className='mb-0'>By using SQUCH, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>
    </div>
  )
}

export default TermsConditions