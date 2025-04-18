import { Divider } from "@mui/material";
import styled from "styled-components";

const AppBottomContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 125px;
  background-color: #fff;
`;

const LinkWrap = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  margin: auto 0 20px 0;
`;

const LinkText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin: 0;
  cursor: pointer;
`;

const CopyrightWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: auto;
  background-color: rgba(196, 196, 196, 0.1);
`;

const CopyRight = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #555;
`;

export default function AppBottom() {
  const linkButtonClickHandler = (
    e: React.MouseEvent<HTMLParagraphElement>
  ) => {
    const target = e.currentTarget.innerText;
    switch (target) {
      case "About":
        window.open("https://github.com/Choi-Seunghwan", "_blank");
        break;
      case "Contact":
        window.open("https://github.com/Choi-Seunghwan", "_blank");
        break;
      case "Blog":
        window.open("https://github.com/Choi-Seunghwan", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <AppBottomContainer>
      <Divider style={{ width: "50%", margin: "20px 0 0 0" }} />
      <LinkWrap>
        <LinkText onClick={linkButtonClickHandler}>About</LinkText>
        <LinkText onClick={linkButtonClickHandler}>Contact</LinkText>
        <LinkText onClick={linkButtonClickHandler}>Blog</LinkText>
      </LinkWrap>
      <CopyrightWrap>
        <CopyRight>Copyright© Rights Reserved.</CopyRight>
      </CopyrightWrap>
    </AppBottomContainer>
  );
}
