import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


const data = [
    {
        heros: 'captain america', power: 700, favorite: 800, age: 100, danger: 600
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


export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

    render() {
        return (
            <AreaChart
                width={900}
                height={400}
                data={data}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="heros" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="power" stroke="purple" fill="purple" />
                <Area type="monotone" dataKey="favorite" stroke="blue" fill="blue" />
                <Area type="monotone" dataKey="age" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="danger" stroke="red" fill="red" />

            </AreaChart>
        );
    }
}
