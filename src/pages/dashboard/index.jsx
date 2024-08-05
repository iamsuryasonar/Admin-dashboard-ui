import NetProfitInformation from './components/net_profit_info_section';
import HighlightsSection from './components/highlights_section';
import CustomGraph from './components/barchart_section'
import RecentOrders from './components/recent_orders_section'
import CustomerFeedBackSection from './components/customer_feedback_section';
import WidgetSection from './components/widget_section';
import useFetchData from '../../hooks/useFetchData';

function Dashboard() {

    const data = useFetchData();

    return <div className=''>
        {
            data !== null &&
            <div className="w-full h-full p-4">
                <p className="font-bold pb-4">Dashboard</p>
                <div className="h-full grid grid-cols-7 gap-5"
                    style={{
                        gridAutoRows: "130px",
                    }}>
                    <WidgetSection
                        total_orders={data?.other_information.total_orders}
                        total_delivered={data?.other_information.total_delivered}
                        total_cancelled={data?.other_information.total_cancelled}
                        total_revenue={data?.other_information.total_revenue}
                    />
                    <NetProfitInformation
                        trend_indicator={data?.net_profit_information.trend_indicator}
                        amount={data?.net_profit_information.amount}
                        change_percentage={data?.net_profit_information.change_percentage}
                        goal_percentage={data?.net_profit_information.goal_percentage}
                    />
                    <CustomGraph xAxisData={data?.xAxisData} yAxisData={data?.yAxisData} />
                    <HighlightsSection />
                    <RecentOrders recent_orders={data?.recent_orders} />
                    <CustomerFeedBackSection feedbacks={data.feedbacks} />
                </div>
            </div>
        }
    </div>
}

export default Dashboard;


