import { nanoid } from "nanoid";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import { selectVisibleContact } from "components/redux/selectors";
import css from './ContactList.module.css';
import { toast } from "react-toastify";


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContact);
    const notify = () => toast.warning(`Delete contact!`, {position: toast.POSITION.TOP_LEFT});
    
        return (
            <>
                <ul className={css.contactList}>
                    {contacts.map(item => {
                        return (
                            <li key={nanoid()} className={css.contactsItem}>
                            <p>
                                {item.name}: <span>{item.number}</span>
                            </p>
                            <button className={css.itemBtn}
                                    onClick={() => dispatch(deleteContact(item.id),
                                                    notify())}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
export default ContactList