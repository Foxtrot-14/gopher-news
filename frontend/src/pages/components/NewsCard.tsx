import { Card, Button, Flex, Typography, Badge } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

export interface NewsCardProps {
  title: string;
  articleCount: number;
  id: number;
  onOpen?: () => void;
}

export default function NewsCard({
  title,
  articleCount,
  id,
  onOpen,
}: NewsCardProps) {
  const navigate = useNavigate();

  const handleOpen = () => {
    onOpen ? onOpen() : navigate(`/story/${id}`);
  };

  return (
    <Card
      bordered={false}
      hoverable
      className="rounded-2xl transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(99,102,241,0.04))",
        border: "1px solid rgba(99, 102, 241, 0.25)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
      styles={{
        body: { padding: "22px 26px" },
      }}
    >
      <Flex vertical gap={18}>
        <Title
          level={4}
          style={{
            margin: 0,
            color: "#e0e7ff",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: 1.4,
          }}
        >
          {title}
        </Title>

        <Flex justify="space-between" align="center">
          <Badge
            count={`${articleCount} ${articleCount === 1 ? "article" : "articles"
              }`}
            showZero
            style={{
              backgroundColor: "rgba(99,102,241,0.15)",
              color: "#c7d2fe",
              border: "1px solid rgba(99,102,241,0.4)",
              fontWeight: 500,
            }}
          />

          <Button
            onClick={handleOpen}
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            style={{
              background:
                "linear-gradient(135deg, #6366f1, #4f46e5)",
              color: "#fff",
              borderRadius: "10px",
              border: "none",
              fontWeight: 600,
              padding: "0 18px",
              height: "38px",
              boxShadow: "0 6px 16px rgba(99,102,241,0.4)",
            }}
          >
            View stories
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
