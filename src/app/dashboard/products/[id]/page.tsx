import styles from '@/app/components/dashboard/products/view/view.module.css'
import Image from 'next/image'

const View = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src='/noavatar.png' alt='profile' fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form} >
                    <label htmlFor="">Title</label>
                    <input type="text" name='title' placeholder='title' />
                    <label htmlFor="">Price</label>
                    <input type="price" name='price' placeholder='price' />
                    <label htmlFor="">Stock</label>
                    <input type="number" name='number' placeholder='12' />
                    <label htmlFor="">Color</label>
                    <input type="text" name='color' placeholder='red' />
                    <label htmlFor="">Size</label>
                    <textarea name="text" id="size" placeholder='12'></textarea>
                    <label htmlFor="">Cat</label>
                    <select name="cat" id="cat">
                        <option value="general">Choose a Category</option>
                        <option value="toys">Toys</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                    </select>
                    <label htmlFor="">Description</label>
                    <textarea name="desc" id="desc" rows={16} placeholder='Description'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default View