const img = window.location.origin;

const MainCity = ({ src, alt, children }) => {
  return (
    <figure className="flex">
      <img className="w-24 h-24 mr-6 rounded-lg" src={img + src} alt={alt} />
      <figcaption className="text-2xl	font-semibold">{children}</figcaption>
    </figure>
  );
};

export default MainCity;
