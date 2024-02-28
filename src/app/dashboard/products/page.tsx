import Pagination from "@/app/components/dashboard/pagination/pagination"
import Search from "@/app/components/dashboard/search/search"
import styles from "@/app/components/dashboard/products/products.module.css"
import Image from "next/image"
import Link from "next/link"

const Product = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search for a product' />
                <Link href='/dashboard/products/add'>
                    <button className={styles.addButton} >Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src='/noproduct.jpg' alt="productImage" width={40} height={40} className={styles.productImage} />
                                Mobile
                            </div>
                        </td>
                        <td>Android</td>
                        <td>$320</td>
                        <td>28.02.2024</td>
                        <td>25</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href='/dashboard/products/1'>
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

export default Product