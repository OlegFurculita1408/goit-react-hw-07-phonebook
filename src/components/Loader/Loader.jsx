import { Puff } from  'react-loader-spinner';
import css from './Loader.module.css';



export const Loader = () => (
    <div className={css.loader}>
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#254292"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  );