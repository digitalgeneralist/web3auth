import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { createClient} from 'viem' 


export const config: any = createConfig({
  chains: [mainnet, sepolia],
  client({ chain }) { 
    return createClient({ chain, transport: http('https://...') }) 
  }, 
})