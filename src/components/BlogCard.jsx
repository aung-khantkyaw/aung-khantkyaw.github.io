import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiExternalLink } from "react-icons/hi";

function BlogCard({ title, description, date, id }) {
    BlogCard.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    };

    return (
        
            <div className="card bg-base-100 shadow-xl image-full z-0">
                <div className="card-body">
                    <div className='flex items-center justify-between gap-x-5'>
                        <div className='flex items-center gap-x-5'>
                                <img src="./myPhoto.jpg" className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                            <div>
                                <h3 className="card-title text-lg">{title}</h3>
                                <p className='text-xs'>{date}</p>
                            </div>
                        </div>
                        <div>
                        <Link to={`/blog/${id}`} className="btn btn-sm btn-primary"> Read More <HiExternalLink className="text-lg"/></Link>
                        </div>
                    </div>
                    <div className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: description.length > 100 ? description.substring(0, 100) + "..." : description }} />
                </div>
            </div>
    );
}

export default BlogCard;

