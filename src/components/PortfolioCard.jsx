import { FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types';
function PortfolioCard({title, description, image, link, github, tech, date }) {
    PortfolioCard.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        tech: PropTypes.array.isRequired,
        date: PropTypes.string.isRequired
    };
  return (
    <div className="card bg-base-300 shadow-xl z-0">
            <figure className="px-10 pt-10 ">
              <img src={image} alt={title} className="rounded-xl border-4 border-base-200" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">{title}</h2>
                  <p className="text-sm">{date}</p>
                </div>
                <div className="flex gap-2">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-neutral">Live Demo</a>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-neutral"><FaGithub className="text-xl" /></a>
                </div>
              </div>
              <p>{description}</p>
              <div className="flex gap-2">
              {
                tech.map((tech) => (
                  <span className="kbd" key={tech}>{tech}</span>
                ))
              }
              </div>
            </div>
          </div>
  );
}

export default PortfolioCard;