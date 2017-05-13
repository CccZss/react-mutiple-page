import React from 'react';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  state = {
    current: '1-1',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu
          theme='dark' 
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
			<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
				<Menu.Item key="1-1">Option 1</Menu.Item>
				<Menu.Item key="1-2">Option 2</Menu.Item>
				<Menu.Item key="1-3">Option 3</Menu.Item>
				<Menu.Item key="1-4">Option 4</Menu.Item>
			</SubMenu>
			<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
				<Menu.Item key="2-1">Option 5</Menu.Item>
				<Menu.Item key="2-2">Option 6</Menu.Item>
			<SubMenu key="sub3" title="Submenu">
			  	<Menu.Item key="3-1">Option 7</Menu.Item>
			  	<Menu.Item key="3-2">Option 8</Menu.Item>
			</SubMenu>
			</SubMenu>
			<SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
				<Menu.Item key="4-1">Option 9</Menu.Item>
				<Menu.Item key="4-2">Option 10</Menu.Item>
				<Menu.Item key="4-3">Option 11</Menu.Item>
				<Menu.Item key="4-4">Option 12</Menu.Item>
			</SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sider