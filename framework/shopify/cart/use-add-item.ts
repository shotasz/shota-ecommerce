import { useAddItem } from "@common/cart";
import { Cart } from "@common/types/cart";
import { MutationHook } from "@common/types/hooks";
import { CheckoutLineItemsAddPayload } from "@framework/schema";
import { checkoutToCart, getCheckoutId } from "@framework/utils";
import { checkoutLineItemsAdd } from "@framework/utils/mutation";

export default useAddItem;

export type AddItemHook = {
  fetcherInput: {
    variantId: string;
    quantity: number;
  };
  fetcherOutput: {
    checkoutLineItemsAdd: CheckoutLineItemsAddPayload;
  };
  data: Cart;
};

export const handler: MutationHook<AddItemHook> = {
  fetcherOptions: { query: checkoutLineItemsAdd },
  fetcher: async ({ fetch, options, input }) => {
    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1,
        },
      ],
    };

    const { data } = await fetch({
      ...options,
      variables,
    });

    debugger;
    const cart = checkoutToCart(data.checkoutLineItemsAdd.checkout);

    debugger;

    return cart;
  },
  useHook: ({ fetch }) => {
    return async (input) => {
      const response = await fetch(input);

      return response;
    };
  },
};
