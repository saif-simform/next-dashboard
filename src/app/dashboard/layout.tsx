import Navbar from "../components/dashboard/navbar/navbar"
import Sidebar from "../components/dashboard/sidebar/sidebar"
import styles from "../components/dashboard/dashboard.module.css"

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout