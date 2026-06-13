import GovRenewalLayout from './src/components/GovRenewalLayout.jsx';
import { PORTAL_CONFIGS } from './src/portalConfigs.js';

const HotelRenewalPortal = () => (
  <GovRenewalLayout config={PORTAL_CONFIGS.hotel} />
);

export default HotelRenewalPortal;
