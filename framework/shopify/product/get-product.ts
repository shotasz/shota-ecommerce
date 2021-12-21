import { ApiConfig } from "@common/types/api";
import { getConfig } from "@framework/api/config";
import { getProductQuery } from "@framework/utils";

const getProduct = async (config: ApiConfig): Promise<any> => {
  const { data } = await config.fetch<any>({
    url: config.apiUrl,
    query: getProductQuery,
  });

  //console.log(JSON.stringify(data, null, 2));

  return {
    product: {
      name: "MY-super-product",
      slug: "my-super-product",
    },
  };
};

export default getProduct;
