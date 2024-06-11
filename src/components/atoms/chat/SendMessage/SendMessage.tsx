import { ReactComponent as IconVoice } from "../../../../assets/icons/ico-voice.svg";
import { ReactComponent as IconPin } from "../../../../assets/icons/ico-pin.svg";
import { ReactComponent as IconZoom } from "../../../../assets/icons/ico-zoom.svg";
import { ReactComponent as IconEmoji } from "../../../../assets/icons/ico-emoji.svg";



const SendMessage = () =>{
    return(
        <>
        <div className="bg-[#1f1a2e] w-full shadow-md shadow-zinc-900 h-full gap-6 p-3 rounded-3xl flex-[10] flex items-center  text-white  ">
            <IconEmoji className=" size-8"/>
            <input type="text" className="flex-[8] rounded-md bg-transparent outline-none h-full " placeholder="پیام خود را وارد کنید"/>
            <IconZoom className="size-10"/>
            <IconPin className="size-8 rotate-45"/>
            <IconVoice className="size-8"/>
        </div>
        </>
    )

}

export default SendMessage;