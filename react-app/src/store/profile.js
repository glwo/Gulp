// TYPES
const LOAD_PROFILE = 'profiles/LOAD'
const EDIT_PROFILE = 'profiles/EDIT'

// ACTIONS
const loadProfile = (profile) => ({
    type: LOAD_PROFILE,
    profile
})

const editProfile = (profile) => ({
    type: EDIT_PROFILE,
    profile
})

// THUNKS
export const getProfile = (userId) => async dispatch => {
    const res = await fetch(`api/users/${userId}`)

    if (res.ok) {
        const profile = await res.json()
        dispatch(loadProfile(profile))
        return profile
    }
}

export const updateProfile = (profile) => async dispatch => {
    const res = await fetch(`api/users/${profile.id}` , {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(profile)
    })

    if (res.ok){
        const profile = await res.json()
        dispatch(editProfile(profile))
        return profile
    }
}

// REDUCER
const initialState = {
    profile: {}
}


const profileReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type){
        case LOAD_PROFILE:
            newState = { ...state }
            newState.profile = { ...action.profile}
            return newState
        case EDIT_PROFILE:
            newState = { ...state, [action.profile.id]: action.profile }
            return newState
    }
}

export default profileReducer
