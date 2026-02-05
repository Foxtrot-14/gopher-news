import { Button, DatePicker, Typography, Badge, Row, Col, Flex } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { RedoOutlined } from "@ant-design/icons";
import NewsCard from "./components/NewsCard";
import Logo from "../assets/images/main.svg";

const { Title, Text } = Typography;

export default function Home() {
  const totalStories = 25;

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
                    letterSpacing: "-0.01em",
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
                    border: "1px solid rgba(99, 102, 241, 0.4)",
                    fontWeight: 600,
                    fontSize: "13px",
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
                  placeholder="Choose a date"
                  suffixIcon={<ClockCircleOutlined style={{ color: "#818cf8" }} />}
                  style={{
                    backgroundColor: "rgba(99, 102, 241, 0.15)",
                    borderColor: "rgba(139, 92, 246, 0.4)",
                    fontWeight: 500,
                    color: "#e0e7ff",
                    borderRadius: "8px",
                    padding: "8px 12px",
                  }}
                  className="custom-datepicker"
                />
              </Flex>
            </Col>
          </Row>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-16 pt-10 pb-10 relative">
        <div className="max-w-6xl mx-auto">
          <Flex vertical gap="middle" className="w-full">
            <NewsCard title="India Budget Highlights" articleCount={8} />
            <NewsCard title="US–China Relations" articleCount={5} />
            <NewsCard title="AI & Open Source" articleCount={12} />
            <NewsCard title="Climate Tech Innovations" articleCount={6} />
            <NewsCard title="Space Exploration Updates" articleCount={9} />
            <NewsCard title="Renewable Energy Trends" articleCount={7} />
            <NewsCard title="Cybersecurity Alerts" articleCount={4} />
            <NewsCard title="Global Market Analysis" articleCount={11} />
          </Flex>
        </div>
      </main>

      <Button
        type="text"
        size="large"
        icon={<RedoOutlined />}
        iconPosition="end"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          color: '#ffffff',
          backgroundColor: '#dc2626',
          border: '1px solid rgba(220, 38, 38, 0.4)',
          borderRadius: '8px',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
          zIndex: 1000,
          padding: '10px 20px',
        }}
        className="hover:bg-red-700 transition-colors"
      >
        Re-Fetch
      </Button>
    </article>
  );
}
