import React from 'react';
import { Menu } from 'antd';

const items = [
  {
    label: <a href="/">Главная</a>,
    key: '/'
  },
  {
    label: <a href="/me">Профиль</a>,
    key: '/me'
  },
  {
    label: <a href="/contacts">Контакты</a>,
    key: '/contacts'
  }
]

const Layout: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <div>
    <Menu mode="horizontal" items={items} />
    {props.children}
  </div>
}

export default Layout;