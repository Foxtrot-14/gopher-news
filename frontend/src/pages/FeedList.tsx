import { useEffect, useState } from "react";
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
  Popconfirm,
  Spin,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

type Feed = {
  id: string;
  title: string;
  url: string;
};

export default function FeedList() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const stored = localStorage.getItem("user:feeds");
    if (stored) {
      setFeeds(JSON.parse(stored));
    }
  }, []);

  const saveFeeds = (newFeeds: Feed[]) => {
    setFeeds(newFeeds);
    localStorage.setItem("user:feeds", JSON.stringify(newFeeds));
  };

  const handleAddFeed = async () => {
    try {
      const values = await form.validateFields();
      const newFeed: Feed = {
        id: Date.now().toString(),
        title: values.title,
        url: values.url,
      };

      const updated = [...feeds, newFeed];
      saveFeeds(updated);

      form.resetFields();
      setIsModalOpen(false);
      message.success("Feed added successfully");
    } catch (err) {
    }
  };

  const handleRemoveFeed = (id: string) => {
    const updated = feeds.filter((f) => f.id !== id);
    saveFeeds(updated);
    message.success("Feed removed");
  };

  return (
    <main style={{ padding: "24px", maxWidth: 1100, margin: "0 auto" }}>
      <Flex justify="space-between" align="center" style={{ marginBottom: 24 }}>
        <div>
          <Title level={3} style={{ marginBottom: 0 }}>
            Your RSS Feeds
          </Title>
          <Text type="secondary">
            Manage the news sources powering Gopher News
          </Text>
        </div>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Add Feed
        </Button>
      </Flex>

      {loading ? (
        <Flex justify="center" style={{ marginTop: 80 }}>
          <Spin size="large" />
        </Flex>
      ) : feeds.length === 0 ? (
        <Empty
          description="No RSS feeds added yet"
          style={{ marginTop: 80 }}
        />
      ) : (
        <Row gutter={[16, 16]}>
          {feeds.map((feed) => (
            <Col xs={24} sm={12} md={8} key={feed.id}>
              <Card
                hoverable
                actions={[
                  <Popconfirm
                    title="Remove this feed?"
                    onConfirm={() => handleRemoveFeed(feed.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined />
                  </Popconfirm>,
                ]}
              >
                <Title level={5}>{feed.title}</Title>
                <Text type="secondary" ellipsis>
                  {feed.url}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal
        title="Add RSS Feed"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddFeed}
        okText="Add"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Feed Title"
            name="title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input placeholder="e.g. TechCrunch" />
          </Form.Item>

          <Form.Item
            label="Feed URL"
            name="url"
            rules={[
              { required: true, message: "Please enter feed URL" },
              { type: "url", message: "Enter a valid URL" },
            ]}
          >
            <Input placeholder="https://example.com/rss" />
          </Form.Item>
        </Form>
      </Modal>
    </main>
  );
}
