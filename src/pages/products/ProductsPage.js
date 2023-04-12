import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/ProductsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Product from "./Product";

import NoResults from '../../assets/no-results.png'
import Asset from "../../components/Asset";

function ProductsPage({message, filter = "" }) {
  const [product, setProduct] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const {pathname} = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await axiosReq.get(`/products/?${filter}search=${query}`)
        setProduct(data)
        setHasLoaded(true)
      } catch(err) {
        console.log(err)
      }
    }

    setHasLoaded(false)
    const timer = setTimeout(() => {
      fetchProducts();
    }, 1000)
    return () => {
      clearTimeout(timer);
    }
  }, [filter, query, pathname])

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Upvote trend products mobile</p>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query} 
            onChange={(event) => setQuery(event.target.value)}
            type="text" 
            className="mr-sm-2"
            placeholder="Search for a product" />
        </Form>

        {hasLoaded ? (
          <>
            {product.results.length ? (
              product.results.map(product => (
                <Product key={product.id} {...product} setProduct={setProduct} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>

        ): (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Upvote trend products for desktop</p>
      </Col>
    </Row>
  );
}

export default ProductsPage;