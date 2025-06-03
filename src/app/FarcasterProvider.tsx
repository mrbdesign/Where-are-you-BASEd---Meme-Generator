"use client";
import { ReactNode, useEffect } from "react";
import frame from "@farcaster/frame-sdk";

export default function FarcasterProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    frame.actions.ready();
  }, []);

  return <>{children}</>;
}
