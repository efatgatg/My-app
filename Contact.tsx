import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <p>
        You can reach us at:
      </p>
      <ul>
        <li>Email: contact@example.com</li>
        <li>Phone: +123 456 7890</li>
        <li>Address: 123 React Street, Web City</li>
      </ul>
    </div>
  );
};

export default Contact;
