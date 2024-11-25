import { Button, Card, Col, message, Modal, Row } from 'antd';
import React, { useState } from 'react';
import SubmitChart from '@/components/SubmitChart/SubmitChart';
import { genChartAsyncByAiUsingPost } from '@/services/SmartCanvas/chartController';

const GenChartAsync: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = async (values: any) => {
    const params = {
      ...values,
      file: undefined,
    };
    setLoading(true);
    const res = await genChartAsyncByAiUsingPost(params, {}, values.file.fileList[0].originFileObj);
    try {
      if (res.code === 200) {
        message.success('图表提交成功！');
        setIsModalOpen(true);
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
            <p>异步分析，将会在后台生成图表，您提交后可以去喝杯茶或者玩玩小游戏休息一下。</p>
          </Card>
        </Col>
      </Row>
      <div className="confirm-box">
        <Modal
          title="图表提交成功"
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => {
            setIsModalOpen(false);
          }}
          footer={[
            <Button key="back" onClick={() => setIsModalOpen(false)}>
              关闭弹窗
            </Button>,
            <Button key="submit" type="primary" href="/game">
              去玩小游戏
            </Button>,
          ]}
        >
          <p>AI正在努力生成图表，请稍后查看。</p>
          <p>不如去喝杯茶或者玩玩小游戏休息一下？</p>
        </Modal>
      </div>
    </div>
  );
};
export default GenChartAsync;
