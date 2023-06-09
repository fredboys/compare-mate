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

import NoResults from '../../assets/no-results.png';
import Asset from "../../components/Asset";
import ChoiceDropdown from "../../components/ChoiceDropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import TrendingProducts from "../profiles/TrendingProducts";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";

function ProductsPage({message, filter = "" }) {
  const [product, setProduct] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const {pathname} = useLocation();
  const currentUser = useCurrentUser();
  useRedirect('loggedOut');

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await axiosReq.get(`/products/?${filter}search=${query}&category_type=${category}`);
        setProduct(data);
        setHasLoaded(true);
      } catch(err) {}
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchProducts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, category, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <TrendingProducts mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Row>
            <Col sm={6}>
            <Form.Control
              value={query} 
              onChange={(event) => setQuery(event.target.value)}
              type="text" 
              placeholder="Search for a product" />
            </Col>
            <Col sm={6} className={styles.Category} >
              <Form.Control
                as="select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">Filter By All</option>
                <ChoiceDropdown />
              </Form.Control>
            </Col>
          </Form.Row>
        </Form>

        {hasLoaded ? (
          <>
            {product.results.length ? (
              <InfiniteScroll
                children={product.results.map(product => (
                    <Product key={product.id} {...product} setProduct={setProduct} />
                  ))
                }
                dataLength={product.results.length}
                loader={<Asset spinner />}
                hasMore={!!product.next}
                next={() => fetchMoreData(product, setProduct)}
              />
        
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
        <TrendingProducts />
      </Col>
    </Row>
  );
}

export default ProductsPage;