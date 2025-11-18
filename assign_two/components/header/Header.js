const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-block">
            <div className="header-block-logo">
              <a href="#" className="header-logo">
                logo
              </a>
            </div>

            <div className="header-block-search">
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  id="search-input"
                  className="search-input"
                />
              </form>
            </div>

            <div className="header-block-auth">
              <button
                type="button"
                id="button-auth"
                className="button-auth"
              >Sign in</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
