import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
// import "./styles/style.scss";
const nothing = "/src/assets/nothing.png"
import Dashboard2 from "./components/DashBoard2/DashBorard"
import SignIn from "./components/SignIn/SignIn"



export default function App(): JSX.Element {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <AuthButton/>

        <Switch>
          <Route path="/">
            <SignIn SighIn={handleFakAuth} />
          </Route>
          <PrivateRoute path="/protected">
          <Dashboard2/>
          </PrivateRoute>
        </Switch>

        

      </div>
    </Router>)
    
  }

  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  const handleFakAuth=()=>{
    
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    
  }
  
  function AuthButton() {
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
      <p>
        dfsdfdsf
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }
  
  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  function PublicPage() {
    return <h3>Public</h3>;
  }
  
  function ProtectedPage() {
    return <h3>Protected</h3>;
  }
  
  function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }