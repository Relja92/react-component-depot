import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Check out my projects on{" "}
        <a href="https://github.com/yourusername">GitHub</a>.
      </p>
      <p>
        Read more on my <a href="https://yourblog.com">Blog</a>.
      </p>
      <p>
        Email me at{" "}
        <a href="mailto:youremail@example.com">youremail@example.com</a>
      </p>
    </footer>
  );
};

export default Footer;
