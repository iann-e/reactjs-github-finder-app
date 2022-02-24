import { useContext, useState } from 'react'

import GithubContext from '../../context/GithubContext';

function SearchForm() {

    const [ text, setText ] = useState("");

    const { users, searchUsers, clearUsers } = useContext(GithubContext)

    const submitHandle = (e) => {
        e.preventDefault()
        
        
        if( text.length > 0) {
            searchUsers( text )

            setText("")
        }else{
            alert('Text input is required')
        }

    }

    const clearhandle = () => {
        clearUsers()
    }


  return ( 
        <>
        <form className="form-control mb-2 " onSubmit={ submitHandle } >
            <div className="input-group input-group-lg justify-center">
                <input type="text" placeholder="Search…" className="w-full  input input-bordered input-lg bg-slate-500" value={text} onChange={ (e) => { setText(e.target.value) } }/>
                <button className="btn btn-square btn-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </form>
        { users.length > 0
         && <button className='btn mb-10 w-full' onClick={ clearhandle } > Clear </button> }
        </>)
}

export default SearchForm