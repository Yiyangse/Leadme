import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Card, Row, Col, Grid } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid; // 반응형 디자인을 위한 hook 사용

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const screens = useBreakpoint(); // 반응형 디자인을 위한 hook

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>My page</Breadcrumb.Item>
          <Breadcrumb.Item>대시보드</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Row gutter={[24, 24]} justify="center"> {/* Row 사용 */}
              <Col xs={24} sm={12} md={8}> {/* 반응형 디자인: 화면 크기에 따라 열의 너비 조절 */}
                <Card title="무드 컬러 그래프" size="small">
                  <p>Card content</p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card title="글쓰기 현황" size="small">
                  <p>Card content</p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card title="글쓰기 작성 일수" size="small">
                  <p>Card content</p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card title="감정 변화 그래프" size="small">
                  <p>Card content</p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card title="나의 마음 구름" size="small">
                  <p>Card content</p>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card title="'user'님을 위한 콘텐츠 추천" size="small">
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
