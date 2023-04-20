import React from 'react'
import { useCurrentUser} from '../../contexts/CurrentUserContext';
import styles from '../../styles/HomePage.module.css'

const HomePage = () => {
    const currentUser = useCurrentUser();

    const loggedInHomePage = (
        <>
            <div className={styles.Content}>
                <h1>TIME TO START SAVING</h1>
                <p>With Compare Mate</p>

                <div className={styles.Link}>
                    <p>Take a look at the feed and get started</p>
                    <button className={styles.Button}>
                    Feed 
                    </button>
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
                    <p>Sign up to get started or sign in to get saving</p>
                    <button className={styles.Button}>
                    Sign Up 
                    </button>
                    <button className={styles.Button}>
                    Sign In 
                    </button>
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