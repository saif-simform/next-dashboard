import { getUsers } from '@/app/lib/data'
import Pagination from '@/app/components/dashboard/pagination/pagination'
import Search from '@/app/components/dashboard/search/search'
import styles from '@/app/components/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

type Props = { searchParams: { query: string | undefined, page: string | undefined } };

const User = async ({ searchParams }: Props) => {
    const query = searchParams?.query || ""
    const page = searchParams?.page || "1"

    const { users, count } = await getUsers(query, page)

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
                    {(await users).map(user => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image src={user.img || '/noavatar.png'} alt="userImage" width={40} height={40} className={styles.userImage} />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                            <td>{user.isActive ? 'Active' : 'Passive'}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.button} ${styles.view}`} >View</button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`} >Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))

                    }

                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default User