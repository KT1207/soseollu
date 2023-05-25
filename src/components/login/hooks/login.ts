import { ChangeEvent, useCallback, useRef, useState } from "react";
import { customAxios } from "../../../core/util/CustomAxios";
import SHA256 from "../../../core/util/SHA-256";
import axios from "axios";
import React from "react";
const loginATTRS = () => {
  const [isLoginOpenModal, setLoginOpenModal] = useState(false);
  const [isRegisterModal, setRegisterModal] = useState(false);
  const loginIDRef = useRef<HTMLInputElement>(null);
  const loginPWRef = useRef<HTMLInputElement>(null);
  const loginPWCheckRef = useRef<HTMLInputElement>(null);
  const loginEmailCheckRef = useRef<HTMLInputElement>(null);
  const writeSelectRef = useRef<HTMLSelectElement>();
  const [switchState, setSwitchState] = useState(false);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSwitchState(!switchState);
  }
  const openLoginModal = () => {
    setLoginOpenModal(true);
  };
  const WriteSelectBoxChangeTest = () => {
    console.log(writeSelectRef.current.value);
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
      height: "26rem",
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
      MsOverFlowStyle: "none",
      scrollbars: "none",
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
        .post(
          "http://localhost:8001/auth/login",
          {
            nickname: SHA256(ID),
            password: SHA256(SHA256(PW)),
          },
          {
            headers: { authorization: "local" },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem(`${SHA256(SHA256("ID"))}`, SHA256(ID));
            localStorage.setItem(`${SHA256(SHA256("PW"))}`, SHA256(SHA256(PW)));
            window.location.href = "/main";
            alert("로그인에 성공했습니다!");
          }
        })
        .catch((error) => {
          console.log("Fail");
          alert("가입되지 않은 사용자입니다!");
          console.log(error);
          throw new Error(error);
        });
    } else if (
      loginPWCheckRef.current != (null || undefined) ||
      loginEmailCheckRef.current != (undefined || null)
    ) {
      if (loginPWCheckRef.current.value == loginPWRef.current.value) {
        const Email = loginEmailCheckRef.current.value;
        let WriteBool;
        if (switchState) {
          WriteBool = "1";
        } else {
          WriteBool = "0";
        }
        if (EmailCheck(Email)) {
          console.log("post");

          axios
            .post("http://localhost:8001/auth/join", {
              nickname: SHA256(ID),
              password: SHA256(SHA256(PW)),
              email: SHA256(Email),
              WriteBool: SHA256(SHA256(WriteBool)),
            })
            .then((res) => {
              console.log(res);
              alert("회원 가입에 성공했습니다!");
              if (res.status == 200) {
                window.location.href = "/main";
              }
            })
            .catch((error) => {
              console.log(error);
              alert("이미 등록되어있는 사용자입니다");
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

  const switchStateChange = useCallback(() => {}, [
    setSwitchState,
    switchState,
  ]);

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
    WriteSelectBoxChangeTest,
    writeSelectRef,
    handleOnChange,
    setSwitchState,
    switchState,
  };
};
export default loginATTRS;
