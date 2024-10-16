import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{tool.name}</CardTitle>
        <CardDescription>{tool.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{tool.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => window.open(tool.url, '_blank')}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;