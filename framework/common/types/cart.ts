import { ProductOption, ProductVariant } from "./product";

interface Discount {
  value: number;
}

export interface Cart {
  id: string;
  createdAt: string;
  completedAt: string;
  currency: {
    code: string;
  };
  taxesIncluded: boolean;
  //割引前の価格 & 税抜きの価格
  lineItemsSubTotalPrice: number;
  //割引後の価格 & 税込の価格
  totalPrice: number;
  lineItems: any[];
  discounts: Discount[];
}

export interface LineItem {
  id: string;
  variantId: string;
  productId: string;
  name: string;
  path: string;
  quantity: number;
  discounts: Discount[];
  options?: ProductOption[];
  variant: Partial<ProductVariant>;
}
