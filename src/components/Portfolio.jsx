import portfolio from "../portfolio.json";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return  (
    <div className="container mx-auto mt-20"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <PortfolioCard {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

