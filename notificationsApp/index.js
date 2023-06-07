const Notification = (props) => {
  //  Write your code here.
  console.log(props);
  const { colorCss, icon, text } = props;

  return (
    <div className={colorCss}>
      <img src={icon} className="icon" />
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.

  //   const {colorCss,text,icon}=eachData
  <div>
    <h1 className="heading">Notifications</h1>
    <div className="messageContainer">
      <Notification
        colorCss={"blue"}
        src={"https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"}
        text={"Information Message"}
      />
      <Notification
        colorCss={"green"}
        src={"https://assets.ccbp.in/frontend/react-js/success-icon-img.png"}
        text={"Success Message"}
      />
      <Notification
        colorCss={"orange"}
        src={"https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"}
        text={"Warning Message"}
      />
      <Notification
        colorCss={"red"}
        src={"https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"}
        text={"Error Message"}
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
