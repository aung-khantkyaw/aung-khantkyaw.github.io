import PropTypes from 'prop-types';

function BlogCard({ title, description, date, url }) {
    BlogCard.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    return (
        <a to={`/blog/${url}`}>
            <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-4">{description}</p>
                <p className="text-sm text-gray-500">{date}</p>
            </div>
        </a>
    );
}

export default BlogCard;

