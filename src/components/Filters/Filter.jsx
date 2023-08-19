import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../redux/selectors';
import { setFilter } from '../redux/filterSlice';
import css from './Filter.module.css';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterContacts);
    
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.containerFilter}>
        <label>
            <input 
              className={css.input}
              type="text"
              placeholder="Find contacts by name"
              value={filter}
              onChange={handleFilterChange}
            />
        </label>
    </div>
  );
};
export default Filter