
const ModifyContent = ({ children, content, name, onClick }) => {
  
  return (
    <div className=" flex relative flex-wrap border-b border-#rgb235 pt-0.8rem pb-2.4rem">
      <span className="w-full text-1.6rem font-semibold text-#727272">{children}</span>
      <span className="w-full pt-2 text-1.6rem font-normal text-#717171">{content}</span>
      <button className="absolute top-0.8 right-0 text-#008489 text-1.6rem" name={name} onClick={onClick}>수정</button>
    </div>
  );
};

export default ModifyContent;