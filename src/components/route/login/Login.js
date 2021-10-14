import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/Auth/AuthOperation';
import { selectUserLogin } from '../../../redux/Auth/AuthSelectors';
import css from '../login/Login.module.css';

const Login = () => {
  const isLogin = useSelector(selectUserLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const loginSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <p className={css.text}>
            Fine! You are online. You can use the phone book
          </p>
        </div>
      ) : (
        <div>
          <h2 className={css.title}>Login</h2>
          <form className={css.form} onSubmit={loginSubmit}>
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
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
