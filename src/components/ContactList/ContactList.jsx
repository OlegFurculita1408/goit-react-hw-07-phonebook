import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';
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
                    {contacts.map(({ name, phone, id}) => {
                        return (
                            <li key={id} className={css.contactsItem}>
                            <p>
                                {name}: <span>{phone}</span>
                            </p>
                            <button className={css.itemBtn}
                                    onClick={() => dispatch(deleteContact(id),
                                                    notify())}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
export default ContactList