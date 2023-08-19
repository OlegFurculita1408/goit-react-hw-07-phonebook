import Header from "./Header/Header";
import ContactForm from "./Form/ContactForm";
import Filter from "./Filters/Filter";
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts, selectIsloading, selectError } from "./redux/selectors";
import { Loader } from "./Loader/Loader";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";


const App = () => {
  // const contacts = useSelector(state => state.contacts.items);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
          <div className="container"
              style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                fontSize: 30,
                color: '#010101'
              }}
          > <ToastContainer />
            <Header />
            <div>
              {isLoading && <Loader />}
              {error && <p>{error}</p>}
                <ContactForm />
                {!contacts.length ? (
                <h5>Your phonebook is empty.</h5>
              ) : (
                <>
                  <Filter />
                  <ContactList />
                </>
              )}
            </div>
          </div>
        );
}
export default App

