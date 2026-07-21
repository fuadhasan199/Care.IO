import About from "./components/About";
import Banar from "./components/Banar";
import Service from "./components/Service";
import Success from "./components/Success";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 flex flex-col flex-1 items-center justify-center bg-base-200 font-sans">
      <main className="flex flex-1 w-full  flex-col items-center justify-between  bg-base-100 sm:items-start"> 

       
      <Banar></Banar>
      <About></About>
      <Service></Service>
      <Success></Success>






      </main> 
    </div>
  );
}