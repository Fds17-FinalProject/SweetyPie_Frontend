// import React from 'react';
// import Button from '../common/Button';


// const RegisterForm = ({ hideModal, onChange, registerSubmit, state }) => {
//   const { socialRegister } = state;
//   return (
//     <>
//           <h1 className="a11y-hidden">회원가입 팝업창</h1>
//           <h2 className="text-1.6rem font-extrabold border-b pb-8 mb-2rem">회원가입 완료</h2>
//           <button
//             data-name="close"
//             className="flex w-3.6rem h-3.6rem absolute top-5 left-4 justify-center items-center rounded-50% hover:bg-#f7f7f7"
//             onClick={hideModal}
//           >
//             <img
//               data-name="close"
//               src="/img/close.png"
//               alt="#"
//               className="w-1.8rem h-1.8rem"
//             />
//       </button>
//       <form className="flex flex-wrap	w-full" onSubmit={registerSubmit}>
//         <label label htmlFor="email-input" className="a11y-hidden">이메일</label>
//         <input className="w-full border rounded-lg py-4 px-1.2rem" id="email-input" type="text" name="email" placeholder="이메일" onChange={(e) => onChange({e, form:'socialRegister'})} value={socialRegister.email}></input>
//         <span className="block py-2 px-4 text-airbnb text-1.2rem">"이메일 형식을 맞춰주세요."</span>

//         <label label htmlFor="name-input" className="a11y-hidden">이름</label>
//         <input className="w-full border rounded-lg py-4 px-1.2rem" id="name-input" type="text" name="name" placeholder="이름" onChange={(e) => onChange({e, form:'socialRegister'})} value={socialRegister.name}></input>
//         <span className="block py-2 px-4 text-airbnb text-1.2rem">"한글 2글자 이상"</span>

//         <label label htmlFor="contact-input" className="a11y-hidden">휴대폰 번호</label>
//         <input className="w-full border rounded-lg py-4 px-1.2rem" id="contact-input" type="text" name="contact" placeholder="휴대폰 번호" onChange={(e) => onChange({e, form:'socialRegister'})} value={socialRegister.contact}></input>
//         <span className="block py-2 px-4 text-airbnb text-1.2rem">"번호는 11자 이상 작성"</span>

//         <label label htmlFor="birth-input" className="a11y-hidden">생년월일</label>
//         <input className="w-full border rounded-lg py-4 px-1.2rem" id="birth-input" type="date" name="birthDate" placeholder="휴대폰 번호" onChange={(e) => onChange({e, form:'socialRegister'})} value={socialRegister.birth}></input>
//         <span className="block py-2 px-4 text-airbnb text-1.2rem">"오늘 이전 날짜"</span>
//         <Button color='pink' size='lg' className="mt-8">회원가입</Button>
//       </form>
//     </>
//   );
// };

// export default RegisterForm;
