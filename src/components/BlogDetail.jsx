import { useParams } from "react-router-dom";
import blogs from '../blog.json';

function BlogDetail() {
    const { id } = useParams();
    
    const blog = blogs.find(blog => blog.id === Number(id))

  return (
    <div className="container mx-auto mt-20"> 
        <div className="my-10 bg-neutral p-10 rounded-xl">
            <div className="flex items-center gap-x-5">
                <img src="/myPhoto.jpg" className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                <div>
                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                    <p className="text-neutral-content">{blog.date}</p>
                </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.description }} className="mt-10" />           
        </div>
    </div>
  );
}

export default BlogDetail;

