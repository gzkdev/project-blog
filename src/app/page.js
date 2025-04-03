import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import { BLOG_TITLE } from "@/constants";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

async function Home() {
  const posts = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {posts.map(({ slug, ...props }) => (
        <BlogSummaryCard key={slug} slug={slug} {...props} />
      ))}
    </div>
  );
}

export default Home;
