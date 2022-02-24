const GithubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload
            }

        default:
            return state
    }
}

export default GithubReducer