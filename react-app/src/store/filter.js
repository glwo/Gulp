const GET_FILTER = 'filter/GET_FILTER'
const SET_FILTER = 'filter/SET_FILTER'
const PUT_FILTER = 'filter/PUT_FILTER'

const get_filter = (f) => ({
    type: GET_FILTER,
    f
})

const set_filter = (f) => ({
    type: SET_FILTER,
    f
})

const put_filter = (f) => ({
    type: PUT_FILTER,
    f
})

export const getFilter = () => async (dispatch) => {
    const res = await fetch('/api/filter/exists')
    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return 'Unsuccessful';
        }
        dispatch(get_filter(data))
        return 'Successful'
    }
}

export const setFilter = (load) => async (dispatch) => {
    const res = await fetch('/api/filter/createFilter', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(load)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(set_filter(load))
        return 'Successful'
    } else {
        const data = await res.json();
        if (data.errors) {
            return data
        }
    }
}

export const editFilter = (load) => async (dispatch) => {
    // console.log(load, 'editfilter load from frontend')
    const res = await fetch('/api/filter/editFilter', {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(load)
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(put_filter(load))
        return 'Successful'
    } else {
        const data = await res.json();
        if (data.errors) {
            return data
        }
    }
}


const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FILTER:
            return action.f
        case SET_FILTER:
            return action.f
        case PUT_FILTER:
            return action.f
        default:
            return state
    }
}
