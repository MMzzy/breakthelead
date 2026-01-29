import { useState, useEffect } from 'react';


import Loader from "../components/Loader"
import "./Blog.css";
import { Link } from "react-router-dom"

const Services = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(
        () => {
            fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/service?_embed')
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
                            <Link to={`/usluge/${post.slug}`}><h2>{post.title.rendered}</h2></Link>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                             </div>   

                    )) }
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;