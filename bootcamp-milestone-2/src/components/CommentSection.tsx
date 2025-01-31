"use client";
import React, { useState } from "react";
import styles from "./CommentSection.module.css";
import SingleComment from "./SingleComment";
import SubmitCommentForm from "./SubmitCommentForm";
import { IComment } from "../database/blogSchema";

interface CommentSectionProps {
  blog: { comments: IComment[] };
  slug: string;
  api_url: string;
}

export default function CommentSection({
  blog,
  slug,
  api_url,
}: CommentSectionProps) {
  const [commentList, setCommentList] = useState(blog.comments);

  const addComment = (newComment: IComment) => {
    setCommentList((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.commentsHeader}>
        <h2>Comments</h2>
      </div>
      <div className={styles.commentsList}>
        <div className="scrollContainer">
          {commentList.map((comment: IComment, index) => (
            <SingleComment key={index} comment={comment} />
          ))}
        </div>
      </div>
      <SubmitCommentForm
        api_url={api_url}
        slug={slug}
        onCommentSubmit={addComment}
      />
    </div>
  );
}
