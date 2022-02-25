import { createContext, useReducer } from 'react'
import  GithubReducer  from './GithubReducer'


const GithubContext = createContext()

export const GithubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer( GithubReducer, initialState )


    // Get All Users based on the search params
    const searchUsers = async (text) => {

        setLoading();

        const params = new URLSearchParams({
            q: text
        })
        

        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${ process.env.REACT_APP_GITHUB_TOKEN }`
            }
        })

        // if (res.status === 404 || res.status === 401) {
        //     window.location = '/notfound'
        // }else{
            const data = await res.json();
        
            dispatch({
                type: 'GET_USERS',
                payload: data.items
            })
        // }

    }

    /*
    * getUser
    */
    const getUser = async (text) => {

        setLoading()
        
        const res = await fetch( `${process.env.REACT_APP_GITHUB_URL}/users/${text}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        } )

        if (res.status === 404 || res.status === 401) {
            window.location = '/notfound'
        }else{
            const data = await res.json()
            

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
        
    }

    //Loading before get all users
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    // Clear Users
    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    // get repos

    const getRepoItems = async (text) => {
        
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${text}/repos?${params}`,{
            headers: {
                Authorization: `token ${ process.env.REACT_APP_GITHUB_TOKEN }`
            }
        })

        const data = await res.json()


        dispatch({
            type: 'GET_REPOS',
            payload: data
        })

    }

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        getUser,
        clearUsers,
        getRepoItems
    }}>
        { children }
    </GithubContext.Provider>
}

export default GithubContext