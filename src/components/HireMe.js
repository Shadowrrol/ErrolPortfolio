// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { useNavigate } from 'react-router-dom';

// const HireMe = () => {
//   const formRef = useRef();
//   const navigate = useNavigate();
//   const [success, setSuccess] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       process.env.REACT_APP_EMAILJS_SERVICE_ID,
//       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//       formRef.current,
//       process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//     ).then(() => {
//       setSuccess(true);
//       formRef.current.reset();
//     }).catch((err) => {
//       console.error('FAILED...', err);
//     });
//   };

//   return (
//     <div className="hire-container">
//       <h2>Send Me a Message</h2>
//       <form ref={formRef} onSubmit={sendEmail} className="hire-form">
//         <input type="text" name="name" placeholder="Your Name" required />
//         <textarea name="message" rows="6" placeholder="Write your message..." required />
//         <input type="file" name="attachment" />
//         <div className="button-group">
//           <button type="submit">Submit</button>
//           <button type="button" onClick={() => navigate('/')}>Cancel</button>
//         </div>
//         {success && <p style={{ marginTop: "10px", color: "#00c896" }}>Message sent successfully!</p>}
//       </form>
//     </div>
//   );
// };

// export default HireMe;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const HireMe = () => {
  const navigate = useNavigate();

  return (
    <div className="hire-safe-container">
      <h2>Want to Work Together?</h2>
      <p>
        Please reach out to me directly at: <br />
        <a href="mailto:supangan.erroljay@gmail.com">supangan.erroljay@gmail.com</a>
      </p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default HireMe;
