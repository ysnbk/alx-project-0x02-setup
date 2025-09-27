import Header from "@/components/layout/Header";
import Button from"@/components/common/Button"
const About: React.FC = () => {
  return (
   <div>
    <Header/>
   <h1>About page</h1>
  <Button className="small rounded-md"/>
  <Button className="meduim rounded-full"/>
  <Button className="large rounded-sm"/>
   </div>
  );
}
export default About
