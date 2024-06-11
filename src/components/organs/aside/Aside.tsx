import Contact from "../../atoms/contact/contact";
import Header from "./HeaderAside";
import Nav from "./NavAside"
import { useActiveContex } from "../../../contex/contex";

const Aside = ()=> {
    const active = useActiveContex();


    return(
        <>
          {active.active && 
            (<div className="flex-[3] shadow-md shadow-zinc-900 rounded-2xl  bg-[#1f1a2e] max-w-[280px] max-[960px]:hidden ">
            <Header/>
            <Nav /> 
            <div onClick={()=>{active.activeOne ? active.setActiveOne(false) : active.setActiveOne(true)
            active.active ?active.setActive(true) : active.setActive(true) }}>
                            <Contact  title="majid saadati" date={"11:32"} description="سلام خوبی" />

            </div>  
            </div>)
            }
        </>
    )
}

export default Aside;