import React, { useState, useEffect } from "react";
import TouchCarousel from "react-touch-carousel";

import { Empty } from "../Shared/Empty.component";
import { Pizza, PizzaImage } from "./Pizza/Pizza.component";
import NonPassiveTouchTarget from "../helpers/NonPasiveTouchTarget";
import TouchWithMouse from "../helpers/TouchWithMouse.hoc";

import "./carousell.css";
import { Page } from "../Shared/Page.component";
import { useWindowSize } from "../helpers/useWindowSize.hook";

function clamp(n, min, max) {
  if (n < min) {
    return min;
  }
  if (n > max) {
    return max;
  }
  return n;
}

export const Menu = ({ pizzas }) => {
  const windowSize = useWindowSize();
  const [autoplay, setAutoplay] = useState(3000);
  const cardSize = 300;
  const [carouselWidth, setCarouselWidth] = useState(
    clamp(windowSize.width, 0, 960)
  );
  const cardPadCount = 3;

  useEffect(() => {
    setCarouselWidth(clamp(windowSize.width, 0, 960));
  }, [windowSize]);

  if (!pizzas) return <Empty>Something wrong happend! Try again.</Empty>;

  if (!pizzas.length) return <Empty>There are no items in this menu.</Empty>;

  function renderCard(index, modIndex, cursor) {
    const item = pizzas[modIndex];
    const rotate = 40 * (index + cursor);
    const onTop = Math.abs(index + cursor) < 0.5;

    return (
      <div
        key={index}
        className="carousel-card flex flex-col"
        onTouchEndCapture={() => setAutoplay(0)}
      >
        <div
          className="carousel-card-inner"
          style={{
            transform: `rotate(${rotate}deg) ${
              onTop ? "scale(1)" : "scale(0.8)"
            }`,
            zIndex: onTop ? 1 : 0,
          }}
        >
          <div
            className="duration-200 transition-transform ease-out"
            style={{
              transform: `${onTop ? "scale(1)" : "scale(0.8)"}`,
            }}
          >
            <PizzaImage src={item.image_url} className="m-auto"></PizzaImage>
          </div>
        </div>
        <div
          className={`transition-opacity duration-150 ease-in ${
            onTop ? "opacity-100" : "opacity-0"
          }`}
        >
          <Pizza pizza={item}></Pizza>
        </div>
      </div>
    );
  }

  function CarouselContainer(props) {
    const { cursor, carouselState, ...rest } = props;
    // Put current card at center
    const translateX =
      (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
    return (
      <NonPassiveTouchTarget className="carousel-container">
        <NonPassiveTouchTarget
          className="carousel-track"
          style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
          {...rest}
        />
      </NonPassiveTouchTarget>
    );
  }

  const Container = TouchWithMouse(CarouselContainer);

  return (
    <>
      <section className="pb-16 hidden sm:block">
        <Page>
          {pizzas.map((p) => (
            <Pizza pizza={p} key={p.id} />
          ))}
        </Page>
      </section>
      <section className="pb-16 flex sm:hidden select-none pt-24">
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={pizzas.length}
          autoplay={autoplay}
          cardPadCount={cardPadCount}
          renderCard={renderCard}
        />
      </section>
    </>
  );
};
