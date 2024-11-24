import React, { useState } from 'react';
import { listChartByPageUsingPost } from '@/services/SmartCanvas/chartController';
import { Card, List, message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import Search from 'antd/es/input/Search';

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
        renderItem={(item) => (
          <Card style={{ marginBottom: 20 }}>
            <List.Item
              key={item.id}
              extra={
                <ReactEcharts
                  style={{ minWidth: 400 }}
                  option={{ ...JSON.parse(item.generatedChart ?? '{}') }}
                />
              }
            >
              <List.Item.Meta
                title={'图表名称：' + item.chartName}
                description={'分析目标：' + item.goal}
              />
              分析结果：{item.analyzedResult}
            </List.Item>
          </Card>
        )}
      />
    </div>
  );
};
export default MyChart;
