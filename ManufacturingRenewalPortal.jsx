import GovRenewalLayout from './src/components/GovRenewalLayout.jsx';
import { PORTAL_CONFIGS } from './src/portalConfigs.js';

const ManufacturingRenewalPortal = () => (
  <GovRenewalLayout config={PORTAL_CONFIGS.manufacturing} />
);

export default ManufacturingRenewalPortal;
