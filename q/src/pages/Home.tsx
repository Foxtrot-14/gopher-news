import NewsCard from "./component/NewsCard";

export default function Home() {
  return (
    <article className="h-full w-full flex items-start">
      <NewsCard
        title="New Version of Go Launched"
        description="Go 1.24 introduces performance improvements and better tooling."
        date="Feb 6, 2026"
      />
    </article>
  );
}
