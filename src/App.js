import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ProductCreateForm from './pages/products/ProductCreateForm';
import ProductPage from './pages/products/ProductPage';
import ProductsPage from './pages/products/ProductsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import ProductEditForm from './pages/products/ProductEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from './components/NotFound';
import HomePage from './pages/home/HomePage';
import ContactCreateForm from "./pages/contacts/ContactCreateForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/feed" render={() => (
              <ProductsPage message="No results found. Adjust the search keyword"/>
            )} 
          />
          <Route exact path="/favourite" render={() => (
              <ProductsPage message="No results found. Adjust the search keyword or favourite a post" 
              filter={`favourite__owner__profile=${profile_id}&ordering=-favourite__created_at&`}/>
            )} 
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/products/create" render={() => <ProductCreateForm />} />
          <Route exact path="/products/:id" render={() => <ProductPage />} />
          <Route exact path="/products/:id/edit" render={() => <ProductEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route
            exact
            path="/contact/create/"
            render={() => <ContactCreateForm />}
          />
          <Route render={() => <NotFound /> } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;