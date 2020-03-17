import React from 'react';
import './index.css';
import SimpleLineChart from './components/SimpleLineChart';
import TinyLineChart from './components/TinyLineChart';
import SimpleAreaChart from '../container/components/SimpleAreaChart';
import SimpleBarChart from '../container/components/SimpleBarChart';
import SameDataComposedChart from '../container/components/SameDataComposedChart';
import CustomActiveShapePieChart from '../container/components/CustomActiveShapePieChart.js'
const Index = () => {
    return (
        <div>
                <div className="container">Rechart</div>
            <div className="Recharts">
                <div className="SimpleLineChart card">
                    <SimpleLineChart/>
                    <div className="header">SimpleLineChart</div>
                </div>
                <div className="TinyLineChart card">
                    <TinyLineChart />
                    <div className="header">TinyLineChart</div>
                </div>
                <div className="SimpleAreaChart card">
                    <SimpleAreaChart />
                    <div className="header">SimpleAreaChart</div>
                </div>
                <div className="SimpleBarChart card">
                    <SimpleBarChart />
                    <div className="header">SimpleBarChart</div>
                </div>
                <div className="SameDataComposedChart card">
                    <SameDataComposedChart />
                    <div className="header">SameDataComposedChart</div>
                </div>
                <div className="CustomActiveShapePieChart card">
                    <CustomActiveShapePieChart />
                    <div className="header">CustomActiveShapePieChart</div>
                </div>
            </div>
        </div>
    );
};

export default Index;