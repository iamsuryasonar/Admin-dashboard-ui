import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';

import { FaCaretDown } from "react-icons/fa";

const CustomGraph = (props) => {
    const {
        xAxisData,
        yAxisData
    } = props;

    return (
        <div className='w-full h-[212px] lg:col-span-4 lg:row-span-2 bg-slate-800 rounded-md flex flex-col'>
            <div className='p-3 flex justify-between items-center'>
                <p className='font-bold'>Activity</p>
                <div className="relative">
                    <select id="tenure" name="tenure" className="block appearance-none w-full text-xs bg-slate-800 border border-gray-700 hover:border-gray-600 px-3 py-1 pr-7 rounded-full focus:outline-none focus:shadow-outline">
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <FaCaretDown />
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width="100%"
                    height="100%"
                    className=''
                    data={xAxisData}
                    margin={{
                        top: 0, right: 14, left: -14, bottom: 0,
                    }}
                >
                    <CartesianGrid vertical={false} opacity={0.2} />
                    <XAxis
                        ticks={[5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]}
                        tickLine={false}
                        tick={<CustomAxisTick />}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        ticks={yAxisData}
                        tickFormatter={(value) => {
                            if (value === 0) return `${value}`;
                            return `${value}k`;

                        }}
                        tickCount={4}
                        tick={<CustomAxisTick />}
                    />
                    {/* <Tooltip /> */}
                    <Bar dataKey="value" fill="#82ca9d" radius={[100, 100, 100, 100]} barSize={16} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CustomGraph;


function CustomAxisTick(props) {
    const { x, y, stroke, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform={`translate(${-4},${-6})`} className='text-xs'>
                {payload.value}
            </text>
        </g>
    );
}

