import React from 'react'
import { useCurrentUser} from '../../contexts/CurrentUserContext';
import styles from '../../styles/HomePage.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const HomePage = () => {
    const currentUser = useCurrentUser();

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
        </div>

        </>
    )
}

<script>
    
</script>

export default HomePage