import { Typography, Card, Button, Flex, Tag, Spin, Empty } from "antd";
import { ExportOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BrowserOpenURL } from "../../wailsjs/runtime/runtime";
import { GetStoriesFromCentroid } from "../../wailsjs/go/main/App";

const { Title, Text } = Typography;

type Story = {
  title: string;
  description: string;
  link: string;
  pub_date: string;
};

export default function Stories() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    GetStoriesFromCentroid(id)
      .then((data) => setStories(Array.isArray(data) ? data : []))
      .catch(() => setStories([]))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <article className="h-full w-full flex flex-col overflow-hidden">
      <header
        className="sticky top-0 z-10 p-8 backdrop-blur-lg relative"
        style={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}
      >
        <div
          onClick={() => navigate(-1)}
          className="flex items-center justify-center rounded-full absolute left-8 top-1/2 -translate-y-1/2"
          style={{
            width: 44,
            height: 44,
            border: "1px solid rgba(99, 102, 241, 0.35)",
            backgroundColor: "rgba(99, 102, 241, 0.08)",
            cursor: "pointer",
          }}
        >
          <ArrowLeftOutlined style={{ fontSize: 20, color: "#e0e7ff" }} />
        </div>

        <Flex vertical gap={4} align="center">
          <Title level={1} style={{ color: "#e0e7ff" }}>
            Related Stories
          </Title>
          <Text style={{ color: "#94a3b8" }}>
            {stories.length} articles
          </Text>
        </Flex>
      </header>

      <main className="flex-1 overflow-y-auto px-16 pt-10 pb-10">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <Flex justify="center" className="mt-20">
              <Spin size="large" />
            </Flex>
          ) : stories.length === 0 ? (
            <Empty description="No stories found" />
          ) : (
            <Flex vertical gap={24}>
              {stories.map((story, idx) => (
                <Card
                  key={idx}
                  bordered={false}
                  hoverable
                  className="rounded-2xl"
                  style={{
                    backgroundColor: "rgba(99, 102, 241, 0.08)",
                    border: "1px solid rgba(99, 102, 241, 0.25)",
                  }}
                >
                  <Flex vertical gap={16}>
                    <Flex justify="space-between">
                      <Tag color="geekblue">News</Tag>
                      <Text style={{ color: "#64748b", fontSize: 13 }}>
                        {story.pub_date}
                      </Text>
                    </Flex>

                    <Title level={4} style={{ color: "#e0e7ff" }}>
                      {story.title}
                    </Title>

                    <Text style={{ color: "#94a3b8" }}>
                      {story.description}
                    </Text>

                    <Flex justify="flex-end">
                      <Button
                        type="primary"
                        icon={<ExportOutlined />}
                        onClick={() => story.link && BrowserOpenURL(story.link)}
                      >
                        Full Story
                      </Button>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Flex>
          )}
        </div>
      </main>
    </article>
  );
}

