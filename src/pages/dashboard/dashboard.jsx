import { CiSearch, CiBurger } from "react-icons/ci";
import { FaRegEnvelope, FaShoppingBasket, FaShoppingBag } from "react-icons/fa";
import { GoGear, GoBell } from "react-icons/go";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsFileBarGraph } from "react-icons/bs";
import { BiWalletAlt, BiTargetLock, BiDish } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";

import StatisticWidget from '../dashboard/components/statistic_widget';
import NetProfit from '../dashboard/components/net_profit';
import HighlightsSection from '../dashboard/components/highlights_section';

function Dashboard() {
    const profile_image = 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg';
    const name = '';
    const activePage = 'HOME';

    return <div className="w-full h-svh bg-slate-900">
        <header className="h-[60px] ml-[52px] flex items-center justify-between bg-slate-800">
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
                <div>
                    <img className="w-8 h-8 mx-4 rounded-full" src={profile_image} alt={`profile image of ${name}`}></img>
                </div>
            </div>
        </header>
        <div className="flex">
            <aside className="relative w-[60px] h-svh -my-[60px] flex flex-col justify-between items-center bg-slate-800 text-slate-200">
                <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-blue-500"></div>
                <div className="w-full pt-[60px]">
                    <SidebarIcon activePage={activePage} name={'HOME'} Icon={AiFillHome} />
                    <SidebarIcon activePage={activePage} name={'ANALYTICS'} Icon={BsFileBarGraph} />
                    <SidebarIcon activePage={activePage} name={'CHECKED'} Icon={HiOutlineClipboardCheck} />
                    <SidebarIcon activePage={activePage} name={'WALLET'} Icon={BiWalletAlt} />
                    <SidebarIcon activePage={activePage} name={'BAG'} Icon={IoBagCheckOutline} />
                </div>
                <AiOutlineLogout className="mb-8" />
            </aside>
            <main className="w-full p-4 text-white">
                <p className="text-xl font-bold">Dashboard</p>
                <div className="grid grid-cols-4 gap-2 py-3">
                    <StatisticWidget
                        Icon={FaShoppingBasket}
                        icon_background={'#9DADFF'} icon_color={'blue'} title={'Total Orders'}
                        symbol={''}
                        amount={'75'}
                        suffix={''}
                        trend_indicator={'up'}
                        percentage={'3'}
                    />
                    <StatisticWidget
                        Icon={FaShoppingBag}
                        icon_background={'#A1FBC7'} icon_color={'green'}
                        title={'Total Delivered'}
                        symbol={''}
                        amount={'70'}
                        suffix={''}
                        trend_indicator={'down'}
                        percentage={'3'}
                    />
                    <StatisticWidget
                        Icon={FaShoppingBag}
                        icon_background={'#FF9DA0'} icon_color={'red'}
                        title={'Total Cancelled'}
                        symbol={''}
                        amount={'05'}
                        suffix={''}
                        trend_indicator={'down'}
                        percentage={'3'}
                    />
                    <StatisticWidget
                        Icon={FaArrowTrendUp}
                        icon_background={'#FF9DFF'} icon_color={'#FF4BFF'}
                        title={'Total Revenue'}
                        symbol={'$'}
                        amount={'12'}
                        suffix={'k'}
                        trend_indicator={'down'}
                        percentage={'3'}
                    />
                </div>
                <div>
                    <NetProfit
                        title={'Net Profit'}
                        trend_indicator={'up'}
                        amount={'6759.25'}
                        change_percentage={'3'}
                        goal_percentage={'70'}
                    />
                </div>
                <div className="my-3 p-4 rounded-md bg-slate-800 flex flex-col gap-3">
                    <HighlightsSection Icon={BiTargetLock} icon_background={'#FF9DA0'} icon_color={'red'} title={'Goals'} src={''} />
                    <HighlightsSection Icon={CiBurger} icon_background={'#9DADFF'} icon_color={'blue'} title={'Popular Dishes'} src={''} />
                    <HighlightsSection Icon={BiDish} icon_background={'#A1FBC7'} icon_color={'green'} title={'Menus'} src={''} />
                </div>
            </main>
        </div>
    </div>
}

export default Dashboard;

function HeaderIcon(props) {
    const {
        Icon,
        notification,
    } = props;

    return <>
        <div className="p-2 rounded-full bg-slate-700 relative">
            {
                notification === true ? <div className="absolute w-[7px] h-[7px] top-[8px] right-[9px] rounded-full bg-blue-400"></div> : ''
            }
            <Icon />
        </div>
    </>
}

function SidebarIcon(props) {
    const {
        activePage,
        name,
        Icon
    } = props;

    return <>
        <div className={`w-full py-2 ${activePage === name ? 'text-blue-400' : 'text-slate-100'}`}>
            < div className="relative w-full py-2 flex justify-center">
                {
                    activePage === name ?
                        <div className="absolute top-0 left-0 bottom-0 w-[4px] h-full bg-blue-400 rounded-e-sm"></div> : ''
                }
                <Icon className="text-lg" />
            </div>
        </div >
    </>
}


