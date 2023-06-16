import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import { TokenData } from '@/model';

import Token from './Token';

const URL =
  'https://api-polygon-tokens.polygon.technology/tokenlists/polygonTokens.tokenlist.json';

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
          <Token token={token} />
        </li>
      ))}
    </ul>
  );
};

export default TokenList;
