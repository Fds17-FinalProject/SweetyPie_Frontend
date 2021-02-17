// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { changeField, initializeForm } from "../redux/modules/auth";

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const { form } = useSelector(({ auth }) => ({
//     form: auth.register,
//   }));
//   // 인풋 변경 이벤트 핸들러
//   const onChange = e => {
//     const { value, name } = e.target;
//     dispatch(
//       changeField({
//         form: 'register',
//         key: name,
//         value
//       })
//     );
//   };
//   // 폼 등록 이벤트 핸들러
//   const onSubmit = e => {
//     e.preventDefault();
//     // 구현 예정
//   };
  
//   useEffect(() => {
//     dispatch(initializeForm('register'));
//   }, [dispatch]);

//   return (
//     <RegisterForm />
//   );
// };


