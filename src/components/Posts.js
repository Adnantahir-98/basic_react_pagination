import React from 'react'


const Posts = ({ posts, loading}) => {

    if(loading){
        return <h2 className='text-center my-5'>Loading...</h2>
    }

  return (
    <div>
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item text-left'>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Posts
