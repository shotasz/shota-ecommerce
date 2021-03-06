import classNames from "classnames";
import { FC, useState } from "react";
import styles from "./ProductView.module.css";
import { Button, Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import { ProductSlider, ProductSwatch } from "@components/product";
import { Choices, getVariant } from "../helpers";
import { useUI } from "@components/ui/context";
import useAddItem from "@framework/cart/use-add-item";
import { useApiProvider } from "@common";

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({});
  const { openSidebar } = useUI();
  const addItem = useAddItem();
  const [isLoading, setIsLoading] = useState(false);

  const variant = getVariant(product, choices);

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
        quantity: 1,
      };

      setIsLoading(true);
      await addItem(item);
      setIsLoading(false);

      openSidebar();
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className={classNames(styles.root, "fit", "mb-5")}>
        <div className={classNames(styles.productDisplay, "fit")}>
          <div className={styles.nameBox}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={styles.imageContainer}>
                <Image
                  className={styles.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                  priority={true}
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={styles.sidebar}>
          <section>
            {product.options.map((option) => (
              <div key={option.id} className="pb-4">
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map((value) => {
                    const activeChoice = choices[option.displayName];

                    return (
                      <ProductSwatch
                        key={`${option.id}-${value.label}`}
                        label={value.label}
                        color={value.hexColor}
                        variant={option.displayName}
                        active={value.label === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName]: value.label,
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button
              className={styles.button}
              onClick={addToCart}
              isLoading={isLoading}
            >
              ?????????????????????
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
