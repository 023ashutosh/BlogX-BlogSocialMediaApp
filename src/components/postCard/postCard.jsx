import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";



const currentDate = new Date();
const formattedDate = `${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, "0")}.${currentDate
  .getDate()
  .toString()
  .padStart(2, "0")}.${currentDate.getFullYear()}`;

const PostCard = ({ post }) => {
 

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* { */}
        {/* // post.img &&  */}
        <div className={styles.imgContainer}>
          <Image
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            // {post.img}
            alt=""
            fill
            className={styles.img}
          />
        </div>
        {/* } */}
        <span className={styles.date}>
          {formattedDate}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title.slice(0, 30)}</h1>
        <p className={styles.desc}>{post.body.slice(0, 100)}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE 
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
