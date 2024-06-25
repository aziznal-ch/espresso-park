import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[100vh] items-center justify-center gap-10 flex-wrap">
      {children}
    </div>
  );
}
