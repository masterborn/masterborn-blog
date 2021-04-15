import algoliasearch from "algoliasearch/lite"
import  { useState } from 'react';

import config from '../../config';

const useAlgoliaSearch = () => {
  const [query, setQuery] = useState();
  const searchClient = algoliasearch(
    config.algolia.appId,
    config.algolia.searchKey
  );
  const { indexName } = config.algolia;
  return { searchClient, setQuery, indexName };
  }

export default useAlgoliaSearch;