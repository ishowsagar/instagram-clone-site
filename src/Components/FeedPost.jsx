import { usePostContext } from "./Feed";

export default function FeedPost() {
  const postData = usePostContext();

  return (
    <div className="feedpost_container-layout">
      {postData.map((post) => (
        <div className="feedpost" key={post.id}>
          <div className="feedpost_header">
            <img
              className="feedpost_avatar"
              src={`https://i.pravatar.cc/150?img=${post.userId}`}
              alt="avatar"
            />
            <span className="feedpost_username">user{post.userId}</span>
            <span className="feedpost_time">2h ago</span>
          </div>
          <img
            className="feedpost_image"
            src={`https://picsum.photos/seed/${post.id}/500/350`}
            alt="post"
          />
          <div className="feedpost_caption">
            <h2 className="feedpost_title">{post.title}</h2>
            <p className="feedpost_body">{post.body}</p>
          </div>
          <div className="feedpost_actions">
            <span role="img" aria-label="like">
              ❤️
            </span>
            <span role="img" aria-label="comment">
              💬
            </span>
            <span role="img" aria-label="share">
              ➡️
            </span>
          </div>
          <div className="feedpost_footer">
            <span className="feedpost_likes">
              {Math.floor(Math.random() * 200 + 50)} likes
            </span>
            <span className="feedpost_comments">
              View all {Math.floor(Math.random() * 10 + 1)} comments
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
// Posts (root)
// Each post (branch)
// userId
// id
// title
// body
