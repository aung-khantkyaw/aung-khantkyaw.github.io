import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogCard({ title, date, id, url }) {
  BlogCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  return (
    <Link to={`/blog/${id}`}>
      <div className="card bg-base-300 shadow-xl z-0 border border-gray-950 border-solid">
        <figure className="px-10 pt-10 ">
          <img
            src={url}
            alt={title}
            className="rounded-xl border-4 border-base-200"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <div>
              <h2 className="card-title">{title}</h2>
              <p className="text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
