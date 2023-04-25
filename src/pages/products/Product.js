import React from 'react';
import styles from '../../styles/Product.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from '../../components/MoreDropdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Product = (props) => {
    const {
        id,
        owner,
        profile_image,
        comments_count,
        favourite_count,
        favourite_id,
        votes_count,
        votes_id,
        name,
        description,
        link,
        location,
        price,
        image,
        category_type,
        updated_at,
        productPage,
        setProduct,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
      history.push(`/products/${id}/edit`);
    };

    const handleDelete = async () => {
      try {
        await axiosRes.delete(`/products/${id}/`);
        history.goBack();
      } catch (err) {
        // console.log(err);
      }
    };

    const handleFavourite = async () => {
        try {
          const { data } = await axiosRes.post('/favourite/', { product: id });
          setProduct((prevProduct) => ({
            ...prevProduct,
            results: prevProduct.results.map((product) => {
              return product.id === id ? { ...product, favourite_count: product.favourite_count + 1, favourite_id: data.id }
                : product;
            }),
          }));
        } catch (err) {
          // console.log(err);
        }
      };

      const handleUnFavourite = async () => {
        try {
          await axiosRes.delete(`/favourite/${favourite_id}`);
          setProduct((prevProduct) => ({
            ...prevProduct,
            results: prevProduct.results.map((product) => {
              return product.id === id
                ? { ...product, favourite_count: product.favourite_count - 1, favourite_id: null }
                : product;
            }),
          }));
        } catch (err) {
          // console.log(err);
        }
      };

      const handleUpvote = async () => {
        try {
          const { data } = await axiosRes.post('/votes/', { product: id });
          setProduct((prevProduct) => ({
            ...prevProduct,
            results: prevProduct.results.map((product) => {
              return product.id === id ? { ...product, votes_count: product.votes_count + 1, votes_id: data.id }
                : product;
            }),
          }));
        } catch (err) {
          // console.log(err);
        }
      };

      const handleDownVote = async () => {
        try {
          await axiosRes.delete(`/votes/${votes_id}`);
          setProduct((prevProduct) => ({
            ...prevProduct,
            results: prevProduct.results.map((product) => {
              return product.id === id ? { ...product, votes_count: product.votes_count - 1, votes_id: null }
                : product;
            }),
          }));
        } catch (err) {
          // console.log(err);
        }
      };

    return (
        <Card className={styles.Product}>
            <Card.Body>
                <Media className='align-items-center justify-content-between'>
                    <div>
                        <Avatar src={profile_image} height={45}/>
                        {owner}
                    </div>
                    <div className='d-flex align-items-center'>
                        <span>{updated_at}</span>
                        {is_owner && productPage && <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/products/${id}`}>
                <Card.Img src={image} alt={name} />
            </Link>
            <Card.Body>
                {name && <Card.Title className='text-center'>{name}</Card.Title>}
                {description && <Card.Text>Description : {description}</Card.Text>}
                {link && <Card.Text>Link : {link}</Card.Text>}
                {location && <Card.Text>Location : {location}</Card.Text>}
                {price && <Card.Text>Price : £{price}</Card.Text>}
                {category_type && <Card.Text>Category : {category_type}</Card.Text>}
                <div className={styles.ProductBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't favourite your own product!</Tooltip>}
                            >
                            <i className="fa-regular fa-bookmark" />
                        </OverlayTrigger>
                        ) : favourite_id ? (
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Unfavourite</Tooltip>}
                            >
                            <span onClick={handleUnFavourite}>
                                <i className={`fa-solid fa-bookmark ${styles.Save}`} />
                            </span>
                          </OverlayTrigger>
                        ) : currentUser ? (
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Favourite</Tooltip>}
                            >
                            <span onClick={handleFavourite}>
                                <i className={`fa-regular fa-bookmark ${styles.SaveOutline}`} />
                            </span>
                          </OverlayTrigger>
                        ) : (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Log in to favourite products!</Tooltip>}
                            >
                                <i className="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        )}
                        {favourite_count}

                        <Link to={`/products/${id}`}>
                            <i className="far fa-comments" />
                        </Link>
                        {comments_count}

                    {is_owner ? (
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>You can't Up Vote your own product!</Tooltip>}
                        >
                        <i className="fa-regular fa-circle-up" />
                    </OverlayTrigger>
                    ) : votes_id ? (
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Down Vote</Tooltip>}
                        >
                        <span onClick={handleDownVote}>
                            <i className={`fa-solid fa-circle-up ${styles.Save}`} />
                        </span>
                      </OverlayTrigger>
                    ) : currentUser ? (
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Up Vote</Tooltip>}
                        >
                        <span onClick={handleUpvote}>
                            <i className={`fa-regular fa-circle-up ${styles.SaveOutline}`} />
                        </span>
                      </OverlayTrigger>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to UpVote products!</Tooltip>}
                        >
                            <i className="fa-regular fa-circle-up" />
                        </OverlayTrigger>
                    )}
                    {votes_count}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product