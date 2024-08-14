import { useSelector } from "react-redux";
import { selectAllPost } from "./PostSlice"; 
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButoon";
const PostList = () => {
    const posts = useSelector(selectAllPost);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content ? post.content.substring(0, 100) : ''}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp ={post.date}/>
                <ReactionButtons post={post}/>
            </p>
        </article>
    ));

    return (
        <div>
            <section>
                <h2>Posts</h2>
                {renderedPosts}
            </section>
        </div>
    );
}

export default PostList;
