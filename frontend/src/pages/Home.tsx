import { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Typography,
  Badge,
  Row,
  Col,
  Flex,
  Spin,
  ConfigProvider,
  theme,
} from "antd";
import {
  RedoOutlined,
  CalendarOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import NewsCard from "./components/NewsCard";
import Logo from "../assets/images/main.svg";
import { FetchTopics, GetNews } from "../../wailsjs/go/main/App";
import { EventsOn, EventsOff } from "../../wailsjs/runtime/runtime";

const { Title, Text } = Typography;

type Topic = {
  centroidID: number;
  size: number;
  title: string;
  createdAt: string;
};

const dateKey = (date: string) => `home:topics:${date}`;

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    return localStorage.getItem("home:selectedDate") || new Date().toISOString().split("T")[0];
  });
  const [newsFetched, setNewsFetched] = useState<boolean>(() => {
    const v = localStorage.getItem("home:newsFetched");
    return v ? JSON.parse(v) : false;
  });
  const totalStories = topics.length;

  const loadTopicsForDate = async (date: string) => {
    const cached = localStorage.getItem(dateKey(date));
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
      localStorage.setItem(dateKey(date), JSON.stringify(safeData));
    } catch {
      setTopics([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = () => {
    if (loading) return;
    setLoading(true);
    GetNews();
  };

  useEffect(() => {
    if (!selectedDate) return;
    localStorage.setItem("home:selectedDate", selectedDate);
    loadTopicsForDate(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    const onDone = () => {
      setLoading(false);
      setNewsFetched(true);
      localStorage.setItem("home:newsFetched", JSON.stringify(true));

      const date = localStorage.getItem("home:selectedDate");
      if (date) {
        localStorage.removeItem(dateKey(date));
        loadTopicsForDate(date);
      }
    };

    const onError = (msg: string) => {
      console.error("News fetch failed:", msg);
      setLoading(false);
    };

    EventsOn("news:done", onDone);
    EventsOn("news:error", onError);

    return () => {
      EventsOff("news:done");
      EventsOff("news:error");
    };
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 12,
        },
        components: {
          DatePicker: {
            activeBg: "rgba(255, 255, 255, 0.08)",
          },
        },
      }}
    >
      <article className="h-screen w-full flex flex-col text-slate-200 overflow-hidden">
        <header className="shrink-0 bg-[#0f172a]/40 backdrop-blur-2xl px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <Row align="middle" gutter={[32, 24]}>
              <Col xs={24} md={8}>
                <Flex align="center" gap={16}>
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-14 w-14 drop-shadow-2xl"
                  />
                  <Title
                    level={2}
                    className="!m-0 !text-white !font-black tracking-tight"
                  >
                    Gopher <span className="text-indigo-400">News</span>
                  </Title>
                </Flex>
              </Col>

              <Col xs={12} md={8}>
                <Flex align="center" gap={12} justify="center">
                  <Text className="!text-slate-500 !text-xs uppercase tracking-[0.2em] font-black">
                    Daily Briefing
                  </Text>
                  <Badge
                    count={totalStories}
                    showZero
                    overflowCount={999}
                    style={{
                      backgroundColor: "#6366f1",
                      boxShadow:
                        "0 8px 24px -4px rgba(99, 102, 241, 0.4)",
                      border: "none",
                    }}
                  />
                </Flex>
              </Col>

              <Col xs={12} md={8}>
                <Flex justify="flex-end">
                  <DatePicker
                    value={selectedDate ? undefined : undefined}
                    onChange={(_, dateString) => {
                      if (typeof dateString === "string" && dateString) {
                        setSelectedDate(dateString);
                      }
                    }}
                    placeholder="Select Date"
                    variant="filled"
                    className="w-full max-w-[180px] !bg-white/5 hover:!bg-white/10"
                    suffixIcon={
                      <CalendarOutlined className="text-indigo-400" />
                    }
                    size="large"
                  />
                </Flex>
              </Col>
            </Row>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pt-4 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <Flex
                vertical
                align="center"
                justify="center"
                className="min-h-[50vh]"
              >
                <Spin size="large" />
              </Flex>
            ) : topics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Flex
                vertical
                align="center"
                justify="center"
                className="min-h-[50vh]"
              >
                <InboxOutlined className="text-7xl text-slate-800 mb-6" />
                <Text className="!text-slate-500 text-xl font-light tracking-wide">
                  {selectedDate
                    ? "No stories found for this day"
                    : "Pick a date to see stories"}
                </Text>
              </Flex>
            )}
          </div>
        </main>

        <div className="fixed bottom-10 right-10 z-50">
          <Button
            type="primary"
            size="large"
            icon={
              <RedoOutlined className={loading ? "animate-spin" : ""} />
            }
            onClick={fetchNews}
            className="!h-16 !px-10 !rounded-full !bg-indigo-600 hover:!bg-indigo-500 !border-none transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(99,102,241,0.3)]"
          >
            <span className="font-bold text-lg tracking-tight">
              {topics.length !== 0 ? "Refresh" : "Fetch"}
            </span>
          </Button>
        </div>
      </article>
    </ConfigProvider>
  );
}

