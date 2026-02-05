import { Card, Button, Flex, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

export interface NewsCardProps {
  title: string;
  articleCount: number;
  onOpen?: () => void;
}

export default function NewsCard({
  title,
  articleCount,
  onOpen,
}: NewsCardProps) {
  const navigate = useNavigate();

  const handleOpen = () => {
    if (onOpen) {
      onOpen();
    } else {
      navigate('/story/1');
    }
  };

  return (
    <Card
      bordered={false}
      className="rounded-xl transition-all duration-300 hover:scale-[1.01]"
      style={{
        backgroundColor: 'rgba(99, 102, 241, 0.06)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        backdropFilter: 'blur(10px)',
      }}
      hoverable
      styles={{
        body: { padding: '20px 24px' }
      }}
    >
      <Flex vertical gap={16}>
        <Text
          strong
          style={{
            fontSize: '18px',
            lineHeight: '1.4',
            color: '#e0e7ff',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </Text>
        <Flex justify="space-between" align="center">
          <Text style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 500 }}>
            {articleCount} {articleCount === 1 ? 'article' : 'articles'}
          </Text>
          <Button
            type="text"
            size="middle"
            onClick={handleOpen}
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            style={{
              color: '#ffffff',
              backgroundColor: '#6366f1',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              borderRadius: '8px',
              fontWeight: 600,
            }}
            className="hover:bg-indigo-600 transition-colors"
          >
            View Stories
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
