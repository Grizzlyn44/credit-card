import Card from "./components/Card/Card";

const App = () => {
  return (
    <div className="App">
      <div className="main-container">
        <span className="bg-dot left" />
        <span className="bg-dot right" />
        <div className="inner">
          <div className="heading-text">
            Please enter your credit card details below
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
