// Button.jsx
const ButtonColor = {
  pink:
    'bg-airbnb hover:bg-airbnbHover text-white font-bold rounded-2xl transition-all duration-150 shadow-md focus:outline-none',
  gray:
    'bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-2xl transition-all duration-150 shadow-md focus:outline-none ',
  white:
    'bg-white hover:bg-gray-100 text-grey-700 font-bold rounded-2xl transition-colors duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 border',
  green:
    'bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-colors duration-150 shadow-md focus:outline-none ',
  black:
    'bg-black hover:bg-gray-600 text-white font-bold rounded-2xl transition-colors duration-150 shadow-md focus:outline-none ',
};
const ButtonSize = {
  sm: 'h-14 w-28 px-5 m-2 text-xl transform focus:scale-90',
  md: 'h-16 w-32 px-5 m-2 text-xl transform focus:scale-90',
  lg: 'w-full h-20 px-6 m-2 text-2xl transform focus:scale-90',
};
const Button = ({ color, size, children }) => {
  const classNames = ButtonColor[color] + ' ' + ButtonSize[size];
  return <button className={classNames}>{children}</button>;
};

export default Button;

const ButtonStatus = {
  true:
    'w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border border-#rgb176 text-#rgb113 cursor-pointer hover:border-black hover:text-black',
  false:
    'w-3.2rem h-3.2rem flex justify-center items-center rounded-50% border text-#rgb235',
};

export const IconButton = ({ status, children, onClick }) => {
  const classNames = ButtonStatus[status];
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};
