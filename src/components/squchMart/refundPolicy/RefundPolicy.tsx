import React from "react";

const RefundPolicy = () => {
  return (
    <div className="terms-conditions-sec">
      <h2>Squch Refund policy</h2>
      <p className="mb-0">
        Welcome to SQUCH! Your privacy is important to us. This Privacy Policy
        explains how we collect, use, store, and protect your personal
        information when you use our multi-service platform, which includes bus
        ticket booking, event booking, food and grocery ordering, table
        reservations, and stay bookings. By using SQUCH, you consent to the
        practices outlined in this policy.
      </p>
      <div className="terms-box mt-2">
        <h3>1. General Refund Terms</h3>
        <p className="mb-0">
          Refund eligibility depends on the specific service used. Since SQUCH
          acts as a facilitator between users and service providers, refund
          policies may vary based on provider terms. Users are encouraged to
          review the cancellation and refund policies of each service before
          making a booking or purchase.
        </p>

        <h3>2. Refund Policies for Different Services</h3>
        <h4>2.1 Bus Ticket Booking</h4>
        <ul>
          <li>
            Refunds are subject to the cancellation policy of the respective bus
            operator.
          </li>
          <li>
            If eligible, refunds will be processed within [X] working days after
            cancellation.
          </li>
          <li>
            SQUCH is not responsible for delays, cancellations, or changes made
            by bus operators.
          </li>
          
        </ul>
        <h4>2.2 Event Booking</h4>
        <ul>
          <li>
            Refunds depend on the event organizer’s policy. Some events may be non-refundable.
          </li>
          <li>
          If an event is canceled or rescheduled, the organizer will determine the refund process.
          </li>
          <li>
          Service fees charged by SQUCH may be non-refundable.
          </li>
        </ul>
        <h4>2.3 Food and Grocery Ordering</h4>
        <ul>
          <li>
           Once an order is placed and accepted by the vendor, cancellations or refunds are not guaranteed.
          </li>
          <li>
           If an order is delayed, incorrect, or missing items, users can request a resolution through SQUCH support. Refunds will be subject to the vendor’s policies.
          </li>
        </ul>
        <h4>2.4 Table Reservations</h4>
        <ul>
          <li>
           Reservation cancellations are subject to shop policies.
          </li>
          <li>
         Any advance payment made to the shop is refundable only if the shop's policy allows.
          </li>
        </ul>
        <h4>2.5 Stay Booking</h4>
        <ul>
          <li>
           Cancellation and refund policies depend on the host’s terms.
          </li>
          <li>
         Refunds for cancellations made by the guest will be processed as per the host’s selected cancellation policy.
          </li>
          <li>
       If a booking is canceled by the host, the full refund will be issued to the guest.
          </li>
        </ul>
      </div>
      <div className="terms-box mt-2">
        <h3>3. Refund Processing Time</h3>
        <ul>
          <li>Refunds will be processed to the original payment method used.</li>
          <li>Processing times may vary depending on the payment provider (typically [X] business days).</li>
         </ul>
      </div>
      <div className="terms-box mt-2">
        <h3>4. Non-Refundable Fees</h3>        
        <ul>
          <li>
           Service fees, convenience charges, and transaction fees may be non-refundable.
          </li>
          <li>In cases of partial refunds, only the eligible amount will be returned.</li>
         </ul>
      </div>
      <div className="terms-box mt-2">
        <h3>5. Dispute Resolution</h3>
        <ul><li>If you believe you are entitled to a refund but have not received it, contact SQUCH support within [X] days of the transaction.</li>
        <li>Our team will review the request and work with the service provider to resolve the issue.</li></ul>
      </div>
      <div className="terms-box mt-2">
        <h3>6. Changes to This Policy</h3>
        <ul>
          <li>
       SQUCH reserves the right to update this Refund Policy at any time. Any changes will be communicated via the app or email. Continued use of SQUCH after updates implies acceptance of the revised policy.
          </li>
          
        </ul>
      </div>
      <div className="terms-box mt-2">
        <h3>7. Contact Us</h3>
       <ul><li>For refund-related inquiries, please reach out to our support team through the app.</li></ul>
      </div>
     
     
    </div>
  );
};

export default RefundPolicy;
