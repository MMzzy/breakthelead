import posts from'../components/zadaci/data/blog.json';
import "./Blog.css";

const Blog = () => {
    return(
        <div className='blog-post'>
            <div className='container'>
                <h1>Blog</h1>
                <div className='row'>
                    { posts.map((post) => (
                        <div className='col-md-4 mb-4'>
                            <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} className='mb-3' alt={post.title.rendered}/>
                            <h2>{post.title.rendered}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                            <p>{post._embedded.author[0].name}</p>
                         </div>   

                    )) }
                </div>
            </div>
        </div>
    )
}

export default Blog;