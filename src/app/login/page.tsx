import styles from '@/app/components/login/login.module.css'

const Login = () => {
    return (
        <div className={styles.container} >
            <form action="" className={styles.form} >
                <h2>Login</h2>
                <input type="email" name='email' placeholder='email' />
                <input type="password" name='password' placeholder='password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login