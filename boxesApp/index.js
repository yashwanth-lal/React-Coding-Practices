// import "./index.css";

const Box = (props) => {
  //  Write your code here.

  return <div className={props.class}>{props.text}</div>;
};

const element = (
  <div className="overallContainer">
    <h1 className="heading">Boxes</h1>
    <div className="bottomContainer">
      <Box text="Small" class="smallB" />

      <Box text="Medium" class="mediumB" />
      <Box text="Large" class="largeB" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
