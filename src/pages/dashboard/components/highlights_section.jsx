import { Link } from "react-router-dom";

import { CiBurger } from "react-icons/ci";
import { BiTargetLock, BiDish } from "react-icons/bi";
import { RxCaretRight } from "react-icons/rx";

function HighlightsSection() {
    return (
        <div className="h-full w-full lg:col-span-3 lg:row-span-2 p-4 rounded-md bg-slate-800 flex flex-col gap-3">
            <Highlight Icon={BiTargetLock} icon_background={'#FF9DA0'} icon_color={'red'} title={'Goals'} src={''} />
            <Highlight Icon={CiBurger} icon_background={'#9DADFF'} icon_color={'blue'} title={'Popular Dishes'} src={''} />
            <Highlight Icon={BiDish} icon_background={'#A1FBC7'} icon_color={'green'} title={'Menus'} src={''} />
        </div>
    )
}

export default HighlightsSection;

function Highlight(props) {
    const {
        Icon,
        icon_background,
        icon_color,
        title,
        src,
    } = props;

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-4 w-fit rounded-full bg-slate-700"
                    style={{
                        backgroundColor: icon_background,
                        color: icon_color,
                    }}>
                    <Icon className='text-xl' />
                </div>
                <p>{title}</p>
            </div>
            <Link to={src}>
                <div className="p-1 w-fit rounded-full bg-slate-700 hover:bg-slate-900 hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                    <RxCaretRight className="text-xl" />
                </div>
            </Link>
        </div>
    )
}