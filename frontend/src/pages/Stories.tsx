import { Typography, Card, Button, Row, Col, Flex, Tag } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const storyCategory = "India Budget Highlights";
const stories = [
  {
    id: 1,
    title: "Finance Minister Announces Major Tax Reforms in 2025 Budget",
    description: "The budget includes significant changes to income tax slabs and corporate tax rates, aimed at boosting economic growth and reducing fiscal deficit.",
    publisher: "The Economic Times",
    publishedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Healthcare Allocation Increased by 15% in New Budget",
    description: "Government commits to improving public health infrastructure with increased funding for hospitals and medical research programs.",
    publisher: "Times of India",
    publishedAt: "3 hours ago",
  },
];

export default function Stories() {
  const navigate = useNavigate();
  return (
    <article className="h-full w-full flex flex-col overflow-hidden">

      <header
        className="sticky top-0 z-10 p-8 backdrop-blur-lg relative"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }}
      >
        <div
          onClick={() => navigate(-1)}
          className="flex items-center justify-center rounded-full transition-all absolute left-8 top-1/2 -translate-y-1/2"
          style={{
            width: 44,
            height: 44,
            border: '1px solid rgba(99, 102, 241, 0.35)',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            cursor: 'pointer',
          }}
        >
          <ArrowLeftOutlined
            style={{ fontSize: '20px', color: '#e0e7ff' }}
          />
        </div>

        <Flex vertical gap={4} align="center">
          <Title
            level={1}
            className="!mb-0"
            style={{
              fontSize: '36px',
              color: '#e0e7ff',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            {storyCategory}
          </Title>

          <Text
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              textAlign: 'center',
            }}
          >
            {stories.length} articles from top publishers
          </Text>
        </Flex>
      </header>

      <main className="flex-1 overflow-y-auto px-16 pt-10 pb-10">
        <div className="max-w-6xl mx-auto">
          <Flex vertical gap="middle" className="w-full">
            {stories.map((story) => (
              <Card
                key={story.id}
                bordered={false}
                className="rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: 'rgba(99, 102, 241, 0.08)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                hoverable
                styles={{
                  body: { padding: '28px 32px' }
                }}
              >
                <Flex vertical gap={16}>
                  <Flex justify="space-between" align="center">
                    <Tag
                      bordered={false}
                      style={{
                        backgroundColor: 'rgba(99, 102, 241, 0.15)',
                        color: '#a5b4fc',
                        padding: '4px 12px',
                        fontSize: '13px',
                        fontWeight: 600,
                        border: 'none',
                      }}
                    >
                      {story.publisher}
                    </Tag>
                    <Text style={{ fontSize: '13px', color: '#64748b' }}>
                      {story.publishedAt}
                    </Text>
                  </Flex>

                  <Title
                    level={4}
                    className="!mb-0"
                    style={{
                      fontSize: '20px',
                      lineHeight: '1.4',
                      color: '#e0e7ff',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {story.title}
                  </Title>

                  <Text
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#94a3b8',
                    }}
                  >
                    {story.description}
                  </Text>

                  <Flex justify="flex-end">
                    <Button
                      type="primary"
                      size="large"
                      icon={<ExportOutlined style={{ fontSize: '16px' }} />}
                      iconPosition="end"
                      style={{
                        backgroundColor: '#6366f1',
                        borderColor: '#6366f1',
                        borderRadius: '12px',
                        fontWeight: 600,
                        height: '48px',
                        padding: '0 24px',
                        fontSize: '15px',
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                      }}
                      className="hover:bg-indigo-500 transition-all"
                    >
                      Full Story
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        </div>
      </main>
    </article >
  );
}
