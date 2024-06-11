import {ReactComponent as IconTick} from "../../../../assets/icons/ico-tick.svg"

const ChatSender = () =>{
return(
    <>
    <div className=" flex flex-col justify-between text-right min-w-60 max-w-96 rounded-2xl rounded-br-none p-3 bg-[#605ef5] text-white gap-3 whitespace-pre">
  <p className="text-wrap whitespace-pre">سلام خوبی  جطوری چیکار میکنی منم خئبم من فردا باید د</p>
  <footer className="flex text-gray-400  items-center gap-3">
    <span><IconTick/></span>
    <span>14:50</span>
  </footer>
</div>
    </>
)
}

export default ChatSender;