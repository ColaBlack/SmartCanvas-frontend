import { history } from '@umijs/max';
import { errorConfig } from './requestConfig';
import { getLoginUserUsingGet } from '@/services/SmartCanvas/userController';
import { RunTimeLayoutConfig } from '@@/plugin-layout/types';
import { AvatarDropdown, AvatarName } from '@/components';
import logo from '../public/logo.svg';

const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{ currentUser?: API.LoginUserVO }> {
  const fetchUserInfo = async () => {
    const res = await getLoginUserUsingGet();
    if (res.code === 200) {
      return res.data;
    } else {
      history.push(loginPath);
      return undefined;
    }
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return { currentUser };
  }
  return {};
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo,
    avatarProps: {
      src: initialState?.currentUser?.userAvatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.userName,
    },
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  baseURL: 'http://localhost:1221',
  withCredentials: true,
  ...errorConfig,
};
