import React, { useState } from "react";
import { Add } from "../static/images/icons/Add";
import { Fire } from "../static/images/icons/Fire";
import { Shipping } from "../static/images/icons/Shipping";
import styles from "./card.module.css";
import Section from "./Section";
import StarRating from "./Star";

export interface Article {
  articleId: string;
  imageUrl: string;
  formattedPrice: string;
  price: number;
  description: string;
  shippingDate: string;
  rating: number;
  averageRating: string;
}
const DEFAULT_IMAGE_URL = require("../static/images/noImage.png");

const Image = (props: { className: string; url: string }) => {
  const [errored, setErrored] = useState(false);

  return (
    <div className={styles.imageContainer}>
      {errored ? (
        <img {...props} alt="test" src={DEFAULT_IMAGE_URL} />
      ) : (
        <img
          {...props}
          alt="test"
          src={props.url}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
};

const Card = (article: Article) => {
  const {
    articleId,
    formattedPrice,
    imageUrl,
    description,
    shippingDate = "",
    rating,
    averageRating,
  } = article;

  return (
    <div className={styles.card} key={articleId}>
      <Image className={styles.image} url={imageUrl || ""} />
      <Section>
        <div className={styles.priceContainer}>
          <div className={styles.price}>{formattedPrice}</div>
          <div className={styles.basketIcon}>
            <Add />
          </div>
        </div>
      </Section>
      <Section>
        <div className={styles.description}>{description}</div>
      </Section>
      <Section>
        <StarRating rating={rating} averageRating={averageRating} />
      </Section>

      <Section>
        <Fire />
        <span className={styles.sold}> 13 sold today</span>
      </Section>
      <Section>
        <Shipping />
        <span className={styles.date}>
          {new Date(shippingDate).toDateString()}
        </span>
      </Section>
    </div>
  );
};

export default Card;
