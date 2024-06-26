import styles from "@/app/components/dashboard/products/view/view.module.css";
import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import Image from "next/image";

type Props = {
  params: { id: string };
};
const View = async ({ params }: Props) => {
  const { id } = params;

  const user = await getUserById(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={user.img || "/noavatar.png"} alt="profile" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            placeholder={user.address}
          ></textarea>
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdming}>
              Yes
            </option>
            <option value="false" selected={!user.isAdming}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default View;
