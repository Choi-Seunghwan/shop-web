import PortOne from "@portone/browser-sdk/v2";
import strings from "../strings/string";

export type PortOnePaymentRequestData = {
  paymentId: string;
  orderName: string;
  totalAmount: number;
  payMethod: "CARD";
  easyPay?: object;
};

export const requestPortOnePayment = async (
  data: PortOnePaymentRequestData
) => {
  const res = await PortOne.requestPayment({
    storeId: `${process.env.REACT_APP_PORTONE_STORE_ID}`,
    channelKey: `${process.env.REACT_APP_PORTONE_TOSS_PAYMENT_CHANNEL_KEY}`,
    currency: "CURRENCY_KRW",
    ...data,
  });

  if (res?.code) {
    alert(strings.ko.PORTONE_PAYMENT_FAIL);
    throw new Error(res?.message);
  }

  return res;
};
