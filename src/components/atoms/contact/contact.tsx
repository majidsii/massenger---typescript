import { IContactProps } from "./contact.interface";

const Contact = ({
    title,
    profileImage,
    date,
    description
}: IContactProps) => {

    const getTitleAsImage = (title:string) => {
        if (title.length > 2 ){
            return title.substring(0, 2);
        } else{
            return title.substring(0,1);
        }
    };

    return(
        // wrrap
        <div className="flex items-center gap-3 p-2 text-white h-[75px]">

            {/* imageprofile */}
            <div className="bg-yellow-500 rounded-3xl justify-center uppercase items-center flex h-[50px] w-[50px]">
                
                {profileImage
                ? <img src={profileImage} alt={title}/>
                :<span>
                    {getTitleAsImage(title)}
                </span>
                }
            </div>
            {/* content wrapper */}
            <div className="flex-[6] flex flex-col text-sm">
                <div className="flex flex-row justify-between  items-center">
                    <span className="uppercase">
                    {title}
                </span>
                <span className="">
                    {date}
                </span>
                </div>
                

                <div className="flex flex-row">
                
                    <span>
                      {description}
                    </span>
                    <span>

                    </span>
                </div>
            </div>
            {/* date */}

        </div>
    )
}

export default Contact;