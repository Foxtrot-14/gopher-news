import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  Button,
  Input,
  Row,
  Col,
  Flex,
  Empty,
  Modal,
  Form,
  message,
  Spin,
  Popconfirm,
  ConfigProvider,
  theme,
  Segmented,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import Logo from "../assets/images/main.png";

import {
  FetchFeeds,
  AddNewFeed,
  DeleteFeed,
} from "../../wailsjs/go/main/App";

const { Title, Text } = Typography;

type Feed = {
  ID: number;
  Name: string;
  URL: string;
};

export default function FeedList() {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const loadFeeds = async () => {
    setLoading(true);
    try {
      const data = await FetchFeeds();
      setFeeds(Array.isArray(data) ? data : []);
    } catch (err) {
      message.error("Failed to fetch feeds");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeeds();
  }, []);

  const handleAddFeed = async () => {
    try {
      const values = await form.validateFields();
      await AddNewFeed(values.title, values.url);
      message.success("Feed added successfully");
      setIsModalOpen(false);
      form.resetFields();
      loadFeeds();
    } catch (err) {
      message.error("Failed to add feed");
    }
  };

  const handleRemoveFeed = async (id: number) => {
    try {
      await DeleteFeed(id);
      message.success("Feed removed");
      loadFeeds();
    } catch {
      message.error("Failed to delete feed");
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 8,
          colorBgContainer: "#1e293b",
        },
        components: {
          Segmented: {
            itemSelectedBg: "#6366f1",
            itemSelectedColor: "#fff",
            trackBg: "#1e293b",
          },
        },
      }}
    >
      <article className="h-screen w-full flex flex-col text-slate-200 overflow-hidden">
        <header className="shrink-0 px-6 py-3">
          <Flex align="center" justify="space-between">
            <Flex align="center" gap={12} className="flex-1">
              <img src={Logo} alt="Logo" className="h-24 w-24" />
              <Title level={4} className="!m-0 !text-white !font-bold text-2xl">
                Gopher <span className="text-indigo-600">News</span>
              </Title>
            </Flex>

            <Flex align="center" gap={8} className="flex-1 justify-center">
              <Segmented
                options={[
                  {
                    label: (
                      <Flex align="center" gap={6}>
                        <AppstoreOutlined />
                        <span className="font-medium">Topics</span>
                      </Flex>
                    ),
                    value: "topics",
                  },
                  {
                    label: (
                      <Flex align="center" gap={6}>
                        <UnorderedListOutlined />
                        <span className="font-medium">Feeds</span>
                      </Flex>
                    ),
                    value: "feeds",
                  },
                ]}
                value="feeds"
                onChange={(value) => {
                  if (value === "topics") {
                    navigate("/");
                  }
                }}
              />
            </Flex>

            <Flex align="center" gap={8} className="flex-1 justify-end">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setIsModalOpen(true)}
                className="!bg-indigo-600 hover:!bg-indigo-500"
              >
                Add Feed
              </Button>
            </Flex>
          </Flex>
        </header>

        <main className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Title level={2} className="!text-white !m-0">Manage Feeds</Title>
              <Text type="secondary" className="text-lg">Update your RSS sources</Text>
            </div>

            {loading ? (
              <Flex vertical align="center" justify="center" className="h-64">
                <Spin size="large" />
              </Flex>
            ) : feeds.length === 0 ? (
              <Empty description={<span className="text-slate-400">No feeds configured</span>} />
            ) : (
              <Row gutter={[16, 16]}>
                {feeds.map((feed) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={feed.ID}>
                    <Card
                      hoverable
                      bordered={true}
                      className="!bg-slate-800/50"
                      actions={[
                        <Popconfirm
                          title="Remove this feed?"
                          onConfirm={() => handleRemoveFeed(feed.ID)}
                          okText="Yes"
                          cancelText="No"
                          okButtonProps={{ danger: true }}
                        >
                          <Flex align="center" justify="center" gap={8} className="text-red-400">
                            <DeleteOutlined />
                            <span>Remove</span>
                          </Flex>
                        </Popconfirm>,
                      ]}
                    >
                      <Title level={5} className="!text-white !mt-0 !mb-1">
                        {feed.Name}
                      </Title>
                      <Text type="secondary" ellipsis={{ tooltip: feed.URL }} className="text-xs italic">
                        {feed.URL}
                      </Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </main>

        <Modal
          title="Add RSS Feed"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={handleAddFeed}
          okText="Add"
          centered
        >
          <Form form={form} layout="vertical" className="mt-4">
            <Form.Item
              label="Feed Title"
              name="title"
              rules={[{ required: true, message: "Enter a title" }]}
            >
              <Input placeholder="e.g. BBC News" />
            </Form.Item>
            <Form.Item
              label="Feed URL"
              name="url"
              rules={[
                { required: true, message: "Enter feed URL" },
                { type: "url", message: "Enter a valid URL" },
              ]}
            >
              <Input placeholder="https://example.com/rss" suffix={<LinkOutlined />} />
            </Form.Item>
          </Form>
        </Modal>
      </article>
    </ConfigProvider>
  );
}
