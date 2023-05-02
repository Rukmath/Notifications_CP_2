const Notification = (props) => {
  const { imgClass, classValue, iconValue, text } = props;
  return (
    <div className={classValue}>
      <img src={iconValue} className={imgClass} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      imgClass="icon"
      classValue="container-1"
      iconValue="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
    />
    <Notification
      imgClass="icon"
      classValue="container-2"
      iconValue="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
    />
    <Notification
      imgClass="icon"
      classValue="container-3"
      iconValue="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
    />
    <Notification
      imgClass="icon"
      classValue="container-4"
      iconValue="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
