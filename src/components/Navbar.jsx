import { CiSearch } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { GoGear, GoBell } from "react-icons/go";

function Navbar() {
    const profile_image = 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg';
    const name = 'John Doe';

    return (
        <header className="fixed h-[60px] inset-x-0 z-50 ml-[52px] flex items-center justify-between bg-slate-800">
            <div className="mx-4 px-2 py-1 flex gap-2 items-center rounded-md border border-slate-600 bg-slate-700">
                <CiSearch className="text-white" />
                <input className="bg-transparent" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center">
                <div className="flex gap-2 items-center text-slate-400">
                    <HeaderIcon notification={false} Icon={FaRegEnvelope} />
                    <HeaderIcon notification={false} Icon={GoGear} />
                    <HeaderIcon notification={true} Icon={GoBell} />
                </div>
                <img className="w-8 h-8 mx-4 rounded-full cursor-pointer" src={profile_image} alt={`profile image of ${name}`}></img>
            </div>
        </header>
    )
}

export default Navbar;

function HeaderIcon(props) {
    const {
        Icon,
        notification,
    } = props;

    return <>
        <div className="p-2 relative rounded-full bg-slate-700 hover:bg-slate-900 hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
            {
                notification === true ? <div className="absolute w-[7px] h-[7px] top-[8px] right-[9px] rounded-full bg-blue-400"></div> : ''
            }
            <Icon />
        </div>
    </>
}
