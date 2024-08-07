import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function StatisticWidget(props) {

    const {
        Icon,
        icon_background,
        icon_color,
        title,
        symbol,
        amount,
        suffix,
        trend_indicator,
        percentage,
    } = props;

    return <div className="col-span-1 row-span-1 p-3 flex flex-col justify-between bg-slate-800 rounded-md">
        <div className="p-3 w-fit rounded-md"
            style={{
                backgroundColor: icon_background,
                color: icon_color,
            }}>
            <Icon />
        </div>
        <p className="text-sm py-1">{title}</p>
        <div className="flex justify-between">
            <div className="flex text-lg font-bold">
                <p>{symbol}</p>
                <p>{amount}</p>
                <p>{suffix}</p>
            </div>
            <div className={`flex items-center ${trend_indicator === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                <span>
                    {
                        trend_indicator === 'up' ?
                            <FaCaretUp />
                            :
                            <FaCaretDown />
                    }
                </span>
                <p className="text-xs">{percentage}%</p>
            </div>
        </div>
    </div>
}

export default StatisticWidget;