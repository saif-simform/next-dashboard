import Pagination from "@/app/components/dashboard/pagination/pagination"
import Search from "@/app/components/dashboard/search/search"
import styles from "@/app/components/dashboard/products/products.module.css"
import { getProducts } from '@/app/lib/data'
import Image from "next/image"
import Link from "next/link"

type Props = {
    searchParams: { query: string | undefined, page: string | undefined }
}
const Product = async ({ searchParams }: Props) => {
    const query = searchParams?.query || ""
    const page = searchParams?.page || "1"

    const { products, count } = await getProducts(query, page)

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
                    {(await products).map(product => (
                        <tr key={product.id}>
                            <td>
                                <div className={styles.product}>
                                    <Image src={product.img || '/noproduct.jpg'} alt="productImage" width={40} height={40} className={styles.productImage} />
                                    {product.title}
                                </div>
                            </td>
                            <td>{product.desc}</td>
                            <td>{product.price}</td>
                            <td>{product.createdAt}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href='/dashboard/products/1'>
                                        <button className={`${styles.button} ${styles.view}`} >View</button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`} >Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default Product