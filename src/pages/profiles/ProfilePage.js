import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Image } from "react-bootstrap";
import TrendingProducts from "./TrendingProducts";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useProductData, useSetProductData } from "../../contexts/ProductDataContext";


function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams(); 
  const setProductData = useSetProductData();
  const {pageProfile} = useProductData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
    try {
      const [{data: pageProfile}] = await Promise.all([
        axiosReq.get(`/profiles/${id}/`)
      ])
      setProductData(prevState => ({
        ...prevState,
        pageProfile: {results: [pageProfile]}
      }))
      setHasLoaded(true);
    } catch(err){
      console.log(err)
    }
  }
    fetchData()
  }, [id, setProductData])

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image className={styles.ProfileImage}
          roundedCircle src={profile?.image} />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.products_count}</div>
              <div>Posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.total_votes_count}</div>
              <div>Votes</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.products_count}</div>
              <div>Favourites</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
            <TrendingProducts />
      </Col>
    </Row>
  );
}

export default ProfilePage;