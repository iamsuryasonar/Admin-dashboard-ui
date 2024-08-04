import React from 'react';

const customers = [
    {
        profilePic: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
        name: 'John Doe',
        orderNo: '15478259',
        amount: '$124.00',
        status: 'Delivered',
    },
    {
        profilePic: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
        name: 'John Doe',
        orderNo: '15478259',
        amount: '$124.00',
        status: 'Cancelled',
    },
    {
        profilePic: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
        name: 'John Doe',
        orderNo: '15478259',
        amount: '$124.00',
        status: 'Pending',
    },
    {
        profilePic: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
        name: 'John Doe',
        orderNo: '15478259',
        amount: '$124.00',
        status: 'Delivered',
    },
    {
        profilePic: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
        name: 'John Doe',
        orderNo: '15478259',
        amount: '$124.00',
        status: 'Cancelled',
    },
    {
        profilePic: 'https://iamsuryasonar.netlify.app/assets/dp-bIzYPUqU.jpg',
        name: 'John Doe',
        orderNo: '15478259',
        amount: '$124.00',
        status: 'Pending',
    },
];

function RecentOrders() {
    return (
        <div className="col-span-6 flex flex-col p-4 rounded-md bg-slate-800 text-white">
            <h1 className="text-xl font-bold">Recent Orders</h1>
            <table className="w-full table-auto divide-y divide-slate-700 ">
                <thead className="">
                    <tr>
                        <th className="py-2 text-left">
                            Customer
                        </th>
                        <th className="py-2 text-left">
                            Order No.
                        </th>
                        <th className="py-2 text-left">
                            Amount
                        </th>
                        <th className="py-2 text-left">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                    {
                        customers.map((customer, index) => {
                            return (
                                <tr className="">
                                    <td className="flex items-center py-2 whitespace-nowrap">
                                        <img className="h-8 w-8 rounded-full mr-4" src={customer.profilePic} alt="" />
                                        <span className="ml-2">{customer.name}</span>
                                    </td>
                                    <td className="py-2 whitespace-nowrap">
                                        {customer.orderNo}
                                    </td>
                                    <td className="py-2 whitespace-nowrap">
                                        {customer.amount}
                                    </td>
                                    <td className="flex items-center py-2 whitespace-nowrap">
                                        <div className={`px-3 rounded-full text-center ${customer.status === 'Delivered' ? 'bg-green-900 text-green-500' : 'bg-red-900 text-red-500'}`}>
                                            <p>{customer.status}</p>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    );
};

export default RecentOrders;