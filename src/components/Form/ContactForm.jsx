import css from './Form.module.css';
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../redux/operations';
import { useState } from 'react';
import { selectContacts } from '../redux/selectors';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
  
    const handlerChenge = ({ target: { name, value } }) => {
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'phone':
          setPhone(value);
          break;
        default:
      }
    };
  
    const handlerSubmit = e => {
      e.preventDefault();
  
      const newContact = {
        id: nanoid(),
        name,
        phone,
      };
  
      const isExist = contacts.some(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      );
  
      if (isExist) {
        toast.warning(`${newContact.name} is already in contacts.`, {position: toast.POSITION.TOP_LEFT});
        reset();
        return;
      } else {
        dispatch(addContact(newContact))
        reset();
          toast.success(`Create Contact`, {position: toast.POSITION.TOP_LEFT});
      }
    };
  
    const reset = () => {
      setName('');
      setPhone('');
    };
        return (
            <form className={css.container} onSubmit={handlerSubmit}>
                <label htmlFor={nanoid()}>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handlerChenge}
                        value={name}
                    />
                    <label htmlFor={nanoid()}>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handlerChenge}
                        value={phone}
                    />
                <button type="submit" className={css.formBtn}>Add contact</button>
            </form>
        )   
}
export default ContactForm