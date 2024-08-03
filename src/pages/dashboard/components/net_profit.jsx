import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { PieChart, Pie, Cell, Label } from 'recharts';


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
            <MyPieChart />
            <p>
                The values here has been rounded off.
            </p>
        </div>
    </div>
}

export default NetProfit;


const data = [{ name: 'value', value: 70 }];

const MyPieChart = () => {
    const totalValue = data[0].value;
    const percentage = `${totalValue}%`;

    return (
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={46}
                outerRadius={60}
                paddingAngle={5}
                cornerRadius={40}
                fill="#8884d8"
            >
                <Cell fill="#fff" />
                <Label
                    value={percentage}
                    position="center"
                    fontSize={24}
                    fontWeight="bold"
                    fill="#fff"
                />
            </Pie>
        </PieChart>
    );
};
