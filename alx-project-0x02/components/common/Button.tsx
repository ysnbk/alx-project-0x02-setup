import { type ButtonProps } from "@/interfaces"
 const Card: React.FC<ButtonProps> = ({size ,shape}) =>{
  return (
   <button className={[size,shape]}>
   
   </button>
  );
}
export default Card