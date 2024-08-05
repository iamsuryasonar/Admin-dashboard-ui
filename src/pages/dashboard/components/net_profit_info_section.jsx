import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NetProfitInformation(props) {
    const {
        trend_indicator,
        amount,
        change_percentage,
        goal_percentage
    } = props;

    return <div className="col-span-3 row-span-1 flex justify-between p-2 rounded-md bg-slate-800">
        <div className="flex flex-col justify-between">
            <p className="text-sm">Net Profit</p>
            <p className="text-3xl font-bold py-2">${amount}</p>
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
            <p className="text-[8px] lg:text-[10px] text-center">
                *The values here has been rounded off.
            </p>
        </div>
    </div>
}

export default NetProfitInformation;

function CircularProgressBar(props) {
    const {
        percentage,
        goal_status
    } = props;

    return <div className="w-[100px] h-[100px]">
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={8}
            styles={buildStyles({
                pathColor: `rgb(59 130 246)`,
                trailColor: 'rgb(51 65 85)',
            })}
        >
            <p className="text-xl font-semibold">{percentage}%</p>
            <p className="w-[60px] text-xs text-wrap text-center">{goal_status}</p>
        </CircularProgressbarWithChildren>
    </div>
}