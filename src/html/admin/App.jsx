import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

import { Row, Col } from 'antd';
import Sider from './components/Sider'
import './styles/main.css'


class App extends React.Component {
  	render() {
    	return (
			<Row>
				<Col span={6}><Sider /></Col>
				<Col span={18}>
					<div className="layout-header">
                    <div className="layout-ceiling-main">
                        <a href="#">注册登录</a> |
                        <a href="#">帮助中心</a> |
                        <a href="#">安全中心</a> |
                        <a href="#">服务大厅</a>
	                    </div>
	                </div>
	                <div className="layout-breadcrumb">
	        
	                </div>
	                <div className="layout-content">
	                    <div className="layout-content-main">内容区域</div>
	                </div>
	                <div className="layout-copy">
	                    2011-2016 &copy; TalkingData
	                </div>
				</Col>
			</Row>
		)
	}
}

export default App