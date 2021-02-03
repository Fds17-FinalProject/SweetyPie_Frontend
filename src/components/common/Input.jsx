const Input = ({ placeholderText }) => {
  return (
    <input
      placeholder={placeholderText}
      type="text"
      className="w-full h-20 my-5 border rounded-lg px-6"
    />
  );
};

export default Input;
