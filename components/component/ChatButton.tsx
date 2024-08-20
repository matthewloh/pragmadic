import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type ChatButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ChatButton({ className, children }: ChatButtonProps) {
  return (
    <Button
      className={cn("text-3xl font-bold tracking-tight lg:text-3xl", className)}
    >
      {children}
    </Button>
  );
}
