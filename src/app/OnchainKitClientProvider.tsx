// import { OnchainKitProvider } from "@coinbase/onchainkit";
// import { base } from "viem/chains";

export default function OnchainKitClientProvider({ children }: { children: React.ReactNode }) {
  // return (
  //   <OnchainKitProvider apiKey={process.env.NEXT_PUBLIC_CDP_CLIENT_API_KEY} chain={base}>
  //     {children}
  //   </OnchainKitProvider>
  // );
  return <>{children}</>;
}
