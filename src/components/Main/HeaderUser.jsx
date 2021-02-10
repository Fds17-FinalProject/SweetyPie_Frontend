import SVG from '../../assets/Svg';
import { BiMenu } from "react-icons/bi";


const HeaderUser = ({ showModal }) => {
  return (
    <div>
      <nav>
        <button
          className="flex bg-white p-2 rounded-3xl border-gray-300 border w-28	h-14"
          onClick={showModal}
        >
          <div className="flex-grow w-full h-full">
            <BiMenu className="w-full h-full text-gray-600" />
          </div>
          <div className="flex-grow w-full h-full">
            <SVG
              name="user"
              width="100%"
              viewBox="0 0 32 32"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            />
          </div>
        </button>
      </nav>
    </div>
  );
};

export default HeaderUser;
