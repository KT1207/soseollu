import styled, { css } from "styled-components";

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10rem;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 550;
  font-size: 48px;
  padding-top: 3%;
`;
const NavContainer = styled.div`
  width: 150vw;
  height: 10vh;
  display: flex;
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // background-color: black;
`;
const FontContainer = styled.div`
  min-width: 3vw;
  width: 100%;
  margin: 0;
  margin-top: 30%;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 501;
  font-size: 24px;
  line-height: 100%;
  color: #444444;
  text-transform: uppercase;

  :after {
    display: block;
    content: "";
    padding-top: 5%;
    border-bottom: solid 3px #222222;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }
  :hover:after {
    transform: scaleX(1);
  }
  :hover {
    font-weight: 550;
    color: #222222;
  }
`;
const NovelFontContainer = styled(FontContainer)`
  min-width: 3rem;
  margin-top: 45%;
  margin-left: 3%;
`;

const NovelImg = styled.img`
  width: 3.5rem;
  height: 4rem;
  margin-top: 1%;
  margin-left: 0.5%;
`;
const NovelBigContainer = styled.div`
  height: auto;
  margin-left: 5rem;
  padding-top: 0.3rem;
  display: flex;
`;

const WriteNovelImg = styled.img`
  width: 3.3rem;
  height: 3rem;
  padding-top: 5%;
`;
const LogoBigContainer = styled.div``;

const LoginContainer = styled.div``;

const LoginBigContainer = styled.div`
  height: 40%;
  margin-top: 0.6rem;
  margin-left: 34%;
  padding-top: 0.8rem;
  padding-left: 0.8rem;
  padding-right: 0.5%;
  border-radius: 15px;
`;

const WriteBigContainer = styled.div`
  height: auto;
  margin-left: 2.5rem;
  padding-top: 0.3rem;
  display: flex;
`;
const LoginFountContainer = styled.div`
  width: 100px;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 550;
  font-size: 28px;
  color: #666;
  text-transform: uppercase;
  :after {
    display: block;
    content: "";
    border-bottom: solid 3px #100;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }
  :hover:after {
    color: #000;
    transform: scaleX(1);
  }
  :hover {
    color: #000;
  }
`;

const LoginButton = styled.div`
  cursor: pointer;
`;

const RegisterFountContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 550;
  text-align: center;
  font-size: 24px;
  color: #ddd;
  text-transform: uppercase;
  :after {
    display: block;
    content: "";
    border-bottom: solid 3px #efffffff;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }
  :hover:after {
    transform: scaleX(0.8);
  }
  :hover {
    color: #ffff;
  }
`;
const RegisterBigContainer = styled.div`
  height: 50%;
  margin-top: 0.8rem;
  padding-top: 0.6rem;
  background-color: #555;
  border-radius: 15px;
  text-justify: auto;
  text-align: center;
  line-height: 250%;
`;
const WriteContainer = styled.div``;

const LoginModalButton = styled.button`
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  text-align: center;
  background-color: transparent;
  border: none;
  border: 1px solid #222;
  color: #222;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: #222;
    color: white;
    cursor: pointer;
  }
`;
const LoginModalButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 12%;
  display: flex;
`;

const LoginFormConatiner = styled.form``;

const LoginPageContainer = styled.div``;

const LoginTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
`;
const LoginInput = styled.input`
  margin-left: auto;
  margin-right: auto;
  margin-left: 5%;
  width: 90%;
  height: 30px;
`;
const TitleLoginFount = styled.div`
  text-align: center;
  margin: auto;
  width: 10rem;
  padding-left: 15%;
  margin-top: 3%;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 550;
  text-align: center;
  font-size: 36px;
`;
const ContantWapper = styled.div`
  flex-wrap: nowrap;
  flex-wrap: wrap;
  align-items: center;
`;
const CloseImg = styled.img`
  width: 2rem;
  height: 2rem;

  :hover {
    cursor: pointer;
  }
`;
const LoginInputContainer = styled.div`
  margin-top: 5%;
`;
const SelectWriteFontWrapper = styled.div``;
const SelectWriteFontConatainer = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 15%;
  text-align: center;
  margin-top: 3%;
  display: flex;
`;

const LoginForm = styled.form``;
export {
  LoginFormConatiner,
  LoginPageContainer,
  LoginInputContainer,
  LoginTitleContainer,
  LoginInput,
  TitleLoginFount,
  CloseImg,
  ContantWapper,
  LogoContainer,
  NavContainer,
  WriteContainer,
  FontContainer,
  NovelImg,
  LoginButton,
  NovelBigContainer,
  LoginBigContainer,
  LoginModalButtonContainer,
  LoginContainer,
  WriteBigContainer,
  LogoBigContainer,
  WriteNovelImg,
  LoginFountContainer,
  RegisterBigContainer,
  RegisterFountContainer,
  LoginModalButton,
  LoginForm,
  SelectWriteFontConatainer,
  SelectWriteFontWrapper,
  NovelFontContainer,
};
