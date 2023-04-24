import React from 'react'
import { useCurrentUser} from '../../contexts/CurrentUserContext';
import styles from '../../styles/HomePage.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Carousel } from 'react-responsive-carousel';
import upload from '../../assets/upload.png'
import { useProductData } from '../../contexts/ProductDataContext';


const HomePage = () => {
    const currentUser = useCurrentUser();
    const {popularProducts} = useProductData()

    const loggedInHomePage = (
        <>
            <div className={styles.Content}>
                <h1>TIME TO START SAVING</h1>
                <h3>With Compare Mate</h3>
                    <div className={styles.Link}>
                        <Link className={styles.Button} to="/feed">
                        Feed 
                        </Link>
                        <Link className={styles.Button} to="/contact/create">
                        Contact 
                        </Link>
                    </div>
                    <Carousel>
                        <img src={upload} />
                    </Carousel>
                </div>     
        </>
    )

    const loggedOutHomePage = (
        <>
            <div className={styles.Content}>
                <h1>WELCOME TO COMPARE MATE</h1>
                <h3>Here you can find the best deals on products</h3>
                <i className="fa-regular fa-credit-card"></i>
                <i className="fa-solid fa-coins"></i>
                <i className="fa-solid fa-sack-dollar"></i>
                <div className={styles.Link}>
                    <Link className={styles.Button} to="/signup">
                    Sign Up 
                    </Link>
                    <Link className={styles.Button} to="/signin">
                    Sign In 
                    </Link>
                </div>
                </div>
        </>
    )

    return (
        <>
        <div>
        {currentUser ? loggedInHomePage : loggedOutHomePage}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px'}}>
                <Carousel autoPlay={true} interval={1000} infiniteLoop={true}>
                {popularProducts.results.slice(0,3).map(product => (
                        <img  style={{maxHeight: '150px', objectFit: 'contain'}} src={product.image} key={product.id} />
                    ))}
                    {/* <img style={{maxHeight: '150px'}} src={upload} />
                    <img style={{maxHeight: '150px'}} src={upload} />
                    <img style={{maxHeight: '150px'}} src={upload} /> */}
                </Carousel>
            </div>   
        </div>

        </>
    )
}

<script>
    
</script>

export default HomePage