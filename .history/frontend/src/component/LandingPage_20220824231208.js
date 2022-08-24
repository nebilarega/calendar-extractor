import "./landing.css";

const LandingPage = ({ disabled }) => {
  return (
    <div className="main">
      <header className="header">
        <span className="title"> Welcome to 10 Acadamey Scheduler</span>
      </header>
      <main className="body">
        <div className="card"></div>
      </main>
      <footer className="footer">{disabled ? <div></div> : <div></div>}</footer>
    </div>
  );
};

export default LandingPage;
