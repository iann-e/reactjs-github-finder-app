import RepoItem from './RepoItem'


function RepoItems({ repos }) {

 

  return (
    <>
        <h2 className='text-3xl font-bold mb-10'>Popular Repos</h2>

        {
            repos.map((repo) => ( 
                <RepoItem key={repo.id} repo={repo} />
            ))
        }

    </>
  )
}

export default RepoItems