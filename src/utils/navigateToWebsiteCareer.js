import { navigate } from 'gatsby';

const navigateToWebsiteCareer = campaignName =>
  navigate(
    campaignName
      ? `../career/?utm_source=MasterBorn&utm_medium=blog&utm_campaign=${campaignName}/`
      : `../career/`
  );
export default navigateToWebsiteCareer;
