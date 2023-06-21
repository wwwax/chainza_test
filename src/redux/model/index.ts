export interface TokenData {
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  logoURI: string;
  tags: Array<string>;
  extensions: Extensions;
}

interface Extensions {
  rootAddress: string;
}
