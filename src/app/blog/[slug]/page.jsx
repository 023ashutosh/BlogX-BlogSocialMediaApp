import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt=""
            fill
          />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt=""
            height={50}
            width={50}
            />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              Terry Jefferson
            </ span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              01.01.2024
              {/* {post.createdAt.toString().slice(4, 16)} */}
            </span>
          </div>
        </div>
        {/* <div className={styles.content}>{post.desc}</div> */}
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptas quas sunt voluptatem deserunt rem cumque doloremque ipsa,
          nesciunt a aperiam ipsum quasi. Asperiores blanditiis dicta architecto
          beatae tenetur sit!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
