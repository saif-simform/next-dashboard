import styles from "@/app/components/dashboard/products/view/view.module.css";
import { updateProduct } from "@/app/lib/actions";
import { getProductById } from "@/app/lib/data";
import Image from "next/image";

type Props = {
  params: { id: string };
};
const View = async ({ params }: Props) => {
  const { id } = params;
  const product = await getProductById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={product.img || "/noavatar.png"} alt="profile" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
          />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label htmlFor="">Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label htmlFor="">Size</label>
          <input
            type="text"
            name="size"
            id="size"
            placeholder={product.size || "size"}
          />
          <label htmlFor="">Cat</label>
          <select name="cat" id="cat">
            <option value="toys">Toys</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={16}
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default View;
