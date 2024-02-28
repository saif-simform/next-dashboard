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
                    <label>Username</label>
                    <input type="text" name="username" placeholder="username" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="phone" />
                    <label>Address</label>
                    <textarea name="address" id="address" placeholder='Description'></textarea>
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value="false" selected>Is Admin</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value="true" selected>Yes</option>
                        <option value="false" >No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default View