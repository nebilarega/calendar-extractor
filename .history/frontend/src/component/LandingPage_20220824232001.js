import "../css/landing.css";

const LandingPage = ({ disabled, handleClick, getUrl }) => {
  return (
    <div className="main">
      <header className="header">
        <span className="title"> Welcome to 10 Acadamey Scheduler</span>
      </header>
      <main className="body">
        <div className="card"></div>
      </main>
      <footer className="footer">
        {!disabled ? (
          <div>
            <button className="google__api" onClick={getUrl}>
              Authenticate Google
            </button>
          </div>
        ) : (
          <div>
            <button className="post__event" onClick={handleClick}>
              Post Event
            </button>
          </div>
        )}
      </footer>
    </div>
  );
};

export default LandingPage;
