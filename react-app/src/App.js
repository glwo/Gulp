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
import { allReviews } from './store/review';
import CreateReviewModal from "./components/Reviews/ReviewModal";
import CreateReviewForm from "./components/Reviews/CreateReviewForm";
import ReviewDetails from "./components/Reviews/ReviewDetails";
import Reviews from "./components/Reviews";
import BusinessReviews from "./components/Reviews/BusinessReviews";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
    dispatch(allReviews())
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
          <Route exact path='/business/:businessId'>
            <BusinessDetail />
            <CreateReviewModal />
            {/* <ReviewDetails /> */}
            {/* <BusinessReviews /> */}
          </Route>
          <Route exact path="/business">
            <CreateBusiness />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path='/reviews'>
            {/* <CreateReviewForm /> */}
            <ReviewDetails />
            {/* <CreateReviewModal /> */}
        </Route>
        <Route exact path='/business/:business_id/writeareview'>
          <div style={{"display":"flex", 'justifyContent':"center"}}>
            <CreateReviewForm />
          </div>
        </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
