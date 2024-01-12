// "use client"
import Image from "next/image";
import styles from "./singlePost.module.css";
import { getPost } from "@/lib/data";
import { Suspense } from "react";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  console.log(post);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt=""
            fill
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {/* Title */}
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

          {/* <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>  */}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              01.01.2024
              {/* {post.createdAt} */}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
