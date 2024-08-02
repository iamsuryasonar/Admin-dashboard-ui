import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function NetProfit(props) {
    const {
        title,
        trend_indicator,
        amount,
        change_percentage,
        goal_percentage
    } = props;
    return <div className="flex justify-between p-2 rounded-md bg-slate-800">
        <div>
            <p className="text-sm">{title}</p>
            <p className="text-xl font-bold py-2">${amount}</p>
            <div className={`flex items-center ${trend_indicator === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                <span>
                    {
                        trend_indicator === 'up' ?
                            <FaCaretUp />
                            :
                            <FaCaretDown />
                    }
                </span>
                <p className="text-xs">{change_percentage}%</p>
            </div>
        </div>
        <div>
            <p className="text-lg">{goal_percentage}%</p>
            <p className="text-xs">Goal Completed</p>
            <p>
                The values here has been rounded off.
            </p>
        </div>
    </div>
}

export default NetProfit;