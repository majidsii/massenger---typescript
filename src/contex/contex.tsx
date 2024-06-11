import react ,{ Dispatch, SetStateAction, createContext , useContext, useState, ReactNode} from "react";
// search box
interface SearchContextType {
    searchBox: boolean
    setSearchBox: Dispatch<SetStateAction<boolean>>;
}
export const SearchContext = createContext<SearchContextType>({
    searchBox: true,
    setSearchBox: () => {}
    
});

type ContexProviderProps = {
    children?: ReactNode
}

export const SearchBoxContextProvider = ({ children }: ContexProviderProps) => {
    const [searchBox,setSearchBox ] = useState(true);
    return (
        <SearchContext.Provider
            value={{ searchBox, setSearchBox}}
        >
            {children}
        </SearchContext.Provider>
    )
}
export const useStateContext = () => useContext(SearchContext)
// search box


// asider

interface ActiveSideBarType{
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    activeOne:Boolean,
    setActiveOne:Dispatch<SetStateAction<boolean>>,
};

export const ActiveSideBarContex = createContext<ActiveSideBarType>({
    active:true ,
    setActive: ()=>{},
    activeOne:true,
    setActiveOne:()=>{}
});

export const ActiveSideBarProvider = ({ children }:ContexProviderProps) =>{ 
const [active , setActive] = useState(true);
const [activeOne,setActiveOne]=useState(true);
return(
    <ActiveSideBarContex.Provider value={{active , setActive , activeOne ,setActiveOne}}>
        {children}
    </ActiveSideBarContex.Provider>
    )
}

export const useActiveContex = ()=>useContext(ActiveSideBarContex)