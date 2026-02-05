import Router from "./routes/sections";
import { ConfigProvider, theme } from "antd";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgContainer: "#0f172a",
          colorText: "#e5e7eb",
          colorTextSecondary: "#9ca3af",
          colorBorder: "#1e293b",
          colorPrimary: "#3b82f6",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}
