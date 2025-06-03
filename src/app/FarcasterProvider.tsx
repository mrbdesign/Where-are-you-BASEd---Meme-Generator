"use client";
import { ReactNode, useEffect } from "react";
import { Farcaster } from "@farcaster/sdk";

export default function FarcasterProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const farcaster = new Farcaster();
    farcaster.ready();
  }, []);

  return <>{children}</>;
}