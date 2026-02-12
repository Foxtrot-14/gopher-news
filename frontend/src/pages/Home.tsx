import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import {
  Button,
  DatePicker,
  Typography,
  Badge,
  Flex,
  Spin,
  ConfigProvider,
  theme,
  Segmented,
} from "antd";
import {
  RedoOutlined,
  CalendarOutlined,
  InboxOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import NewsCard from "./components/NewsCard";
import Logo from "../assets/images/main.png";
import { FetchTopics, GetNews } from "../../wailsjs/go/main/App";

const { Title, Text } = Typography;

type Topic = {
  centroidID: number;
  size: number;
  title: string;
  createdAt: string;
};

const dateKey = (date: string) => `home:topics:${date}`;

export default function Home() {
  const navigate = useNavigate();
  const today = dayjs().format("YYYY-MM-DD");
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(today);

  const isToday = selectedDate === today;
  const totalStories = topics.length;

  const loadTopicsForDate = async (date: string) => {
    const cached = sessionStorage.getItem(dateKey(date));
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setTopics(parsed);
        return;
      }
    }

    setLoading(true);
    try {
      const data = await FetchTopics(date);
      const safeData = Array.isArray(data) ? data : [];
      setTopics(safeData);
      if (safeData.length > 0) {
        sessionStorage.setItem(dateKey(date), JSON.stringify(safeData));
      } else {
        sessionStorage.removeItem(dateKey(date));
      }
    } catch {
      setTopics([]);
      sessionStorage.removeItem(dateKey(date));
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      await GetNews();
    } finally {
      try {
        const data = await FetchTopics(today);
        const safeData = Array.isArray(data) ? data : [];
        setTopics(safeData);
        if (safeData.length > 0) {
          sessionStorage.setItem(dateKey(today), JSON.stringify(safeData));
        } else {
          sessionStorage.removeItem(dateKey(today));
        }
      } catch {
        setTopics([]);
        sessionStorage.removeItem(dateKey(today));
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadTopicsForDate(today);
  }, []);

  useEffect(() => {
    loadTopicsForDate(selectedDate);
  }, [selectedDate]);

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
          DatePicker: {
            activeBg: "rgba(255, 255, 255, 0.08)",
          },
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
                value="topics"
                onChange={(value) => {
                  if (value === "feeds") navigate("/feeds");
                }}
              />
              <Badge
                count={totalStories}
                showZero
                overflowCount={999}
                style={{ backgroundColor: "#6366f1" }}
              />
            </Flex>

            <Flex align="center" gap={8} className="flex-1 justify-end">
              <DatePicker
                value={dayjs(selectedDate)}
                allowClear={false}
                onChange={(_, dateString) => {
                  if (typeof dateString === "string" && dateString) {
                    setSelectedDate(dateString);
                  }
                }}
                placeholder="Select Date"
                className="h-10 w-[160px] !bg-slate-800 hover:!bg-slate-700"
                suffixIcon={<CalendarOutlined className="text-indigo-400" />}
              />
              {isToday && (
                <Button
                  type="text"
                  icon={<RedoOutlined className={loading ? "animate-spin" : ""} />}
                  onClick={fetchNews}
                  loading={loading}
                  className="!text-indigo-400 hover:!bg-slate-800"
                >
                  {topics.length !== 0 ? "Refresh" : "Fetch"}
                </Button>
              )}
            </Flex>
          </Flex>
        </header>

        <main className="flex-1 overflow-y-auto px-6 py-6">
          {loading ? (
            <Flex vertical align="center" justify="center" className="h-full">
              <Spin size="large" />
              <Text className="!text-slate-500 mt-4">Syncing latest stories...</Text>
            </Flex>
          ) : topics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {topics.map((topic) => (
                <NewsCard
                  key={topic.centroidID}
                  title={topic.title}
                  id={topic.centroidID}
                  articleCount={topic.size}
                />
              ))}
            </div>
          ) : (
            <Flex vertical align="center" justify="center" className="h-full">
              <InboxOutlined className="text-7xl text-slate-800 mb-4" />
              <Text className="!text-slate-400 text-lg mb-4">
                {`No news for ${dayjs(selectedDate).format("MMMM D, YYYY")}`}
              </Text>
              {isToday && (
                <Button
                  type="primary"
                  size="large"
                  onClick={fetchNews}
                  className="!bg-indigo-600 hover:!bg-indigo-500"
                >
                  Fetch Today's News
                </Button>
              )}
            </Flex>
          )}
        </main>
      </article>
    </ConfigProvider>
  );
}
