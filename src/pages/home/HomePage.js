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
                <p>With Compare Mate</p>

                <div className={styles.Link}>
                    <p className={styles.Paragraph}>Take a look at the feed and get started</p>
                    <Link className={styles.Button} to="/feed">
                    Feed 
                    </Link>
                </div>
            </div>            
        </>
    )

    const loggedOutHomePage = (
        <>
            <div className={styles.Content}>
                <h1>WELCOME TO COMPARE MATE</h1>
                <p>Here you can find the best deals on products</p>

                <div className={styles.Link}>
                    <p className={styles.Paragraph}>Sign up to get started or sign in to get saving</p>
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
        {currentUser ? loggedInHomePage : loggedOutHomePage}
        </>
    )
}

export default HomePage