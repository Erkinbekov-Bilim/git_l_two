const App = (
  <>
    <Header />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </>
);

const root = document.querySelector("#app");
ReactDOM.render(App, root);
