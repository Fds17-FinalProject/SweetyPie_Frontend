import { Link } from "react-router-dom";

const img = window.location.origin;

const MainCity = ({ src, alt, children }) => {
  return (
    <Link className="w-1/4" to="#">
      <figure className="flex">
        <img
          className="w-24 h-24 mr-6 rounded-lg"
          src={img + src}
          alt={alt}
        />
        <figcaption className="text-2xl	font-semibold">
          {children}
        </figcaption>
      </figure>
    </Link>
  );
};

export default MainCity;