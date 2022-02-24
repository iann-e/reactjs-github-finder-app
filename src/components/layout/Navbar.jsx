import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar({ title }) {
  return <div className="navbar bg-slate-100 text-black mb-10">
    <div className='w-full max-w-screen-lg m-auto'>
      <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl" href="/"><FaGithub style={{ marginRight: '10px', fontSize: '36px   ' }}/> github finder</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
    </div>
</div>
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.prototype = {
    title: PropTypes.string,
}

export default Navbar