import { useContext } from 'react'
import { BallTriangle } from  'react-loader-spinner'
import UserItem from './UserItem'

import GithubContext from '../../context/GithubContext'

function UserResult() {
const { users, loading} = useContext(GithubContext)


if(!loading) {
    return <div className='grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2'>
      { users.map( user =>( <UserItem key={user.id} user={user} /> )) }
  </div>
}else{
    return <div className='text-center w-20 m-auto h-90'><BallTriangle  color="#00BFFF" height={80} width={80} /></div>
}
  
  
}

export default UserResult