import { useState } from 'react';
import { registerUser } from '../../../redux/Auth/AuthOperation';
import { useDispatch } from 'react-redux';
import css from '../register/Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const regSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(registerUser(user));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2 className={css.title}>Registration</h2>
      <form className={css.form} onSubmit={regSubmit}>
        <label className={css.label}>
          <p className={css.description}>Enter you name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChangeName}
            autoComplete="on"
          />
        </label>
        <label className={css.label}>
          <p className={css.description}>Enter Email</p>
          <input
            className={css.input}
            type="text"
            name="email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </label>

        <label className={css.label}>
          <p className={css.description}>Password</p>
          <input
            className={css.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChangePassword}
            autoComplete="off"
          />
        </label>

        <button className={css.button} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default Register;
