import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BlogCard({ title, description, date, id }) {
    BlogCard.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    };

    return (
        <Link to={`/blog/${id}`}>
            <div className="card bg-base-100 shadow-xl image-full">
                <div className="card-body">
                    <div className='flex items-center gap-x-5'>
                            <img src="./myPhoto.jpg" className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <p>{date}</p>
                        </div>
                    </div>
                    
                    <div dangerouslySetInnerHTML={{ __html: description.length > 100 ? description.substring(0, 100) + "..." : description }} />
                </div>
            </div>
           
        </Link>
    );
}

export default BlogCard;

