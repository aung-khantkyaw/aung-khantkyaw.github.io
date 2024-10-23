import blogs from '../blog.json';
import BlogCard from './BlogCard';

function Blog() {
    return (
        <div className="container mx-auto mt-20"> 
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>
        </div>
    )
}

export default Blog;