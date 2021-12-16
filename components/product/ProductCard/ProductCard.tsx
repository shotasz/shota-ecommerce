import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const placeHolderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={styles.root}>
        {variant === "slim" ? (
          <>
            <div className="inset-0 flex items-center justify-center absolute z-20">
              <span className="bg-black text-white p-3 font-bold text-xl">
                {product.name}
              </span>
            </div>

            {product.images && (
              <Image
                className={styles.productImage}
                alt={product.name ?? "商品名"}
                src={product.images[0].url ?? placeHolderImage}
                height={320}
                width={320}
                quality="85"
                priority={true}
                layout="fixed"
              />
            )}
          </>
        ) : (
          <>
            <div className={styles.productBg}></div>
            <div className={styles.productTag}>
              <h3 className={styles.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={styles.productPrice}>
                {product.price.currencyCode} {product.price.value}
              </span>
            </div>
            {product.images && (
              <Image
                className={styles.productImage}
                alt={product.name ?? "商品名"}
                src={product.images[0].url ?? placeHolderImage}
                height={540}
                width={540}
                quality="85"
                priority={true}
                layout="responsive"
              />
            )}
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
