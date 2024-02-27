import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transaction</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="image" width={40} height={40} className={styles.userImage} />
                                John Doe
                            </div>

                        </td>

                        <td >
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>27.02.2024</td>
                        <td>$3.5</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="image" width={40} height={40} className={styles.userImage} />
                                Sam Johnson
                            </div>

                        </td>
                        <td >
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>17.02.2024</td>
                        <td>$4.5</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="image" width={40} height={40} className={styles.userImage} />
                                 Danny
                            </div>

                        </td>
                        <td >
                            <span className={`${styles.status} ${styles.done}`}>
                                Done
                            </span>
                        </td>
                        <td>20.02.2024</td>
                        <td>$2.25</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions