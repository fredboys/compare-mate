import React from 'react'
import styles from "../../styles/Trending.module.css"
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const TrendingProduct = (props) => {
  const {product, mobile, imageSize=125} = props;
  const {image, name, id, price} = product;
  
  return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
      <div>
        <Link className="align-self-center" to={`/products/${id}`}>
          <Image src={image} height={imageSize} width={110} />
        </Link>
      </div>
        <div className={`mx-2 ${styles.WordBreak}`}>
          <strong>{name}</strong>
          <br />
          <strong>£{price}</strong>
        </div>
    </div>
  )
}

export default TrendingProduct