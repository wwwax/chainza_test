import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import Token from './Token';

const URL =
  'https://api-polygon-tokens.polygon.technology/tokenlists/polygonTokens.tokenlist.json';

interface TokenData {
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

const TokenList: React.FC = () => {
  const { data, isLoading } = useQuery('polygon-tokens-list', () => {
    return axios.get(URL).then((res) => res.data.tokens);
  });

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <ul>
      {data.map((token: TokenData) => (
        <li key={token.name}>
          <Token
            name={token.name}
            symbol={token.symbol}
            logoURI={token.logoURI}
          />
        </li>
      ))}
    </ul>
  );
};

export default TokenList;
