import React from 'react';
import { Button, DatePicker, Menu, MenuProps, Slider, Switch, Form, Radio, Space, Modal, notification, Timeline } from 'antd';
import logo from './logo.svg';
import './App.css';

import { MailOutlined, AppstoreOutlined, SettingOutlined, DownloadOutlined, PoweroffOutlined, ClockCircleOutlined  } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://www.google.it" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const marks = {
  0: '50 kV',
  26: '100 kV',
  37: '150 kV',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>200 kV</strong>,
  },
};
function App() {
  
  const [current, setCurrent] = React.useState('mail');
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    openSuccessNotification();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    openErrorNotification();
  };

  const handleDisabledChange = (disabled: boolean) => {
    setDisabled(disabled);
  };

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const openSuccessNotification = () => {
    notification.success({
      message: 'Notification Title',
      description:
        'This is the content of the notification',
    });
  };

  const openErrorNotification = () => {
    notification.error({
      message: 'Notification Title',
      description:
        'This is the content of the notification',
    });
  };

  return (
    <div className="App">
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item label='kV'>
        <Slider marks={marks} defaultValue={30} disabled={disabled} />
      </Form.Item>
      <Form.Item label='Disabled' wrapperCol={{ offset: 0, span: 1 }}>
        <Switch size="small" checked={disabled} onChange={handleDisabledChange} />
      </Form.Item>
      <Form.Item label='Date'  wrapperCol={{ offset: 0, span: 2 }}>
        <DatePicker />
      </Form.Item>
      <Form.Item wrapperCol={{ offset:4, span: 8 }}>
      <Radio.Group value='large'  >
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size='large'>
          Primary
        </Button>
        <Button size='large'>Default</Button>
        <Button type="dashed" size='large'>
          Dashed
        </Button>
        <br />
        <Button type="link" size='large'>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size='large' />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size='large' />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large'>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size='large'>
          Download
        </Button>        
      </Form.Item>
      <Form.Item wrapperCol={{ offset:4, span: 8 }}>
        <Space style={{ width: '100%' }} >
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space style={{ width: '100%' }}>
          <Button type="primary" loading={false} >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={false} >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={false}
          />
        </Space>
      </Form.Item>
      <Form.Item wrapperCol={{ offset:4, span: 8 }}>
        <Timeline mode="alternate">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Technical testing 2015-09-01
          </Timeline.Item>
        </Timeline>
      </Form.Item>
      <Button type="primary" style={{ marginLeft: 8 }} onClick={showModal}>
        Main Button
      </Button>

      <Modal title="Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>You clicked a button</p>
        <p>Click OK or</p>
        <p>Click Cancel</p>
      </Modal>
    </Form>
    </div>
  );
}

export default App;
