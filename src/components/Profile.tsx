import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/22802518?s=460&v=4" alt="Profile"/>
            <div>
               <strong>Geraldo Luiz</strong>
               <p>
                   <img src="icons/level.svg" alt="Level"/>
                   Level 1
                </p>
            </div>
        </div>
    )
}