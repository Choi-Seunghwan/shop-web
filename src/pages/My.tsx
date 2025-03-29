import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import SecondaryTitle from "../components/title/SecondaryTitle";
import { useAuthContext } from "../context/AuthContext";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useCommerce } from "../hooks/useCommerce";
import { OrderModel } from "../types/commerce-model.type";
import OrderHistoryCardList from "../components/card/OrderHistoryCardList";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 185px);
`;

const TitleWrap = styled.div`
  width: 100%;
  margin: 20px 0 20px 20px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  padding: 10px;
`;

const BottomWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: auto;
  padding: 10px;
`;

const SignOutButton = styled.p`
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function My() {
  const { account } = useAuthContext();
  const { signOut } = useAuth();
  const { getOrders } = useCommerce();
  const [orders, setOrders] = useState<OrderModel[]>([]);

  const navigate = useNavigate();

  const signOutButtonHandler = async () => {
    await signOut();
    navigate("/");
  };

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res);
    });
  }, []);

  return (
    <Container>
      <TitleWrap>
        <SecondaryTitle
          style={{ marginBottom: "0px" }}
          title="Info"
        ></SecondaryTitle>
      </TitleWrap>
      <ContentWrap>
        <div style={{ marginBottom: "20px" }}>
          <SecondaryTitle style={{ marginTop: "0px" }} title="회원정보" />
          <p>ID: {account?.loginId}</p>
          <p>EMAIL: {account?.email}</p>
          <Divider />
        </div>
        <div>
          <SecondaryTitle title="주문내역" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {orders.map((order) => (
              <OrderHistoryCardList
                key={order.orderNo}
                items={[order]}
              ></OrderHistoryCardList>
            ))}
          </div>
        </div>
      </ContentWrap>
      <BottomWrap>
        <SignOutButton onClick={signOutButtonHandler}>로그아웃</SignOutButton>
      </BottomWrap>
    </Container>
  );
}
