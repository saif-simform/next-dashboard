import Card from "../components/dashboard/card/card";
import styles from "../components/dashboard/dashboard.module.css";
import Chart from "../components/dashboard/chart/chart";
import Rightbar from "../components/dashboard/rightbar/rightbar";
import Transactions from "../components/dashboard/transaction/transactions";
import dynamic from "next/dynamic";

const DynamicRighBar = dynamic(
  () => import("../components/dashboard/rightbar/rightbar")
);

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <DynamicRighBar />
      </div>
    </div>
  );
};

export default Dashboard;
