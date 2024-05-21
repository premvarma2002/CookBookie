import { useHistory } from "react-router-dom";
import "./AppBarWithBack.scss";

const AppBarWithBack = () => {
  let history = useHistory();

  return (
    <div className="app-bar-container">
      <h1 className="material-icons back-icon" onClick={() => history.goBack()}>
        arrow_back
      </h1>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
};

export default AppBarWithBack;
