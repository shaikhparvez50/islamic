
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const ContentCard = ({ title, children, className = "", icon }: ContentCardProps) => {
  return (
    <Card className={`islamic-card shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}>
      <CardHeader className="bg-islamic-green/5 border-b border-islamic-green/10">
        <CardTitle className="text-islamic-green flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default ContentCard;
