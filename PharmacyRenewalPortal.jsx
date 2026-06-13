import GovRenewalLayout from './src/components/GovRenewalLayout.jsx';
import { PORTAL_CONFIGS } from './src/portalConfigs.js';

const PharmacyRenewalPortal = () => (
  <GovRenewalLayout config={PORTAL_CONFIGS.pharmacy} />
);

export default PharmacyRenewalPortal;
