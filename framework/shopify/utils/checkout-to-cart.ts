import { Checkout, Maybe } from "@framework/schema";
import { normalizeCheckout } from "./normalize";

const checkoutToCart = (checkout?: Maybe<Checkout>) => {
  if (!checkout) {
    throw new Error("Missing Checkout!!!");
  }

  return normalizeCheckout(checkout);
};

export default checkoutToCart;
