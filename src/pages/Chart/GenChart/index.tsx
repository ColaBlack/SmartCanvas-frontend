import { Card, Col, message, Row } from 'antd';
import React, { useState } from 'react';
import { genChartByAiUsingPost } from '@/services/SmartCanvas/chartController';
import SubmitChart from '@/components/SubmitChart/SubmitChart';
import ReactEcharts from 'echarts-for-react';

const GenChartPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const [option, setOption] = useState<any>();

  const onFinish = async (values: any) => {
    const params = {
      ...values,
      file: undefined,
    };
    setLoading(true);
    setResult('');
    setOption(undefined);
    const res = await genChartByAiUsingPost(params, {}, values.file.fileList[0].originFileObj);
    try {
      if (res.code === 200) {
        message.success('图表生成成功！');
        setResult(res.data?.result ?? 'AI分析失败，请重试');
        setOption(res.data?.option);
      } else {
        message.error('图表生成失败！' + res?.message ?? '未知错误');
      }
    } catch (error) {
      if (error instanceof Error) {
        message.error('图表生成失败！' + error.message ?? '未知错误');
      } else {
        message.error('图表生成失败！未知错误');
      }
    }
    setLoading(false);
  };
  const renderChart = (option: any) => {
    try {
      if (option) {
        return <ReactEcharts option={JSON.parse(option)} />;
      } else {
        return <p>暂无分析结果</p>;
      }
    } catch (error) {
      return <p>AI绘图失败，您可以重试</p>;
    }
  };
  return (
    <div id="gen-chart-page">
      <Row gutter={24}>
        <Col span={12}>
          <Card title="AI数据分析">
            <SubmitChart loading={loading} onFinish={onFinish} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="分析结论" style={{ marginBottom: 20 }}>
            <p>{result ? result : '暂无分析结果'}</p>
          </Card>
          <Card title="分析图表">
            <div id="chart-container">{renderChart(option)}</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default GenChartPage;
