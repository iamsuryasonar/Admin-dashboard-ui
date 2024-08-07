import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsFileBarGraph } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import usePath from "../hooks/usePath";

function Sidebar() {
    const [activePage] = usePath();

    return (
        <aside className="fixed inset-y-0 left-0 w-[60px] min-h-svh flex flex-col justify-between items-center bg-slate-800 text-slate-200">
            <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-blue-500"></div>
            <div className="w-full pt-[60px]">
                <SidebarIcon path={'/'} activePage={activePage} name={'dashboard'} Icon={AiFillHome} />
                <SidebarIcon path={'/analytics'} activePage={activePage} name={'analytics'} Icon={BsFileBarGraph} />
                <SidebarIcon path={'/page1'} activePage={activePage} name={'page1'} Icon={HiOutlineClipboardCheck} />
                <SidebarIcon path={'/page2'} activePage={activePage} name={'page2'} Icon={BiWalletAlt} />
                <SidebarIcon path={'/page3'} activePage={activePage} name={'page3'} Icon={IoBagCheckOutline} />
            </div>
            <div className="mb-8 p-2 rounded-full bg-transparent hover:bg-slate-900 hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                <AiOutlineLogout className="" />
            </div>
        </aside>
    )
}

export default Sidebar;

function SidebarIcon(props) {
    const {
        path,
        activePage,
        name,
        Icon
    } = props;

    return <>
        <Link to={path} className={`w-full py-2 ${activePage === name ? 'text-blue-400' : 'text-slate-100'} hover:text-blue-500 transition-colors duration-300 ease-in-out`}>
            < div className="relative w-full py-2 flex justify-center">
                {
                    activePage === name ?
                        <div className="absolute top-0 left-0 bottom-0 w-[4px] h-full bg-blue-400 rounded-e-sm"></div> : ''
                }
                <Icon className="text-lg" />
            </div>
        </Link >
    </>
}


