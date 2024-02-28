import Pagination from '@/app/components/dashboard/pagination/pagination'
import Search from '@/app/components/dashboard/search/search'
import styles from '@/app/components/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

const User = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search for a user' />
                <Link href='/dashboard/users/add'>
                    <button className={styles.addButton} >Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src='/noavatar.png' alt="userImage" width={40} height={40} className={styles.userImage} />
                                John Doe
                            </div>
                        </td>
                        <td>john@ymail.com</td>
                        <td>28.02.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href='/dashboard/users/1'>
                                    <button className={`${styles.button} ${styles.view}`} >View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`} >Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default User