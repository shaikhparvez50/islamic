
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const ContentCard = ({ title, children, className = "", icon }: ContentCardProps) => {
  return (
    <Card className={`islamic-card shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden ${className} hover:-translate-y-2`}>
      <CardHeader className="bg-gradient-to-r from-islamic-lightgreen to-islamic-lightblue border-b border-islamic-green/20">
        <CardTitle className="text-islamic-green flex items-center gap-2 group">
          {icon && (
            <span className="transition-transform duration-500 group-hover:scale-125 text-islamic-blue">
              {icon}
            </span>
          )}
          <span className="transition-colors duration-300 group-hover:text-islamic-blue">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 bg-white bg-opacity-95">
        {children}
      </CardContent>
    </Card>
  );
};

export default ContentCard;
