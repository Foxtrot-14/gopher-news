import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  description?: string;
  date: string;
}

export default function NewsCard({
  title,
  description,
  date,
}: NewsCardProps) {
  return (
    <Card
      className="
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        cursor-pointer
      "
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold leading-snug">
          {title}
        </CardTitle>
      </CardHeader>

      {description && (
        <CardContent className="pt-0 text-sm text-muted-foreground">
          {description}
        </CardContent>
      )}

      <CardFooter className="pt-2 text-xs text-muted-foreground">
        {date}
      </CardFooter>
    </Card>
  );
}
