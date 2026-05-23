import { Home } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function BackHomeButton() {
  return (
    <Button variant="outline" asChild className="mb-6">
      <Link to="/">
        <Home />
        返回入口
      </Link>
    </Button>
  );
}
