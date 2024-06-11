import { Aside, Main } from "../index";
import { useActiveContex } from "../../contex/contex";

function Layout() {
  const active = useActiveContex();

  return (
    <div className=" h-[100vh] w-[1100px] flex p-2 gap-2">
      {active.active && <Aside />}
      
      {!active.active || active.activeOne && <Main />}
    </div>
  );
}

export default Layout;
