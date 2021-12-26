import classNames from "classnames";
import { FC, useState } from "react";
import styles from "./ProductView.module.css";
import { Button, Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import { ProductSlider, ProductSwatch } from "@components/product";

interface Props {
  product: Product;
}

type AvailableChoices = "size" | "color" | string;

type Choices = {
  [P in AvailableChoices]: string;
};

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({});

  console.log(choices);

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
            {/* {product.options.map((option) => console.log(option.displayName))} */}
            {product.options.map((option) => (
              <div key={option.id} className="pb-4">
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map((value) => {
                    const activeChoice =
                      choices[option.displayName.toLowerCase()];

                    return (
                      <ProductSwatch
                        key={`${option.id}-${value.label}`}
                        label={value.label}
                        color={value.hexColor}
                        variant={option.displayName}
                        active={value.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              value.label.toLowerCase(),
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
              onClick={() => alert("Adding cart!")}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
