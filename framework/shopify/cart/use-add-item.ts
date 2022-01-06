import { useAddItem } from "@common/cart";
import { Cart } from "@common/types/cart";
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils";
import { checkoutLineItemsAdd } from "@framework/utils/mutation";

export default useAddItem;

export type AddItemHook = {
  fetcherInput: {
    variantId: string;
    quantity: number;
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

    return data;
  },
  useHook: ({ fetch }) => {
    return async (input) => {
      const response = await fetch(input);

      return response;
    };
  },
};
