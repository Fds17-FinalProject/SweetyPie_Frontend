import SVG from "../../assets/Svg";
import { Link } from "react-router-dom";


const HeaderLogo = ({color}) => {
  return (
    <div>
        <Link to="#">
        <SVG name="logo" width="102px" color={color} height="32px"/>
        </Link>
      </div>
  );
};

export default HeaderLogo;