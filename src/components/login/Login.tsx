import React, { ChangeEvent, memo, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";
import LOGIN from "../../type/login.type";
import styled from "styled-components";
import COLORS from "./hooks/color";
import Modal from "react-modal";
import loginATTRS from "./hooks/login";
import {
  CloseImg,
  ContantWapper,
  LoginBigContainer,
  LoginButton,
  LoginFountContainer,
  LoginInput,
  LoginInputContainer,
  LoginModalButton,
  LoginModalButtonContainer,
  LoginTitleContainer,
  RegisterBigContainer,
  RegisterFountContainer,
  SelectWriteFontConatainer,
  SelectWriteFontWrapper,
  TitleLoginFount,
} from "../../pages/nav/Nav.styled";

import { StyledLabel } from "./hooks/SwichToggleStyle";

const Loginnav = () => {
  const login: string = "LOGOUT";
  let loginstatus;
  const {
    CloseLoginModal,
    loginEmailCheckRef,
    loginIDRef,
    loginPWRef,
    CloseRegisterModal,
    isRegisterModal,
    isLoginOpenModal,
    RegisterModalBlock,
    RegisterModalStyle,
    LoginModalStyle,
    LoginModalBlock,
    loginPWCheckRef,
    LoginSubmit,
    handleOnChange,
    setSwitchState,
    switchState,
  } = loginATTRS();

  function ToggleSwitch() {
    return (
      <StyledLabel htmlFor="checkbox" checked={switchState}>
        <input
          id="checkbox"
          type="checkbox"
          checked={switchState}
          onChange={handleOnChange}
        />
      </StyledLabel>
    );
  }

  if (login !== "LOGIN") {
    loginstatus = (
      <>
        <LoginBigContainer>
          <LoginButton>
            <LoginFountContainer onClick={LoginModalBlock}>
              로그인
            </LoginFountContainer>
          </LoginButton>

          <Modal style={LoginModalStyle} isOpen={isLoginOpenModal}>
            <LoginTitleContainer>
              <TitleLoginFount>로그인</TitleLoginFount>
              <CloseImg src="Images/Colsemodal.png" onClick={CloseLoginModal} />
            </LoginTitleContainer>
            <ContantWapper>
              <>
                <LoginInputContainer>
                  <LoginInput
                    type={"text"}
                    placeholder="닉네임를 입력해주세요"
                    ref={loginIDRef}
                    required
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginInput
                    type={"password"}
                    placeholder="비밀번호를 입력해주세요"
                    ref={loginPWRef}
                    required
                  />
                </LoginInputContainer>
                <LoginModalButtonContainer>
                  <LoginModalButton onClick={LoginSubmit}>
                    로그인
                  </LoginModalButton>
                </LoginModalButtonContainer>
              </>
            </ContantWapper>
          </Modal>
        </LoginBigContainer>

        <RegisterBigContainer>
          <RegisterFountContainer onClick={RegisterModalBlock}>
            회원가입
          </RegisterFountContainer>

          <Modal style={RegisterModalStyle} isOpen={isRegisterModal}>
            <LoginTitleContainer>
              <TitleLoginFount>회원가입</TitleLoginFount>
              <CloseImg
                src="Images/Colsemodal.png"
                onClick={CloseRegisterModal}
              />
            </LoginTitleContainer>

            <ContantWapper>
              <>
                <LoginInputContainer>
                  <LoginInput
                    type={"text"}
                    placeholder="닉네임를 입력해주세요"
                    ref={loginIDRef}
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginInput
                    type={"password"}
                    placeholder="비밀번호를 입력해주세요"
                    ref={loginPWRef}
                    required
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginInput
                    type={"password"}
                    placeholder="비밀번호를 다시 입력해주세요"
                    ref={loginPWCheckRef}
                    required
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginInput
                    type={"email"}
                    placeholder="이메일을 입력해주세요"
                    ref={loginEmailCheckRef}
                    required
                  />
                </LoginInputContainer>
                <SelectWriteFontWrapper>
                  <SelectWriteFontConatainer>
                    작가로 활동 할 예정인가요? {ToggleSwitch()}
                  </SelectWriteFontConatainer>
                </SelectWriteFontWrapper>
                <LoginModalButtonContainer>
                  <LoginModalButton onClick={LoginSubmit}>
                    회원가입
                  </LoginModalButton>
                </LoginModalButtonContainer>
              </>
            </ContantWapper>
          </Modal>
        </RegisterBigContainer>
      </>
    );
  } else {
    loginstatus = (
      <>
        <RegisterBigContainer>
          <RegisterFountContainer>
            <div>로그아웃</div>
          </RegisterFountContainer>
        </RegisterBigContainer>
      </>
    );
  }
  return <>{loginstatus}</>;
};

export default memo(Loginnav);
