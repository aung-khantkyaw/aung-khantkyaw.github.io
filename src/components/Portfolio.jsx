import portfolio from "../portfolio.json";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return  (
    <div className="container mx-auto mt-20"> 
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 m-5">
        {portfolio.map((project) => (
          <PortfolioCard {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

