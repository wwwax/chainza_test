import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const URL =
  'https://api-polygon-tokens.polygon.technology/tokenlists/polygonTokens.tokenlist.json';

const TokenList: React.FC = () => {
  const { data } = useQuery('polygon-tokens-list', async () => {
    return (await axios.get(URL)).data;
  });

  return <ul>{JSON.stringify(data, null, 2)}</ul>;
};

export default TokenList;
