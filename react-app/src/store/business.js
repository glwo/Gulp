const LOAD_ALLBUSINESSES = 'business/LOAD_ALLBUSINESSES';
const LOAD_BUSINESS = 'business/LOAD_BUSINESS';
const ADD_BUSINESS = 'business/ADD_BUSINESS';
const UPDATE_BUSINESS = 'business/UPDATE_BUSINESS';
const REMOVE_BUSINESS = 'business/REMOVE_BUSINESS';
const RESET = 'business/RESET';

//Action
export const loadAllBusinesses = (businesses) => {
  return {
    type: LOAD_ALLBUSINESSES,
    payload: businesses
  }
};

export const loadBusiness = (business) => {
  return {
    type: LOAD_BUSINESS,
    payload: business
  }
};

export const addBusiness = (business) => {
  return {
    type: ADD_BUSINESS,
    payload: business
  }
};

export const updateBusiness = (business) => {
  return {
    type: UPDATE_BUSINESS,
    payload: business
  }
};

export const removeBusiness = (id) => {
  return {
    type: REMOVE_BUSINESS,
    payload: id
  }
}

//Thunk
export const thunkLoadAllBusinesses = () => async (dispatch) => {
  const response = await fetch('/api/business/');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadAllBusinesses(data.businesses))
  }
};

export const thunkLoadBusiness = (id) => async (dispatch) => {
  const response = await fetch(`/api/business/${id}`);
  if (response.ok) {
    const business = await response.json();
    dispatch(loadBusiness(business))
    return business;
  }
};

export const thunkCreateBusiness = (business) => async (dispatch) => {
  const response  = await fetch(`/api/business/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(business)
  });

  if (response.ok) {
    const business = await response.json();
    dispatch(addBusiness(business))
    return business
  } else {
    const data = await response.json();
    if (data.errors) {
      return data
    }
  }
}

export const thunkUpdateBusiness = (data) => async (dispatch) => {
  const response = await fetch(`/api/business/${data.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const business = await response.json();
    dispatch(updateBusiness(business))
    return business;
  } else {
    const data = await response.json();
    if (data.errors) {
      return data
    }
  }
}

export const thunkRemoveBusiness = (id) => async (dispatch) => {
  const response = await fetch(`/api/business/${id}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(removeBusiness(id))
    return data;
  }
};
//InitialState
const initialState = {
  businesses: {}
};

//Reducer
const businessReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_ALLBUSINESSES:
      newState.businesses = normalize(action.payload)
      return newState;
    case ADD_BUSINESS:
      newState.businesses = {...state.businesses, [action.payload.id]: action.payload}
      return newState;
    case UPDATE_BUSINESS:
      newState.businesses = {...state.businesses, [action.payload.id]: action.payload}
      return newState;
    case REMOVE_BUSINESS:
      newState.businesses = {...state.businesses}
      delete newState.businesses[action.payload]
      return newState;
    default:
      return state;
  }
};

// helper
const normalize = (array) => {
  const obj = {}
  array.forEach((el) => {
    obj[el.id] = el
  });
  return obj;
}

export default businessReducer;
