import ContactForm from "./Form/ContactForm";
import Filter from "./Filters/Filter";
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
          <div className="container"
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 30,
              color: '#010101'
            }}
          > <h1>Phonebook</h1>
              <ToastContainer />
              <ContactForm />
          {!contacts.length ? (
            <h5>Your phonebook is empty. Add your first contact</h5>
          ) : (
            <>
              <Filter />
              <ContactList />
            </>
          )}
          </div>
        );
}
export default App

