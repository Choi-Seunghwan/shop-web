import styled from "styled-components";
import SecondaryTitle from "../components/title/SecondaryTitle";
import FullWidthButton from "../components/button/FullWidthButton";
import CartCardList from "../components/card/CartCardList";
import { useCartContext } from "../context/CartContext";
import { useEffect } from "react";
import { useCommerce } from "../hooks/useCommerce";
import { CartModel } from "../types/commerce.type";
import { formatKrw } from "../utils/format";
import strings from "../strings/string";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 185px);
`;

const TitleWrap = styled.div`
  width: 100%;
  margin: 10px 0 auto 20px;
`;

const CartContentWrap = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 40px;
  padding: 10px;
`;

const CartCardListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BottomWrap = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
`;

const TotalWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const TotalText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #d9534f;
  margin-top: 8px;
`;

export default function Cart() {
  const { cart } = useCartContext();

  const { getCartItems, updateCartQuantity, removeFromCart } = useCommerce();

  useEffect(() => {
    getCartItems().then();
  }, []);

  const handleIncrease = (item: CartModel) => {
    updateCartQuantity(item.id, item.quantity + 1).then(() => {
      alert(strings.ko.INCREASE_CART_ITEM);
      getCartItems().then();
    });
  };
  const handleDecrease = (item: CartModel) => {
    if (item.quantity === 1) {
      removeFromCart(item.id).then(() => {
        alert(strings.ko.REMOVE_FROM_CART);
        getCartItems().then();
      });
    } else {
      updateCartQuantity(item.id, item.quantity - 1).then(() => {
        alert(strings.ko.DECREASE_CART_ITEM);
        getCartItems().then();
      });
    }
  };

  return (
    <Container>
      <TitleWrap>
        <SecondaryTitle title="CART"></SecondaryTitle>
      </TitleWrap>

      {cart.length > 0 ? (
        <CartContentWrap>
          <CartCardListWrap>
            <CartCardList
              items={cart}
              onIncrease={(item) => handleIncrease(item)}
              onDecrease={(item) => handleDecrease(item)}
            />
          </CartCardListWrap>
        </CartContentWrap>
      ) : (
        <CartContentWrap>
          <p>EMPTY</p>
        </CartContentWrap>
      )}

      <BottomWrap>
        <TotalWrap>
          <p>TOTAL</p>
          <TotalText>
            {formatKrw(
              cart.reduce(
                (acc: number, cur: CartModel) =>
                  acc + (cur?.product?.price || 0) * cur.quantity,
                0
              )
            )}
          </TotalText>
        </TotalWrap>
        <FullWidthButton label="BUY NOW" onClick={() => {}}></FullWidthButton>
      </BottomWrap>
    </Container>
  );
}
