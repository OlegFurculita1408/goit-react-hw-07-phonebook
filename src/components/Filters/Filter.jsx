import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../redux/filterSlice';
import css from './Filter.module.css';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
    
  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={css.containerFilter}>
        <label>
            <input
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