import blogs from '../blog.json';
import BlogCard from './BlogCard';

function Blog() {

    return (
        <div className="container mx-auto mt-20"> 
            <h1 className="text-4xl font-bold text-center">Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>
        </div>
    )
}

export default Blog;