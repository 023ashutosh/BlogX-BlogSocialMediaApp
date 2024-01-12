// "use client"

import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH WITH API
// const getData = async () => {
//     const blogUrl = "https://jsonplaceholder.typicode.com/posts";
//     const res = await fetch(blogUrl, {next:{revalidate:3600}});

//     if (!res.ok) {
//         throw new error("Something went wrong.");
//       }

//       return res.json();
//     };

// FETCH WITHOUT API

const BlogPage = async () => {
  // const posts = await getData();
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
