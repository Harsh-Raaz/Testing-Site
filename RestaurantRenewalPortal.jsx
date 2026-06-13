import GovRenewalLayout from './src/components/GovRenewalLayout.jsx';
import { PORTAL_CONFIGS } from './src/portalConfigs.js';

const RestaurantRenewalPortal = () => (
  <GovRenewalLayout config={PORTAL_CONFIGS.restaurant} />
);

export default RestaurantRenewalPortal;
