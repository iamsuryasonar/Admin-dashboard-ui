import NetProfitInformation from './components/net_profit_info_section';
import HighlightsSection from './components/highlights_section';
import CustomGraph from './components/barchart_section'
import RecentOrders from './components/recent_orders_section'
import CustomerFeedBackSection from './components/customer_feedback_section';
import WidgetSection from './components/widget_section';
import useFetchData from '../../hooks/useFetchData';

function Dashboard() {

    const data = useFetchData();

    return <div className='w-full'>
        {
            data !== null &&
            <div className="w-full h-full p-4">
                <p className="font-bold pb-4">Dashboard</p>
                <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-7 gap-5"
                    style={{
                        // gridAutoRows: "120px",
                    }}>
                    <WidgetSection
                        total_orders={data?.other_information.total_orders}
                        total_delivered={data?.other_information.total_delivered}
                        total_cancelled={data?.other_information.total_cancelled}
                        total_revenue={data?.other_information.total_revenue}
                        net_profit_information={data?.net_profit_information}
                    />
                    <CustomGraph xAxisData={data?.xAxisData} yAxisData={data?.yAxisData} />
                    <HighlightsSection />
                    <RecentOrders recent_orders={data?.recent_orders} />
                    <CustomerFeedBackSection feedbacks={data.feedbacks} />
                    <WidgetSection
                        total_orders={data?.other_information.total_orders}
                        total_delivered={data?.other_information.total_delivered}
                        total_cancelled={data?.other_information.total_cancelled}
                        total_revenue={data?.other_information.total_revenue}
                        net_profit_information={data?.net_profit_information}
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


