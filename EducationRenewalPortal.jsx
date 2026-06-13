import GovRenewalLayout from './src/components/GovRenewalLayout.jsx';
import { PORTAL_CONFIGS } from './src/portalConfigs.js';

const EducationRenewalPortal = () => (
  <GovRenewalLayout config={PORTAL_CONFIGS.education} />
);

export default EducationRenewalPortal;
