import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Form, Input, message, Select } from 'coding-oa-uikit';

// 项目内
import { t } from '@src/i18n/i18next';
import { putNode } from '@src/services/nodes';

// 模块内
import { STATUS_OPTIONS } from './constants';

const { Option } = Select;

interface IProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  nodeinfo: any;
  tagOptions: Array<any>;
  members: Array<any>;
}

const NodeModal = ({ nodeinfo, visible, onOk, onCancel, tagOptions, members }: IProps) => {
  const [form] = Form.useForm();
  const { orgSid }: any = useParams();

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [visible]);

  /**
   * 表单保存操作
   * @param formData 参数
   */
  const onSubmitHandle = () => {
    form.validateFields().then((formData) => {
      putNode(orgSid, nodeinfo.id, formData).then(() => {
        message.success(t('已更新节点'));
        onOk();
      });
    });
  };

  return (
    <Modal
      forceRender
      title={t('更新节点')}
      visible={visible}
      onOk={onSubmitHandle}
      onCancel={onCancel}
      afterClose={form.resetFields}
    >
      <Form layout={'vertical'} form={form} initialValues={nodeinfo || {}}>
        <Form.Item
          name="name"
          label={t('节点名称')}
          rules={[{ required: true, message: t('节点名称为必填项') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="addr" label="IP 地址">
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="exec_tags"
          label="所属标签"
          rules={[{ required: true, message: t('节点标签为必选项') }]}
        >
          <Select mode="multiple">
            {/* 团队节点仅能使用团队标签 */}
            {tagOptions.filter(item => item.org_sid === nodeinfo?.org_sid).map((item: any) => (
              <Option key={item.value} value={item.value}>
                {item.text}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="enabled"
          label="节点可用性"
          rules={[{ required: true, message: t('节点可用性为必选项') }]}
        >
          <Select>
            {STATUS_OPTIONS.map((item: any) => (
              <Option key={item.value} value={item.value}>
                {item.text}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="related_managers"
          label="关注人"
        >
          <Select mode="multiple">
            {members.map((item: any) => (
              <Option key={item.username} value={item.username}>
                {item.nickname}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="manager"
          label="管理员"
          rules={[{ required: true, message: t('管理员为必填项') }]}
        >
          <Select showSearch>
            {members.map((item: any) => (
              <Option key={item.username} value={item.username}>
                {item.nickname}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NodeModal;
