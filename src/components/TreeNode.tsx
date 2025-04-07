
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface TreeNodeProps {
  title: string;
  children?: React.ReactNode;
  content?: React.ReactNode;
  defaultExpanded?: boolean;
}

const TreeNode = ({
  title,
  children,
  content,
  defaultExpanded = false
}: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const hasChildren = !!children;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tree-node">
      <div className="tree-node-content">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={toggleExpanded}
        >
          {hasChildren && (
            <span className="mr-2 text-islamic-green">
              {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </span>
          )}
          <h3 className="font-medium">{title}</h3>
        </div>
        
        {content && (
          <div className={`mt-2 pl-4 text-gray-700 ${isExpanded ? "animate-fade-in" : "hidden"}`}>
            {content}
          </div>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="tree-node-children animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
