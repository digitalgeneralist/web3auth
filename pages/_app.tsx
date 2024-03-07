import { createConfig, WagmiProvider } from "wagmi";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";
import { config } from '../config';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

const queryClient = new QueryClient() 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <WagmiProvider config={config} reconnectOnMount={false} >
      <QueryClientProvider client={queryClient}> 
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
        </QueryClientProvider> 
    </WagmiProvider>
  );
}

export default MyApp;