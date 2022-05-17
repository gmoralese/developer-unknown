import { PostType } from "src/types/posts.type";
import PostBoxContainer from "./post-box-container";

type PostListProps = {
  posts: PostType[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold mb-4">Escritos recientemente:</h2>
      {posts.map((post: any, index: number) => {
        return (
          <PostBoxContainer key={index} url={`/post/${post.slug}`}>
            <div className="cursor-pointer transition-all hover:scale-110">
              <h2 className="text-4xl font-bold">{post.title}</h2>
              <br />
              <p className="text-lg">{post.description}</p>
              <p className="text-xs">{post.date}</p>
            </div>
          </PostBoxContainer>
        );
      })}
    </div>
  );
}
