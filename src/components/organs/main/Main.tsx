import MainHeader from "../../atoms/contactHeaderProfile/MainHeader"
import Chat from "../../atoms/chat/chat"
import {SendMessage} from "../../index"
import { useContext, useState, createContext } from "react";

export const Search = createContext<any>(null);


function Main (){
    const [searchbox, setSearchBox] = useState(true);

    return(
        <div className="flex-[10] bg-transparent gap-2 flex flex-col">
            <div className=" flex-[1]  ">
            <Search.Provider value={[searchbox, setSearchBox]}>
            <MainHeader title="majid saadati" description="online"/>
            </Search.Provider>

            </div>
            <div className="flex-[8] bg-transparent">
            <Chat/>
            </div>
            <div className="flex-[1]">
            <SendMessage/>
            </div>
        </div>
    )
}

export default Main;




