import { useState, useEffect } from 'react';
import axios from 'axios';

import config from '../../config';

let cachedIsInPoland = null;

function useIsInPoland() {
  const [isInPoland, setIsInPoland] = useState(cachedIsInPoland);

  useEffect(() => {
    const { url, countryCode } = config.custom.localization;
    if (cachedIsInPoland === null) {
      axios.get(url)
        .then((response) => {
          const { country } = response.data;
          const isSameCountry = country === countryCode;
          cachedIsInPoland = isSameCountry;
          setIsInPoland(isSameCountry);
        });
    }
  });

  return isInPoland;
}

export default useIsInPoland;
