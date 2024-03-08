import { headers } from "next/headers"
import { ReactNode } from "react"
import styles from '../components/dashboard/dashboard.module.css'

const DashboardLayout = ({ children, users, notifications, revenue, sidebar, navbar, header }: { children: ReactNode, users: ReactNode, notifications: ReactNode, revenue: ReactNode, sidebar: ReactNode, navbar: ReactNode, header: ReactNode }) => {
    return (
        // <div>
        //     <div>{users}</div>
        //     <div>{notifications}</div>
        //     <div>{revenue}</div>
        //     <div>{sidebar}</div>
        //     <div>{navbar}</div>
        //     <div>{header}</div>
        //     <div>{children}</div>
        // </div>
        <div className={styles.container}>
            <div className={styles.menu}>
                {sidebar}
            </div>
            <div className={styles.content}>
                {navbar}
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout