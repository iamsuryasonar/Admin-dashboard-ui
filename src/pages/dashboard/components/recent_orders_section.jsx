import React from 'react';

function RecentOrders(props) {

    const {
        recent_orders,
    } = props;

    return (<div className="w-full max-h-[400px] lg:col-span-4 lg:row-span-3 flex flex-col p-4 rounded-md bg-slate-800 text-white">
        <h1 className="font-bold mb-4">Recent Orders</h1>
        <div className="w-full h-full overflow-auto custom-scrollbar">
            <table className="w-full table-auto divide-y divide-slate-700">
                <thead>
                    <tr>
                        <th className="py-2  text-left">Customer</th>
                        <th className="py-2 px-6 text-left">Order No.</th>
                        <th className="py-2 px-6 text-left">Amount</th>
                        <th className="py-2 px-6 text-left">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                    {recent_orders.map((customer, index) => (
                        <tr key={index}>
                            <td className="flex items-center py-2 pr-6 whitespace-nowrap">
                                <img
                                    className="h-8 w-8 rounded-full mr-1"
                                    src={customer.profilePic}
                                    alt=""
                                />
                                <span className="ml-2">{customer.name}</span>
                            </td>
                            <td className="py-2 px-6 whitespace-nowrap">{customer.orderNo}</td>
                            <td className="py-2 px-6 whitespace-nowrap">{customer.amount}</td>
                            <td className="py-2 pl-6 whitespace-nowrap">
                                <div
                                    className={`px-3 rounded-full inline-block text-center ${customer.status === 'Delivered'
                                        ? 'bg-green-900 text-green-500'
                                        : 'bg-red-900 text-red-500'
                                        }`}
                                >
                                    <p>{customer.status}</p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default RecentOrders;
