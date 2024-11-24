import { Card, Col, message, Row } from 'antd';
import React, { useState } from 'react';
import SubmitChart from '@/components/SubmitChart/SubmitChart';
import { genChartAsyncByAiUsingPost } from '@/services/SmartCanvas/chartController';

const GenChartAsync: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    const params = {
      ...values,
      file: undefined,
    };
    setLoading(true);
    const res = await genChartAsyncByAiUsingPost(params, {}, values.file.fileList[0].originFileObj);
    try {
      if (res.code === 200) {
        message.success('图表生成成功！');
      } else {
        message.error('图表生成失败！' + res?.message ?? '未知错误');
      }
    } catch (error) {
      if (error instanceof Error) {
        message.error('图表生成失败！' + error.message ?? '未知错误');
      } else {
        message.error('图表生成失败！未知错误');
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div id="gen-chart-page">
      <Row gutter={24}>
        <Col span={12}>
          <Card title="AI数据分析(异步)">
            <SubmitChart onFinish={onFinish} loading={loading} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="提示" style={{ marginBottom: 20 }}>
            <p>异步分析</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default GenChartAsync;
