import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side bg-slate-300'>
        <div className='flex-row items-center space-x-4 card-body'>
            <div>
                <div className='avatar'>
                    <div className='rounded-full shadow w-14 h-14'>
                        <img src={avatar_url} alt={login}/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='card-title text-black'>{login}</h3>
                <Link className='text-black text-opacity-40' to={`/user/${login}`}>Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem