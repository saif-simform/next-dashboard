import Card from '../components/dashboard/card/card'
import styles from '../components/dashboard/dashboard.module.css'
import Chart from '../components/dashboard/chart/chart'
import Rightbar from '../components/dashboard/rightbar/rightbar'
import Transactions from '../components/dashboard/transaction/transactions'


const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards} >
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>

        </div>
    )
}

export default Dashboard