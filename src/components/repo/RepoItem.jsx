import React from 'react'
import { FaLink, FaEye } from 'react-icons/fa'

function RepoItem({ repo }) {

    const { name, description, watchers, forks, stargazers_count } = repo
  return (
    <div className="card rounded-md bg-gray-800 hover:bg-gray-500 mb-2">
        <div className="card-body">
            <h3 className='mb-2 text-xl font-semibold'>
                <a href="#"> 
                    <FaLink className='inline mr-1'/> { name }
                </a>
            </h3>
            <p className='text-sm'>{description}</p>

            <div>
                <div className='mr-2 badge badge-info badge-lg'>
                    <FaEye className='mr-2' /> {watchers}
                </div>
                <div className='mr-2 badge badge-info badge-lg'>
                    <FaEye className='mr-2' /> {stargazers_count}
                </div>
                <div className='mr-2 badge badge-info badge-lg'>
                    <FaEye className='mr-2' /> {forks}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepoItem