import GovRenewalLayout from './src/components/GovRenewalLayout.jsx';
import { PORTAL_CONFIGS } from './src/portalConfigs.js';

const HospitalRenewalPortal = () => (
  <GovRenewalLayout config={PORTAL_CONFIGS.hospital} />
);

export default HospitalRenewalPortal;
