import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./Button";

//======================================Shiny Background
export const EyeCatchingButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
        "bg-[linear-gradient(110deg,#FFF2D8,45%,#AF8F6F,55%,#FFF2D8)] text-brown border-brown",
        props.className,
      )}
    />
  );
};
