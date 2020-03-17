import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
export default class SimpleBarChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="heros" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="power" fill="purple" />
                <Bar dataKey="favorite" fill="blue" />
                <Bar dataKey="age" fill="#82ca9d" />
                <Bar dataKey="danger" fill="red" /> 
            </BarChart>
        );
    }
}
