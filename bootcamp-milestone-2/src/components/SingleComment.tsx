import styles from "./SingleComment.module.css";
import { IComment } from "../database/blogSchema";

{
  /* When we pass props, the name that we use to pass values
		is the key for the type
*/
}
type CommentProps = {
  comment: IComment;
};

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(time: Date) {
  const dateObject = new Date(time);

  // Check if the dateObject is valid before using it
  if (isNaN(dateObject.getTime())) {
    return <div>Error: Invalid date</div>;
  }

  return new Date(dateObject).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function SingleComment({ comment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.commentTopBar}>
        <h4 className={styles.commentName}>{comment.user}</h4>
        <span className={styles.commentTime}>
          {parseCommentTime(comment.time)}
        </span>
      </div>
      <p className={styles.commentContent}>{comment.comment}</p>
    </div>
  );
}
