import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./Button";

//======================================Shiny Background
export const EyeCatchingButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
        "bg-[linear-gradient(110deg,#212121,45%,#E90074,55%,#212121)] text-slate-300 border-brown",
        props.className,
      )}
    />
  );
};
