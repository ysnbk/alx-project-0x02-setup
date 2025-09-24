import Link from 'next/link'; 
 const Header:React.FC = () => {
  return (
   <div className="relative flex  items-center justify-center m-3 p-5">
   <Link href="/home">Home</Link>
   <Link href="/about">About</Link>
   </div>
  );
}
export default Header