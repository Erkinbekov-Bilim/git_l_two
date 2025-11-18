const nav = ["movies", "cartoons", "TV series", "animated TV series"];

const Aside = () => {
  return (
    <>
      <aside>
        <nav className="nav">
          <ul className="nav-list">
            {nav.map((link) => (
              <li>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
