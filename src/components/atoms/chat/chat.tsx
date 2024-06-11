
import {ChatSender, ChatGeter ,SendMessage} from "../../index"


const Chat = () =>{


    return (
        <div className="flex flex-col p-3 pt-4 overflow-y-scroll scroll-smooth	 w-ful h-[73vh] flex-[10] gap-4">
            
            {/* گیرنده چت */}
            
                <ChatSender/>
                <ChatSender/>
                <ChatSender/>
                <ChatSender/>
                <ChatSender/>
                <ChatSender/>
                <ChatSender/>
            
            {/* فرستنده چت */}
            <div className="self-end">
            <ChatGeter />
            </div>
           
        </div>
    )
}


export default Chat;