import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'gitee',
          title: '我的gitee页面',
          href: 'https://gitee.com/colablack',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ColaBlack',
          blankTarget: true,
        },
        {
          key: 'blog',
          title: '我的文档站点',
          href: 'https://colablack.github.io/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
