import "./landing.css";

const LandingPage = ({ disabled }) => {
  return (
    <div className="main">
      <header className="header">
        <p className="title"> Welcome to 10 Acadamey Scheduler</p>
      </header>
      <main className="body">
        <div className="card"></div>
      </main>
      <footer className="footer">{disabled ? <div></div> : <div></div>}</footer>
    </div>
  );
};

export default LandingPage;
