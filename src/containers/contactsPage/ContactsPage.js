import React, { useEffect, useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const addContact = props.addContact;

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicateName, setIsDuplicateName] = useState(false);

  useEffect(() => {
    setIsDuplicateName(!!contacts.filter(contact => contact.name === name).length);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicateName) {
      addContact(name, phoneNumber, email);
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phoneNumber={phoneNumber}
          email={email}
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
