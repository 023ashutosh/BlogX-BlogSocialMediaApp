import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.toLocaleString('en-us', { month: 'short' });
  const year = date.getFullYear().toString().slice(-2);
  return `${day}${month}'${year}`;
}


const PostCard = ({ post }) => {

  console.log(post.createdAt?.toString())
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>)}
        <span className={styles.date}>{formatDate(post.createdAt)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
