import blogs from '../blog.json';
import BlogCard from './BlogCard';

function Blog() {

    return (
        <div className="container mx-auto mt-20"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>
        </div>
    )
}

export default Blog;