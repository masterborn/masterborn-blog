import { navigate } from 'gatsby';

import config from '../../config';

const navigateToWebsiteCareer = campaignName =>
  campaignName
    ? (window.location.href = `${config.env.masterbornWebsite}/career/?utm_campaign=${campaignName}`)
    : navigate('/career');


export default navigateToWebsiteCareer;
