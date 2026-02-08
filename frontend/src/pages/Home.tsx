import { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Typography,
  Badge,
  Row,
  Col,
  Flex,
} from "antd";
import { ClockCircleOutlined, RedoOutlined } from "@ant-design/icons";
import NewsCard from "./components/NewsCard";
import Logo from "../assets/images/main.svg";
import { useAppState } from "../store/appState";
import { FetchTopics } from "../../wailsjs/go/main/App";

const { Title, Text } = Typography;

type Topic = {
  centroidID: number;
  size: number;
  title: string;
  createdAt: string;
};

export default function Home() {
  const hasRecords = useAppState((s) => s.hasRecords);

  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(false);

  const totalStories = topics.length;

  const loadTopics = () => {
    setLoading(true);
    FetchTopics()
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => {
        console.error("Failed to fetch topics:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (hasRecords) {
      loadTopics();
    }
  }, [hasRecords]);


  return (
    <article className="h-full w-full flex flex-col overflow-hidden">
      <header className="sticky top-0 z-10 pb-6 pt-5 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <Row align="middle">
            <Col flex="1">
              <Flex vertical gap={4}>
                <Title
                  level={1}
                  className="!mb-0 flex items-center gap-4"
                  style={{
                    fontSize: "32px",
                    color: "#e0e7ff",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <img src={Logo} alt="Main Logo" className="h-20" />
                  Gopher News
                </Title>
              </Flex>
            </Col>

            <Col flex="1">
              <Flex align="center" gap={10} justify="center">
                <Text
                  strong
                  style={{
                    fontSize: "18px",
                    color: "#e0e7ff",
                    fontWeight: 600,
                  }}
                >
                  Top Stories for Today
                </Text>
                <Badge
                  count={totalStories}
                  showZero
                  style={{
                    backgroundColor: "#6366f1",
                    color: "#ffffff",
                    fontWeight: 600,
                  }}
                />
              </Flex>
            </Col>

            <Col flex="1">
              <Flex vertical gap={8} align="flex-end">
                <Text
                  strong
                  style={{
                    fontSize: "11px",
                    color: "#a5b4fc",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Select Date
                </Text>
                <DatePicker
                  size="large"
                  format="MMMM DD, YYYY"
                  suffixIcon={
                    <ClockCircleOutlined style={{ color: "#818cf8" }} />
                  }
                  style={{
                    backgroundColor: "rgba(99, 102, 241, 0.15)",
                    borderRadius: "8px",
                  }}
                />
              </Flex>
            </Col>
          </Row>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-16 pt-10 pb-10">
        <div className="max-w-6xl mx-auto">
          <Flex vertical gap="middle" className="w-full">
            {topics.map((topic) => (
              <NewsCard
                key={topic.centroidID}
                title={topic.title}
                articleCount={topic.size}
              />
            ))}

            {!loading && topics.length === 0 && (
              <Text style={{ color: "#a5b4fc" }}>
                No topics available for this date.
              </Text>
            )}
          </Flex>
        </div>
      </main>

      <Button
        onClick={loadTopics}
        type="text"
        size="large"
        icon={<RedoOutlined />}
        iconPosition="end"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          color: "#ffffff",
          backgroundColor: "#dc2626",
          borderRadius: "8px",
          fontWeight: 600,
          boxShadow: "0 4px 12px rgba(220, 38, 38, 0.4)",
          zIndex: 1000,
          padding: "10px 20px",
        }}
      >
        {!hasRecords ? "Fetch" : "Re-Fetch"}
      </Button>
    </article>
  );
}
