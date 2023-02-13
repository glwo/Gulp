// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const EDIT_USER = "session/EDIT_USER"
const GET_USER = "session/GET_USER"

const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

const editUser = (user) => ({
	type: EDIT_USER,
	payload: user,
});

const loadUser = (user) => ({
    type: GET_USER,
    payload: user
})



const initialState = { user: null };

export const getUser = (userId) => async dispatch => {
    const res = await fetch(`api/users/${userId}`)

    if (res.ok) {
        const profile = await res.json()
        dispatch(loadUser(profile))
        return profile
    }
}

export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (first_name, last_name, username, email, img_url, bio, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			first_name,
			last_name,
			username,
			email,
			img_url,
			bio,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const updateUser = (profile) => async dispatch => {
    const {
        id,
        first_name,
        last_name,
        username,
        email,
        img_url,
        bio
        } = profile
    const res = await fetch(`api/users/${id}` , {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            first_name,
            last_name,
            username,
            email,
            img_url,
            bio
        })
    })

    if (res.ok){
        const profile = await res.json()
        dispatch(editUser(profile))
        return profile
    }
    throw res
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		case EDIT_USER:
			return {user: action.payload}
		default:
			return state;
	}
}
