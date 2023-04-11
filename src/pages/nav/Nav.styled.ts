import { count } from "console";
import styled from "styled-components";
const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10rem;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 550;
  font-size: 48px;
  line-height: 67px;
`;
const NavContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  position: fixed;
  margin-top: 2rem;
`;
const FontContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 501;
  font-size: 36px;
  line-height: 67px;
  color: #444444;
  text-transform: uppercase;
  :after {
    display: block;
    content: "";
    border-bottom: solid 3px #400000;
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
const NovelImg = styled.img`
  width: 4.5rem;
  height: 5rem;
  margin-top: -0.4rem;
  margin-left: -0.5rem;
`;
const NovelBigContainer = styled.div`
  margin-left: 5rem;
  display: flex;
  padding-top: 0.3rem;
`;

const WriteNovelImg = styled.img`
  width: 4rem;
  height: 4rem;
`;
const LogoBigContainer = styled.div``;

const LoginContainer = styled.div``;

const LoginBigContainer = styled.div`
  height: 40%;
  margin-top: 1rem;
  margin-left: 45%;
  padding-top: 0.8rem;
  padding-left: 0.8rem;
  padding-right: 0.5%;
  border-radius: 15px;
`;

const WriteBigContainer = styled.div`
  margin-left: 2.5rem;
  display: flex;
  padding-top: 0.3rem;
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
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: #555;
  border-radius: 15px;
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
};
