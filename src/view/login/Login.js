import React, {useState} from 'react';

export default function Login({setEmailId, emailId}) {
  const [email, setEmail] = useState(emailId);
  const handleChange = (event) => {
    const em = event.target.value;
    setEmail(em);
  }
  const handleClick = () => {
    setEmailId(email);
  }
  return(
    <div>
      <input type="email" placeholder="Enter your email" onChange={handleChange} value={email} />
      <button onClick={handleClick}>Enter</button>
    </div>
  );
}