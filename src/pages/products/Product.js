import React from 'react'
import styles from '../../styles/Product.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Product = (props) => {
    const {
        id,
        owner,
        profile_id,
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
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

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
                        {is_owner && productPage && "..."}
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
                            overlay={<Tooltip>You can't save your own product!</Tooltip>}
                            >
                            <i className="fa-regular fa-floppy-disk" />
                        </OverlayTrigger>
                        ) : favourite_id ? (
                            <span onClick={() => {}}>
                                <i className={`fa-regular fa-floppy-disk ${styles.Save}`} />
                            </span>
                        ) : currentUser ? (
                            <span onClick={() => {}}>
                                <i className={`fa-regular fa-floppy-disk ${styles.SaveOutline}`} />
                            </span>
                        ) : (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Log in to save products!</Tooltip>}
                            >
                                <i className="fa-regular fa-floppy-disk" />
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
                        overlay={<Tooltip>You can't UpVote your own product!</Tooltip>}
                        >
                        <i className="fa-solid fa-up-long" />
                    </OverlayTrigger>
                    ) : votes_id ? (
                        <span onClick={() => {}}>
                            <i className={`fa-solid fa-up-long ${styles.Save}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => {}}>
                            <i className={`fa-solid fa-up-long ${styles.SaveOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to UpVote products!</Tooltip>}
                        >
                            <i className="fa-solid fa-up-long" />
                        </OverlayTrigger>
                    )}
                    {votes_count}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product