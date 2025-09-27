import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

export default function Post() {
  return (
   <div>
    <Header/>
   <h1>Posts page</h1>
   {
            posts?.map(({ title, body, userId}: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} key={key} />
            ))
          }
   </div>
  );
  export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
}
