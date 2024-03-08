import { signIn } from "@/app/auth";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
      className={styles.form}
    >
      <h2>Login</h2>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button>Login</button>
      {/* {error && error} */}
    </form>
  );
};

export default LoginForm;
