
import { useEffect } from "react";
// Use the correct import from frame-sdk
import { Frame } from "@farcaster/frame-sdk";

const FarcasterFrameInitializer = () => {
  useEffect(() => {
    // Only initialize if running in browser context
    if (typeof window !== "undefined") {
      const frame = new Frame({
        // Add your frame configuration here
        initialPath: "/",
        homeframeUrl: "/api/frame", // Update this to your frame endpoint
      });
      
      // Handle frame button clicks
      frame.on("buttonClick", (data) => {
        console.log("Frame button clicked:", data);
      });
    }
  }, []);

  return null;
};

export default FarcasterFrameInitializer;