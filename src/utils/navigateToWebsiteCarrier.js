import { navigate } from "gatsby"

import config from '../../config';

const navigateToWebsiteCarrier = () => { navigate(`${config.env.masterbornWebsite}/career`) };

export default navigateToWebsiteCarrier;