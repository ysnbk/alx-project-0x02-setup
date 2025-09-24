import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
   <div>
    <Header/>
   <Card title="card1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, optio."/>
   <Card title="card2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, optio."/>
   <Card title="card3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, optio."/>
   </div>
   
  );
}
export default Home