import { useState, useEffect } from 'react';


import Loader from "../components/Loader"
import posts from'../components/zadaci/data/blog.json';
import "./Blog.css";
import { Link } from "react-router-dom"

const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(
        () => {
            fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/posts?_embed')
            .then(response => response.json())
            .then(
                (data) => {
                    setPosts(data);
                }
            )
            .finally(() => setLoading(false));
    }, []
    )



    return(
        <>
            {loading && <Loader/>}
            <div className='blog-post'>
            <div className='container'>
                <div className='row'>
                    { posts.map((post) => (
                        <div className='col-md-4 mb-4'>
                            <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} className='mb-3' alt={post.title.rendered}/>
                            <Link to={`/blog/${post.slug}`}><h2>{post.title.rendered}</h2></Link>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                            <p>{post._embedded.author[0].name}</p>
                         </div>   

                    )) }
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;