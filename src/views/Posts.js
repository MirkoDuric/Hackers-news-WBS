import React from 'react'
import {useState, useEffect} from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchPosts()
    }, [page])

    const fetchPosts = async () => {
        const response = await fetch('http://hn.algolia.com/api/v1/search?query=react');

        const data = await response.json();
        
        setPosts(data.hits);
        
       
    }

  return (
    <div>
        <ol>
        {posts.length ? posts.map((post) => {
            return(
                <li key={post.id}>{post.title}</li>
            )
        }): null}
        </ol>
        <button>Previous</button>
        <button>Next</button>
    </div>
  )
}

export default Posts;