import React from "react";
import styles from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import { IBlog } from "../database/blogSchema";

export default function BlogPreview(props: IBlog) {
  return (
    <Link className={styles.individualBlogPost} href={`/blog/${props.slug}`}>
      <h3 className={styles.blogPostTitle}>{props.title}</h3>
      <Image
        src={props.image}
        className={styles.blogPostImagePreview}
        alt={props.imagealt}
        width="500"
        height="500"
      />
      <p className={styles.blogPostDescription}>{props.description}</p>
      <p className={styles.blogPostDate}>{props.date}</p>
    </Link>
  );
}
