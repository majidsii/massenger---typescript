import { useState, createContext, useContext } from "react";
import { ReactComponent as Iconsearch } from "../../../assets/icons/ico-back.svg";
import { ReactComponent as Iconearth } from "../../../assets/icons/ico-earth.svg";
import { ReactComponent as IconMenu } from "../../../assets/icons/ico-menu.svg";
import { ReactComponent as IconHorn } from "../../../assets/icons/ico-horn.svg";
import { ReactComponent as IconContacts } from "../../../assets/icons/ico-contact.svg";
import { useStateContext } from "../../../contex/contex";

function Header() {
  const searchBox = useStateContext ();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between p-3 gap-5  items-center ">
        {searchBox.searchBox ? (
          <div className="flex justify-between gap-5 items-center w-full">
            <div>
              <IconMenu
                onClick={(e) => {
                  menu ? setMenu(false) : setMenu(true);
                }}
                className="size-9 text-white"
              />
            </div>
            <span className="flex-1 text-white text-xl">گپ</span>
            <div>
              <Iconearth className="size-6 text-white	" />
            </div>
          </div>
        ) : (
          <div className=" ">
            <input
              className="p-[6px] bg-transparent border-none"
              type="search"
              placeholder="جستجو"
            />
          </div>
        )}
        <div
          key="search"
          onClick={() =>{
          
            searchBox.searchBox ? searchBox.setSearchBox(true) : searchBox.setSearchBox(false)
            console.log(searchBox)
          }
          }
        >
          <Iconsearch className="size-6 text-white" />
        </div>
      </div>
      {menu && (
        <div className="absolute w-[280px] bg-[#1f1a2e] justify-center z-10	flex flex-col  text-white">
          <div className=" flex h-14 items-center">
            <a className="hover:bg-[#403a5a] p-2 flex items-center h-full w-full gap-5 text-lg">
              <IconHorn className="-rotate-45 size-10" />
              ایجاد گروه یا کانال
            </a>
          </div>
          <div className="flex h-14 items-center ">
            <a className="hover:bg-[#403a5a] p-2 flex items-center h-full text-lg gap-5 w-full">
              <IconContacts className="size-10" />
              مخاطبین
            </a>
          </div>
        </div>
      )}
    </>
  );

  // سرچ باکس رو درست کردم باید مقدار استیت رو عوض کنم و استایل های کانتینر و جای سرچ رو باید فیکس کنم در اخر
}

export default Header;
