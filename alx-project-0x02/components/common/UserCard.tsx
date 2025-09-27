import { type UserProps } from "@/interfaces"
const UserCard: React.FC<UserProps> = ({name,email,address}) =>{
  return (
   <div>
    <h1>{name}</h1>
    <h4>{email}</h4>
    <h4>{address}</h4>
   </div>
  );
}
export default UserCard