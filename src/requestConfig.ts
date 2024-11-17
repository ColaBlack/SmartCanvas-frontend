import type { RequestConfig } from '@umijs/max';
import { message } from 'antd'; // 错误处理方案： 错误类型

// 与后端约定的响应数据格式
interface BaseResponse {
  code: number;
  data: any;
  message: string;
}

/**
 * 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    // 错误接收及处理
  },

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response as unknown as BaseResponse;

      if (data?.success === false) {
        message.error('请求失败！');
      }
      return response;
    },
  ],
};
