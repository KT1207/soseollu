import styled from "styled-components";
import COLORS from "./color";

const StyledLabel = styled.label<{ checked: boolean }>`
  margin-left: 5%;
  cursor: pointer;
  text-indent: -9999px;
  width: 15%;
  height: 11%;
  background: ${({ checked }) => (checked ? COLORS.GREEN : COLORS.GRAY)};
  display: block;
  position: relative;
  border-radius: 100px;

  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "10%" : "calc(55% )")};
    top: 15%;
    width: 30%;
    height: 70%;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;
export { StyledLabel };
