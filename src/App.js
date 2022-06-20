import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Header } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
      <Header>
          <Nav />
      </Header>
      
      <div>
        <Login/>
      </div>
    </Layout>
  );
}

export default App;
