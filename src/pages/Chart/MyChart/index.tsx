import React, { useState } from 'react';
import { listChartByPageUsingPost } from '@/services/SmartCanvas/chartController';
import { Card, List, message, Result } from 'antd';
import Search from 'antd/es/input/Search';
import ReactEcharts from 'echarts-for-react';

const MyChart: React.FC = () => {
  const [data, setData] = useState<API.ChartVO[]>([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<API.ChartQueryRequest>({
    current: 1,
    pageSize: 2,
    chartName: undefined,
  });
  const [total, setTotal] = useState<number>();

  const fetchData = async () => {
    setLoading(true);
    const res = await listChartByPageUsingPost(params);
    if (res.code === 200) {
      setTotal(res.data?.total ?? 0);
      setData(res.data?.records ?? []);
    } else {
      message.error('数据加载失败：' + res.message);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    fetchData();
  }, [params]);

  const chartRender = (item: API.ChartVO) => {
    try {
      const option = JSON.parse(item.generatedChart ?? '{}');
      return <ReactEcharts style={{ minWidth: 400 }} option={option} />;
    } catch (e) {
      return (
        <Result
          status="error"
          title="AI绘图失败"
          subTitle="这次分析AI没能成功给出分析图，您可以尝试重新分析。"
        />
      );
    }
  };
  return (
    <div id="gen-chart-page">
      <Search
        allowClear
        placeholder="请输入图表名称"
        enterButton="搜索"
        size="large"
        loading={loading}
        style={{ maxWidth: 600, marginBottom: 20, marginLeft: 'calc(50% - 300px)' }}
        onSearch={(value) => {
          setParams({ ...params, chartName: value, current: 0 });
        }}
      />
      <List
        loading={loading}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page, pageSize) => {
            setParams({ ...params, current: page, pageSize: pageSize });
          },
          pageSize: params.pageSize,
          total: total,
          current: params.current,
        }}
        dataSource={data}
        renderItem={(item) =>
          (item.status === 'success' && (
            <Card style={{ marginBottom: 20 }}>
              <List.Item key={item.id} extra={chartRender(item)}>
                <List.Item.Meta
                  title={'图表名称：' + item.chartName}
                  description={'分析目标：' + item.goal}
                />
                分析结果：{item.analyzedResult}
              </List.Item>
            </Card>
          )) ||
          (item.status === 'failed' && (
            <Card style={{ marginBottom: 20 }}>
              <List.Item
                key={item.id}
                extra={
                  <Result
                    status="error"
                    title="AI绘图失败"
                    subTitle="这次分析AI没能成功给出分析图，您可以尝试重新分析。"
                  />
                }
              >
                <List.Item.Meta
                  title={'图表名称：' + item.chartName}
                  description={'分析目标：' + item.goal}
                />
                分析结果：分析失败，请重新分析
              </List.Item>
            </Card>
          )) ||
          (item.status === 'processing' && (
            <Card style={{ marginBottom: 20 }}>
              <List.Item
                key={item.id}
                extra={
                  <Result
                    status="warning"
                    title="正在分析中"
                    subTitle="AI正在分析您的图表，请稍后查看。"
                  />
                }
              >
                <List.Item.Meta
                  title={'图表名称：' + item.chartName}
                  description={'分析目标：' + item.goal}
                />
                分析结果：正在分析中
              </List.Item>
            </Card>
          ))
        }
      />
    </div>
  );
};
export default MyChart;
