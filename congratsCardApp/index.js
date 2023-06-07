const element = (
  <div className="overallContainer">
    <h1 className="heading1">Congratulations</h1>
    <div className="profileContainer">
      <img
        className="profilePic"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="name">Kiran V</p>
      <p className="education">
        Vishnu Institute of Computer Education and Technology,
        <br />
        Bhimavaram
      </p>
      <img
        className="profilePic"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
