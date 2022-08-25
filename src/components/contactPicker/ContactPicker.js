import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={e => onChange(e.target.value)}>
      <option selected>No Contact Is Selected</option>
      {contacts.map((el, index) =>
        <option key={index}>
          {el.name}
        </option>
      )}
    </select>
  );
};
