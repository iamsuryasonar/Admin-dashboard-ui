import { FaShoppingBasket, FaShoppingBag } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import StatisticWidget from './statistic_widget';
import NetProfitInformation from './net_profit_info_section';

function WidgetSection(props) {
    const {
        total_orders,
        total_delivered,
        total_cancelled,
        total_revenue,
        net_profit_information
    } = props;
    return (
        <div className="h-full col-span-7 row-span-1 flex flex-col md:grid md:grid-cols-7 gap-4">
            <div className="col-span-4 row-span-1 flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4">
                <StatisticWidget
                    Icon={FaShoppingBasket}
                    icon_background={'#9DADFF'} icon_color={'blue'} title={'Total Orders'}
                    symbol={''}
                    amount={total_orders}
                    suffix={''}
                    trend_indicator={'up'}
                    percentage={'3'}
                />
                <StatisticWidget
                    Icon={FaShoppingBag}
                    icon_background={'#A1FBC7'} icon_color={'green'}
                    title={'Total Delivered'}
                    symbol={''}
                    amount={total_delivered}
                    suffix={''}
                    trend_indicator={'down'}
                    percentage={'3'}
                />
                <StatisticWidget
                    Icon={FaShoppingBag}
                    icon_background={'#FF9DA0'} icon_color={'red'}
                    title={'Total Cancelled'}
                    symbol={''}
                    amount={total_cancelled}
                    suffix={''}
                    trend_indicator={'down'}
                    percentage={'3'}
                />
                <StatisticWidget
                    Icon={FaArrowTrendUp}
                    icon_background={'#FF9DFF'} icon_color={'#FF4BFF'}
                    title={'Total Revenue'}
                    symbol={'$'}
                    amount={total_revenue}
                    suffix={'k'}
                    trend_indicator={'down'}
                    percentage={'3'}
                />
            </div>
            <NetProfitInformation
                trend_indicator={net_profit_information.trend_indicator}
                amount={net_profit_information.amount}
                change_percentage={net_profit_information.change_percentage}
                goal_percentage={net_profit_information.goal_percentage}
            />
        </div>
    )
}

export default WidgetSection;