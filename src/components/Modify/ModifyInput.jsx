
const ModifyInput = ({ children, content, name, onClick, htmlFor, id}) => {
  return (
    <form className=" flex relative flex-wrap border-b border-#rgb235 pt-3.3 pb-8.4">
      <label className="w-full text-1.6rem font-semibold text-#727272" htmlFor={htmlFor}>{children}</label>
      <input defaultValue={content} className="rounded-lg border w-full h-16 p-4 mt-4 text-1.6rem font-normal text-#717171" id-={id}></input>
      <button className="absolute top-0.8 right-0 text-#008489 text-1.6rem" name={name} onClick={onClick}>취소</button>
      <button className="text-white text-1.6rem w-32 h-20 bg-#008489 rounded-lg mt-10">저장</button>
    </form>
  );
};

export default ModifyInput;