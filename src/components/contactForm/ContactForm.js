import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type='text' value={phoneNumber} pattern="^(\+98|0)?9\d{9}$" onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <label>
        Email:
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <input type='submit' />
    </form>
  );
};
