import { FaUsers, FaUser, FaSlackHash, FaGit } from 'react-icons/fa'
import React, { useContext, useEffect }  from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../../context/GithubContext'
import { BallTriangle } from 'react-loader-spinner'
import RepoItems from '../repo/RepoItems'


function User() {

    const params = useParams()

    const { user, loading, getUser, getRepoItems, repos } = useContext(GithubContext)

    useEffect(() => {

        getUser(params.login)

        getRepoItems(params.login)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const { avatar_url, bio,  followers, following, hireable, public_gists,  public_repos,  html_url, name } = user


 if( !loading) {
  return (
      <>
        <div className="hero bg-base-200 mb-10">
        <div className="flex-col hero-content lg:flex-row">
            <img src={avatar_url} className="max-w-sm rounded-lg shadow-2xl" alt={name} />
            <div>
            <div className="flex">
            <h1 className="text-5xl font-bold">{name}</h1>
            {hireable && <div className="badge badge-secondary ml-2">Hireable</div>}
            </div>
            
            <p className="py-6">{bio}</p>
            <a href={html_url}  className="btn btn-accent">View Github Page</a>
            </div>
        </div>
        </div>

        <div className="flex flex-col w-full lg:flex-row mb-10">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <FaUsers style={{ fontSize: '46px' }}/> 
                <span >{followers} Followers</span>
            </div> 

             <div className="divider lg:divider-horizontal"></div> 

            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <FaUser style={{ fontSize: '46px' }}/> 
                <span >{following} Following</span>
            </div>

             <div className="divider lg:divider-horizontal"></div> 

            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <FaSlackHash style={{ fontSize: '46px' }}/> 
                <span >{public_gists} Public Gists</span>
            </div> 

            <div className="divider lg:divider-horizontal"></div> 

            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <FaGit style={{ fontSize: '46px' }}/> 
                <span >{public_repos} Public Repos</span>
            </div>
            
        </div>

        <RepoItems repos={ repos }/>
      </>
  )
}else{
    return <div className='text-center w-20 m-auto h-90'><BallTriangle  color="#00BFFF" height={80} width={80} /></div>
}
}

export default User