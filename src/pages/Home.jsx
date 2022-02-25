import SearchForm from '../components/users/UserSearchForm'
import UserResult from '../components/users/UserResult'



function Home() {



  return (
    <>
        <SearchForm />
        <div className='min-h-400' style={{ minHeight: '400px' }}>
          <UserResult />
        </div>
        
    </>
  )
}

export default Home