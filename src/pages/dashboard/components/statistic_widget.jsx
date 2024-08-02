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

    return <div className="bg-slate-800 rounded-md p-2">
        <div className="p-2 w-fit rounded-md bg-slate-700"
            style={{
                backgroundColor: icon_background,
                color: icon_color,
            }}>
            <Icon />
        </div>
        <p className="text-xs py-1">{title}</p>
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