import styles from "@/app/components/login/login.module.css";
import { authenticate } from "@/app/lib/actions";
import { signIn } from "../auth";
import LoginForm from "../components/login/loginForm/loginForm";

const Login = async () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
