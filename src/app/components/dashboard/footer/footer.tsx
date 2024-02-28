import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Saif Pathan</div>
            <div className={styles.text}>@ Alright Reserved</div>
        </div>
    )
}

export default Footer