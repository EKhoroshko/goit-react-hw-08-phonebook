import css from '../home/Home.module.css';

const Home = () => {
  return (
    <div className={css.box}>
      <h1>PhoneBook</h1>
      <p className={css.description}>
        You need to register or log into your account for further use of the
        application
      </p>
    </div>
  );
};

export default Home;
