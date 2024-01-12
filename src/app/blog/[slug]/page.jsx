import Image from "next/image";
import styles from "./singlePost.module.css";
import { getPost } from "@/lib/data";
import { Suspense } from "react";

// const getData = async (slug) => {
//   const blogUrl = `https://jsonplaceholder.typicode.com/posts/${slug}`;
//   const res = await fetch(blogUrl);

//   if (!res.ok) {
//     throw new error("Something went wrong.");
//   }

//   return res.json();
// };

const currentDate = new Date();
const formattedDate = `${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, "0")}.${currentDate
  .getDate()
  .toString()
  .padStart(2, "0")}.${currentDate.getFullYear()}`;

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img}
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {post.title}
        </h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt=""
            alt=""
            height={50}
            width={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {formattedDate}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
