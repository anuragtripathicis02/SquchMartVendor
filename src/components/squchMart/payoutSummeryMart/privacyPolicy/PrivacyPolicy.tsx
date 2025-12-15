import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='terms-conditions-sec'>
        <p className='mb-0'>Welcome to SQUCH! Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our multi-service platform, which includes bus ticket booking, event booking, food and grocery ordering, table reservations, and stay bookings. By using SQUCH, you consent to the practices outlined in this policy.</p>
        <div className='terms-box mt-2'>
            <h2>1. Information We Collect</h2>
            <p className='mb-0'>We collect the following types of information to provide and improve our services:</p>
            <h3>1.1 Personal Information</h3>
            <ul>
                <li>Name, email, phone number, and profile details when you register.</li>
                <li>Payment details (processed securely via third-party payment gateways).</li>
                <li>Address and location data for delivery and service customization.</li>
            </ul>
            <h3>1.2 Usage Data</h3>
            <ul>
                <li>App activity, preferences, and interactions with different modules.</li>
                <li>Device information, IP address, and browser type for security and analytics.</li>
            </ul>
            <h3>1.3 Location Data</h3>
            <ul>
                <li>If permitted, we collect location data for services like bus tracking, food delivery, and stay bookings.</li>
            </ul>
            <h3>1.4 Third-Party Data</h3>
            <ul>
                <li>We may collect information from third-party services (e.g., social logins, payment providers) if you connect them to SQUCH.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>2. How We Use Your Information</h2>
            <p className='mb-0'>We use your data to:</p>
            <ul>
                <li>Provide, personalize, and improve our services.</li>
                <li>Process transactions and bookings securely.</li>
                <li>Send updates, offers, and promotional messages (you can opt out anytime).</li>
                <li>Ensure platform security and prevent fraudulent activities.</li>
                <li>Comply with legal requirements and resolve disputes.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>3. Sharing and Disclosure</h2>
            <p className='mb-0'>We do not sell your data. However, we may share information with:</p>
            <ul>
                <li>Service Providers (e.g., bus operators, restaurants, event organizers, hosts) to fulfill bookings.</li>
                <li>Payment Processors to securely handle transactions.</li>
                <li>Legal Authorities if required by law or to prevent fraud and security threats.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>4. Data Security</h2>
            <p className='mb-0'>We implement strong security measures to protect your data, including encryption and secure access controls. However, no system is 100% secure, so we encourage users to safeguard their credentials.</p>
        </div>
        <div className='terms-box mt-2'>
            <h2>5. Your Choices and Rights</h2>
            <ul>
                <li>Access & Correction: You can update or delete your account details anytime.</li>
                <li>Location Permissions: You can enable or disable location services in your device settings.</li>
                <li>Marketing Preferences: Opt-out of promotional emails and notifications in your settings.</li>
            </ul>
        </div>
        <div className='terms-box mt-2'>
            <h2>6. Third-Party Links and Services</h2>
            <p className='mb-0'>SQUCH may contain links to third-party services (e.g., hotel listings, event pages). We are not responsible for their privacy practices, so we encourage you to review their policies.</p>
        </div>
        <div className='terms-box mt-2'>
            <h2>7. Changes to This Policy</h2>
            <p className='mb-0'>We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or email. Continued use of SQUCH after updates implies acceptance of the revised policy.</p>
        </div>
        <div className='terms-box mt-2'>
            <h2>8. Contact Us</h2>
            <p className='mb-0'>If you have any questions or concerns regarding this Privacy Policy, please contact our support team through the app.</p>
        </div>
        <p className='mb-0'>By using SQUCH, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
    </div>
  )
}

export default PrivacyPolicy