interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <article className="h-screen w-screen relative">
      {children}
    </article>
  );
}
