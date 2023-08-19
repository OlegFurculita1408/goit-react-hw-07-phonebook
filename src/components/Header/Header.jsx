import css from './Header.module.css';

const Header = () => {
    return (
      <header className={css.header}>
        <h1 className={css.title}>Phonebook</h1>
      </header>
    );
}
export default Header