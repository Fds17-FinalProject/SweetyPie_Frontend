const ButtonColor = {
  pink:
    'bg-red-500 hover:bg-red-600 text-white font-bold rounded transition-all duration-150 shadow-md focus:outline-none hover:animation-gradient',
  gray:
    'bg-gray-400 hover:bg-gray-500 text-white font-bold rounded transition-all duration-150 shadow-md focus:outline-none ',
  white:
    'bg-white hover:bg-gray-100 text-grey-700 font-bold rounded transition-colors duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 border',
  green:
    'bg-green-600 hover:bg-green-700 text-white font-bold rounded transition-colors duration-150 shadow-md focus:outline-none ',
  black:
    'bg-black hover:bg-gray-600 text-white font-bold rounded transition-colors duration-150 shadow-md focus:outline-none '
};

const ButtonSize = {
  sm: 'h-9 px-5 m-2 text-xs transform focus:scale-90 ',
  md: 'h-10 px-5 m-2 text-sm transform focus:scale-90',
  lg: 'w-full h-11 px-6 m-2 text-md transform focus:scale-90'
};

const Button = ({ color, size, children }) => {
  const classNames = ButtonColor[color] + ' ' + ButtonSize[size];

  return <button className={classNames}>{children}</button>;
};

export default Button;
