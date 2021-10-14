import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/route/home/Home';
import Register from './components/route/register/Register';
import Login from './components/route/login/Login';
import Contact from './components/route/contact/Contact';
import NotFound from './components/route/notFound/NotFound';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import PrivateRouter from './components/route/privateRouter/PrivateRouter';

function App() {
  return (
    <section className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRouter path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <NotificationContainer />
    </section>
  );
}

export default App;
