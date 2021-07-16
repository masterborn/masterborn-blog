import { navigate } from "gatsby"

import config from '../../config';

const navigateToWebsiteCarrier = (campaignName) => { campaignName ? navigate(`${config.env.masterbornWebsite}/career/?utm_source=MasterBorn&utm_medium=blog&utm_campaign=${campaignName}`) : navigate(`${config.env.masterbornWebsite}/career`) };

export default navigateToWebsiteCarrier;