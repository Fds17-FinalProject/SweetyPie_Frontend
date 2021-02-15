import { Link } from "react-router-dom";

const img = window.location.origin;

const MainRecommendation

= ({src, alt, children}) => {
  return (
    <Link className="w-1/4 pr-3.5" to="#">
      <figure>
        <img
          className="rounded-lg"
          src={img + src}
          alt={alt}
        />
        <figcaption className="text-1.8rem p-4">{children}</figcaption>
      </figure>
    </Link>
  );
};

export default MainRecommendation;

;