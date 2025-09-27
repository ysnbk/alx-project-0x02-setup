import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
   <div>
    <Header/>
    {
            users?.map(({ name, email, address}: UserProps, key: number) => (
              <UserCard name={name} email={email} address={address} key={key} />
            ))
          }

  </div>
   
  );
  export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}
}
export default Users