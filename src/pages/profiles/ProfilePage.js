import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import { Image } from "react-bootstrap";
import TrendingProducts from "./TrendingProducts";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useProductData, useSetProductData } from "../../contexts/ProductDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Product from "../products/Product";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import { useRedirect } from "../../hooks/useRedirect";


function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  useRedirect('loggedOut');

  const {id} = useParams(); 

  const setProductData = useSetProductData();
  const {pageProfile} = useProductData();

  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
    try {
      const [{ data: pageProfile }, { data: profilePosts }] =
        await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/products/?owner__profile=${id}`),
        ]);
      setProductData(prevState => ({
        ...prevState,
        pageProfile: {results: [pageProfile]}
      }));
      setProfilePosts(profilePosts);
      setHasLoaded(true);
    } catch(err){
      // console.log(err)
    }
  };
    fetchData();
  }, [id, setProductData]);
  
  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
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
              <div>{profile?.total_favourite_count}</div>
              <div>Favourites</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center"><strong>{profile?.owner}'s posts</strong></p>
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((product) => (
            <Product key={product.id} {...product} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
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