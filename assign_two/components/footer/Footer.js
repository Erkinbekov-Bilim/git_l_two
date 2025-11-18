const footer = ["policy", "terms", "contact"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          <ul className="footer-block-content">
            {footer.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
