import { useCallback, useRef, useState } from "react";
import { customAxios } from "../../../core/util/CustomAxios";
import SHA256 from "../../../core/util/SHA-256";
import axios from "axios";
const loginATTRS = () => {
  const [isLoginOpenModal, setLoginOpenModal] = useState(false);
  const [isRegisterModal, setRegisterModal] = useState(false);
  const loginIDRef = useRef<HTMLInputElement>(null);
  const loginPWRef = useRef<HTMLInputElement>(null);
  const loginPWCheckRef = useRef<HTMLInputElement>(null);
  const loginEmailCheckRef = useRef<HTMLInputElement>(null);

  const openLoginModal = () => {
    setLoginOpenModal(true);
  };

  const CloseLoginModal = () => {
    setLoginOpenModal(false);
  };
  const openRegisterModal = () => {
    setRegisterModal(true);
  };
  const CloseRegisterModal = () => {
    setRegisterModal(false);
  };
  const LoginModalBlock = () => {
    if (isRegisterModal !== true) {
      openLoginModal();
    }
  };
  const RegisterModalBlock = () => {
    if (isLoginOpenModal !== true) {
      openRegisterModal();
    }
  };

  const RegisterModalStyle = {
    overlay: {
      width: "100%",
      height: "100%",
      position: "fixed",
      backgroundColor: "#343434",
      opacity: "0.7",
    },
    content: {
      width: "25rem",
      height: "23rem",
      top: "25%",
      right: "auto",
      bottom: "auto",
      left: "37.5%",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      border: "1px solid #CCC",
    },
  };
  const LoginModalStyle = {
    overlay: {
      width: "100%",
      height: "100%",
      position: "fixed",
      backgroundColor: "#343434",
      opacity: "0.7",
    },
    content: {
      width: "25rem",
      height: "17rem",
      top: "25%",
      right: "auto",
      bottom: "auto",
      left: "37.5%",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      border: "1px solid #CCC",
    },
  };

  const LoginSubmit = async () => {
    const ID = loginIDRef.current.value;
    const PW = loginPWRef.current.value;
    if (
      loginPWCheckRef.current == (null || undefined) ||
      loginEmailCheckRef.current == (undefined || null)
    ) {
      axios
        .post("서버주소/login", {
          email: SHA256(ID),
          password: SHA256(PW),
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem("ID", ID);
            localStorage.setItem("PW", PW);
            window.location.href = "/main";
          }
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
    } else if (
      loginPWCheckRef.current != (null || undefined) ||
      loginEmailCheckRef.current != (undefined || null)
    ) {
      if (loginPWCheckRef.current.value == loginPWRef.current.value) {
        const Email = loginEmailCheckRef.current.value;
        if (EmailCheck(Email)) {
          axios
            .post("서버주소/register", {
              id: SHA256(ID),
              password: SHA256(PW),
              email: SHA256(Email),
            })
            .then((res) => {
              console.log(res);
              if (res.status == 200) {
                window.location.href = "/main";
              }
            })
            .catch((error) => {
              console.log(error);
              throw new Error(error);
            });
        } else {
          alert("이메일 형식을 지켜주십시오");
        }
      } else {
        alert("비밀번호를 다시 확인해주십시오");
      }
    } else {
      alert("예상하지 못한 오류입니다");
    }
  };
  const EmailCheck = (username) => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    return emailRegEx.test(username);
  };
  return {
    openLoginModal,
    CloseLoginModal,
    CloseRegisterModal,
    openRegisterModal,
    loginIDRef,
    loginPWRef,
    isLoginOpenModal,
    isRegisterModal,
    RegisterModalStyle,
    LoginModalStyle,
    LoginModalBlock,
    loginPWCheckRef,
    RegisterModalBlock,
    LoginSubmit,
    loginEmailCheckRef,
  };
};
export default loginATTRS;
