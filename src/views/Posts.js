import React from 'react'
import {useState, useEffect} from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const response = await fetch('http://hn.algolia.com/api/v1/search?query=react');

        const data = await response.json();
        
        setPosts(data.hits)
       
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
    </div>
  )
}

export default Posts;