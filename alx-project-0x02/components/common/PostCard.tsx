import { type PostProps } from "@/interfaces"
const PostCard: React.FC<PostProps> = ({userId, title, content}) =>{
  return (
   <div>
   <h1>{title}</h1>
   <h4>author Id : {userId}</h4>
   <p>{content}</p>
   
   </div>
  );
}
export default PostCard