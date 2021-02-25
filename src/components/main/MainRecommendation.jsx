const img = window.location.origin;

const MainRecommendation = ({src, alt, children}) => {
  return (
      <figure>
        <img
          className="rounded-lg"
          src={img + src}
          alt={alt}
        />
        <figcaption className="text-left text-1.8rem p-4">{children}</figcaption>
      </figure>
  );
};

export default MainRecommendation;

;