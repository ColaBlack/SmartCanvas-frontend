import { Button, Form, Input, Select, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { InboxOutlined } from '@ant-design/icons';
import React from 'react';

export type SubmitProps = {
  loading: boolean;
  onFinish: (values: any) => void;
};

const SubmitChart: React.FC<SubmitProps> = ({ loading, onFinish }) => {
  return (
    <div id="submit-chart">
      <Form
        name="validate_other"
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
          'color-picker': null,
        }}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="图表名称"
          name="chartName"
          rules={[{ required: true, message: '请输入图表名称!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="分析目的"
          name="goal"
          rules={[{ required: true, message: '请输入数据分析目的!' }]}
        >
          <TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item label="分析图表类型" name="chartType">
          <Select placeholder="选择一个可视化图表（非必选）" allowClear={true}>
            <Select.Option value="折线图line">折线图</Select.Option>
            <Select.Option value="柱状图bar">柱状图</Select.Option>
            <Select.Option value="饼状图pie">饼状图</Select.Option>
            <Select.Option value="散点图scatter">散点图</Select.Option>
            <Select.Option value="k线图candlestick">K线图</Select.Option>
            <Select.Option value="雷达图radar">雷达图</Select.Option>
            <Select.Option value="热力图heatmap">热力图</Select.Option>
            <Select.Option value="旭日图sunburst">旭日图</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="file"
          label="数据文件"
          rules={[{ required: true, message: '请上传数据文件!' }]}
        >
          <Upload.Dragger name="files" action="/upload.do" maxCount={1} accept={'.xlsx'}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖动文件到此区域</p>
            <p className="ant-upload-hint">只支持上传1MB以内的单个xlsx格式文件</p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              提交
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SubmitChart;
