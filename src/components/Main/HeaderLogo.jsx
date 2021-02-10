<<<<<<< HEAD
import SVG from '../../assets/svg';
import { Link } from 'react-router-dom';
=======
import SVG from "../../assets/svg";
import { Link } from "react-router-dom";
>>>>>>> 603f37e3412d3ba5e3298db53b00d1014c9f8955

const HeaderLogo = ({ color }) => {
  return (
    <div>
      <Link to="#">
        <SVG name="logo" width="102px" color={color} height="32px" />
      </Link>
    </div>
  );
};

export default HeaderLogo;
