import React from "react";
import { Link } from "react-router-dom";
import pagesConfig from "../config/pagesConfig";

// Helper component to apply classes to Heroicons
const IconWrapper: React.FC<{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}> = ({ icon: Icon, className }) => (
  <Icon className={className} style={{ height: "24px", width: "24px" }} />
);

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <ul>
        {pagesConfig.map((page) => (
          <li key={page.path}>
            <Link to={page.path}>
              <IconWrapper icon={page.icon} />
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
