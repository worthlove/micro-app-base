// @ts-ignore
import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import Micro_react from './components/micro_react.tsx'
import Micro_vue from './components/micro_vue.tsx'
import './App.css'

import { LaptopOutlined, NotificationOutlined, UserOutlined,AntDesignOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme,Avatar,Badge, Space } from 'antd';

const { Header, Content, Sider ,Footer} = Layout;

const items1: MenuProps['items'] = ['1', '2'].map((key) => ({key,label: `nav${key}`,}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `Micro_React`,
        
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
);

console.log(items1,items2,'菜单数据')

function App() {
  const { token: { colorBgContainer, borderRadiusLG }} = theme.useToken();
  return (
    <div className='App'>
      <Layout style={{height:'100vh',width:'auto'}}>
        {/* 顶部菜单栏 */}
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Link to='/page/reactApp' className='linkClass'>react</Link>
          <Link to='/page/vueApp' className='linkClass'>vue</Link>
          <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={items1}
              style={{ flex: 1, minWidth: 0 }}
          />
          <Space size={{ xs: 24, sm: 24, md:24, lg: 24, xl: 32, xxl: 40 }}>
            <Badge count={99999}>
              <Avatar style={{backgroundColor: "blue"}}
                      size={{ xs: 24, sm: 24, md:24, lg: 24, xl: 32, xxl: 40 }}
                      icon={<AntDesignOutlined style={{ color:"red"}} />}
              />
            </Badge>
          </Space>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 1px' }}>
            {/* 页签导航栏 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {/* 主体部分 */}
            <Content style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }} >
              <Routes>
                <Route path='/page/reactApp' element={<Micro_react />}></Route>
                <Route path='/page/vueApp' element={<Micro_vue />}></Route>
              </Routes>
            </Content>
            {/* 底部版本信息 */}
            <Footer style={{ textAlign: 'center',padding: '10px 24px',fontSize: 18 }}>
              GZF ©2024 - {new Date().getFullYear()} Study Cases
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
