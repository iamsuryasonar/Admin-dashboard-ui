import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';

const xAxisData = [
    { value: 15 },
    { value: 18 },
    { value: 10 },
    { value: 16 },
    { value: 12 },
    { value: 9 },
    { value: 4 },
    { value: 6 },
    { value: 12 },
    { value: 8 },
    { value: 6 },
    { value: 4 },
    { value: 6 },
    { value: 12 },
    { value: 8 },
    { value: 6 },
];

const yAxisData = [0, 5, 10, 15, 20];

const CustomGraph = () => {

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                width={500}
                height={300}
                data={xAxisData}
                margin={{
                    top: 50, right: 20, left: 20, bottom: 50,
                }}
            >
                <CartesianGrid vertical={false} opacity={0.2} />
                <XAxis
                    ticks={[5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]}
                    tickLine={false}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    ticks={yAxisData}
                    tickFormatter={(value) => {
                        if (value === 0) return `${value}`;
                        return `${value}k`;
                    }}
                />
                {/* <Tooltip /> */}
                <Bar dataKey="value" fill="#82ca9d" radius={[100, 100, 100, 100]} barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CustomGraph;
