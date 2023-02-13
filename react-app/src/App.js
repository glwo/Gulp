import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import BusinessesIndex from "./components/BusinessIndex";
import BusinessDetail from "./components/BusinessDetail";
import CreateBusiness from "./components/CreateBusiness";
import ProfilePage from "./components/ProfilePage";
import BusinessCategory from "./components/BusinessCategory";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <BusinessesIndex />
          </Route>
          <Route path='/category/:category/:location?'>
            <BusinessCategory />
          </Route>
          <Route path='/business/:businessId'>
            <BusinessDetail />
          </Route>
          <Route path="/business">
            <CreateBusiness />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
