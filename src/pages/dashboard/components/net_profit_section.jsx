import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NetProfit(props) {
    const {
        title,
        trend_indicator,
        amount,
        change_percentage,
        goal_percentage
    } = props;
    return <div className="col-span-4 flex justify-between p-2 rounded-md bg-slate-800">
        <div>
            <p className="text-sm">{title}</p>
            <p className="text-4xl font-bold py-2">${amount}</p>
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
        <div className="flex flex-col items-center">
            <CircularProgressBar percentage={goal_percentage} goal_status={'Goal Completed'} />
            <p>
                The values here has been rounded off.
            </p>
        </div>
    </div>
}

export default NetProfit;

function CircularProgressBar(props) {
    const {
        percentage,
        goal_status
    } = props;

    return <div className="w-[120px] h-[120px]">
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={12}
            styles={buildStyles({
                pathColor: `rgb(59 130 246)`,
                trailColor: 'rgb(51 65 85)',
            })}
        >
            <p className="text-1xl font-semibold">{percentage}%</p>
            <p className="w-[60px] text-xs text-wrap text-center">{goal_status}</p>
        </CircularProgressbarWithChildren>
    </div>
}