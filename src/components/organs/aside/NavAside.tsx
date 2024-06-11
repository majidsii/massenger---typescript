import { ReactComponent  as IconSetting } from "../../../assets/icons/ico-setting.svg"

function Nav(){
    return(
        <>
        <div className="z-0 flex justify-betwee gap-2  items-center text-white text-sm">
            <div className="bg-purple-950 p-2 w-8 justify-center flex rounded-2xl "><IconSetting className="size-5"/></div>
            <div className="bg-purple-950 p-2 w-11 justify-center flex rounded-2xl ">همه</div>
            <div className="bg-purple-950 p-2 w-11 justify-center flex rounded-2xl ">گفتگو</div>
            <div className="bg-purple-950 p-2 w-16 justify-center flex rounded-2xl ">گروه ها</div>
            <div className="bg-purple-950 p-2 w-16 justify-center flex rounded-2xl ">کانال ها</div>
        </div>
        </>
    )
}

export default Nav;