import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        heros: 'captain america', power: 700, favorite: 800, age:100,danger:600
    },
    {
        heros: 'iron man', power: 800, favorite: 900, age: 55, danger: 900
    },
    {
        heros: 'hulk', power: 900, favorite: 500, age: 50, danger: 1000
    },
    {
        heros: 'black widow', power: 400, favorite: 400, age: 40, danger: 500
    },
    {
        heros: 'thor', power: 800, favorite: 600, age: 1000, danger: 800
    },
    {
        heros: 'dr.strange', power: 700, favorite: 600, age: 50, danger: 700
    },
    {
        heros: 'black panthar', power: 700, favorite: 600, age: 37, danger: 800
    },
];

export default class SimpleLineChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        return (
            <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 30, right: 10, left:0, bottom: 0,
                }}  
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="heros" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="power" stroke="purple" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="favorite" stroke="blue" />
                <Line type="monotone" dataKey="age" stroke="#82ca9d" />
                <Line type="monotone" dataKey="danger" stroke="red" />


            </LineChart>
        );
    }
}
