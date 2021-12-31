import React, { FC, Children, isValidElement, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import styles from "./ProductSlider.module.css";
import classNames from "classnames";

const ProductSlider: FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className={styles.root}>
      <div
        ref={sliderRef as React.LegacyRef<HTMLDivElement>}
        className="keen-slider h-full transition-opacity"
      >
        <button
          onClick={() => slider.current?.prev()}
          className={classNames(styles.leftControl, styles.control)}
        />
        <button
          onClick={() => slider.current?.next()}
          className={classNames(styles.rightControl, styles.control)}
        />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`,
              },
            };
            // return React.cloneElement(child, {
            //   className: `${
            //     child.props.className ? `${child.props.className}` : ""
            //   } keen-slider__slide`,
            // });
          }

          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
