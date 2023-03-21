const GET_KEY = 'map/GET_KEY'

const getTheKey = (k) => {
    return {
        type: GET_KEY,
        k
    }
}

export const getKey = () => async (dispatch) => {
    const res = await fetch('/api/map/key')
    if (res.ok) {

        const data = await res.json()

        dispatch(getTheKey(data.googleMapsAPIKey))
        return "Got the key"
    }
    return "Could not get the key"
}

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_KEY:
            return { key: action.k }
        default:
            return state
    }
}
