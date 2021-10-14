import FormSubmit from '../../FormSubmit/FormSubmit';
import CreateContactList from '../../PhoneList/PhoneList';
import Filter from '../../Filter/Filter';

const Contact = () => {
  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <FormSubmit title={'Name'} phone={'Number'} />
      <Filter />
      <CreateContactList title={'Contacts'} />
    </div>
  );
};

export default Contact;
