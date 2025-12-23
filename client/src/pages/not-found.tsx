import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] text-white">
      <Card className="w-full max-w-md mx-4 bg-white/5 border-white/10 backdrop-blur-sm">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <AlertCircle className="h-12 w-12 text-purple-500" />
            <h1 className="text-3xl font-bold font-display">Page Not Found</h1>
          </div>

          <p className="mb-6 text-gray-400">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link href="/">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Return to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
