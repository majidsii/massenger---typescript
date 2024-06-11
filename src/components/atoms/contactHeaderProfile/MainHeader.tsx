import { IContactHeaderProps } from "./contactHeaderProfile.iterface";
import { ReactComponent as IconSearch } from "../../../assets/icons/ico-search.svg";
import { ReactComponent as IconMore } from "../../../assets/icons/ico-more.svg";
import { ReactComponent as IconBack } from "../../../assets/icons/ico-back.svg";

import { useStateContext, useActiveContex } from "../../../contex/contex";
import { Search } from "../../organs/main/Main";


const MainHeader = ({
  title,
  profileImage,
  description,
}: IContactHeaderProps) => {
  
  const getTitleAsImage = (title: string) => {
    if (title.length > 2) {
      return title.substring(0, 2);
    } else {
      return title.substring(0, 1);
    }
  };

  const searchBox = useStateContext ();
  const active = useActiveContex();

  return (
    <>
      {/* wrrap */}
      <div className="shadow-md shadow-zinc-900 flex items-center h-full p-1 gap-4 text-white bg-[#1f1a2e] w-full rounded-3xl text-xl ">
        {/* imageprofile */}
        
        <IconBack key="back" onClick={()=>{active.activeOne ? active.setActiveOne(false) : active.setActiveOne(true)
            active.active ?active.setActive(true) : active.setActive(true) }} className="size-6 min-[720px]:hidden rotate-180" />
        <div className="bg-yellow-500 uppercase rounded-3xl justify-center items-center flex h-[50px] w-[50px]">
          {profileImage ? (
            <img src={profileImage} alt={title} />
          ) : (
            <span>{getTitleAsImage(title)}</span>
          )}
        </div>
        {/* information */}
        <div className="flex-[6] flex flex-col text-lg uppercase">
          <div className="flex flex-row justify-between  items-center">
            <span className="">{title}</span>
          </div>
          <div className="flex flex-row">
            <span>{description}</span>
          </div>
        </div>
        {/* icons */}
        <div
           className=" flex gap-3">
          <IconSearch
             key="search"
             onClick={() =>
               searchBox.searchBox ? searchBox.setSearchBox(false) : searchBox.setSearchBox(true)
             }
                      
            className="size-6"
          />

          <IconMore key="more" className="size-6" />
        </div>
      </div>
    </>
  );
};

export default MainHeader;
