import React from 'react';
import './App.css';
import {Table} from "antd";
import 'antd/dist/antd.css'

function App() {
    const dataSource = [
        {
            key: '1',
            name: 'Vichic',
            deaths: '1 💀',
        },
        {
            key: '2',
            name: 'Anuon',
            deaths: '0 💀',
        },
        {
            key: '3',
            name: 'Spannky',
            deaths: '0 💀',
        },
        {
            key: '4',
            name: 'Cattudus',
            deaths: '0 💀',
        },
        {
            key: '5',
            name: 'Kopen',
            deaths: '0 💀',
        },
        {
            key: '6',
            name: 'Zdena',
            deaths: '0 💀',
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Deaths',
            dataIndex: 'deaths',
            key: 'deaths',
        }
    ];
  return (
    <div className="App">
        <div className="header">
            <span className="header-text"> HC Minecraft  </span>
            <div className="header-sub-text"> Total world resets - 1 🔄</div>
        </div>
          <div>
              <Table className="table" dataSource={dataSource} columns={columns} />;
          </div>
    </div>
  );
}

export default App;
