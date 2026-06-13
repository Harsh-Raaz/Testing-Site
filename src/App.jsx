import { useState } from 'react';
import EducationRenewalPortal from '../EducationRenewalPortal.jsx';
import HospitalRenewalPortal from '../HospitalRenewalPortal.jsx';
import HotelRenewalPortal from '../HotelRenewalPortal.jsx';
import ManufacturingRenewalPortal from '../ManufacturingRenewalPortal.jsx';
import PharmacyRenewalPortal from '../PharmacyRenewalPortal.jsx';
import RestaurantRenewalPortal from '../RestaurantRenewalPortal.jsx';

const PORTALS = [
  { id: 'restaurant', label: 'Food / Restaurant', icon: '🍽️', Component: RestaurantRenewalPortal },
  { id: 'education', label: 'Education', icon: '🏫', Component: EducationRenewalPortal },
  { id: 'hospital', label: 'Hospital', icon: '🏥', Component: HospitalRenewalPortal },
  { id: 'hotel', label: 'Hotel', icon: '🏨', Component: HotelRenewalPortal },
  { id: 'manufacturing', label: 'Manufacturing', icon: '🏭', Component: ManufacturingRenewalPortal },
  { id: 'pharmacy', label: 'Pharmacy', icon: '💊', Component: PharmacyRenewalPortal },
];

export default function App() {
  const [activeId, setActiveId] = useState(PORTALS[0].id);
  const [showSwitcher, setShowSwitcher] = useState(true);
  const active = PORTALS.find((p) => p.id === activeId) ?? PORTALS[0];
  const ActivePortal = active.Component;

  return (
    <div className="relative">
      {showSwitcher && (
        <div className="fixed bottom-4 right-4 z-[9999] bg-white border border-gray-300 shadow-2xl rounded-lg p-3 max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Preview Switcher</p>
            <button
              type="button"
              onClick={() => setShowSwitcher(false)}
              className="text-gray-400 hover:text-gray-600 text-xs"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {PORTALS.map((portal) => (
              <button
                key={portal.id}
                type="button"
                onClick={() => setActiveId(portal.id)}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  activeId === portal.id
                    ? 'bg-[#0a1a2a] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {portal.icon} {portal.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {!showSwitcher && (
        <button
          type="button"
          onClick={() => setShowSwitcher(true)}
          className="fixed bottom-4 right-4 z-[9999] bg-[#0a1a2a] text-white text-xs px-3 py-2 rounded-full shadow-lg"
        >
          Switch Portal
        </button>
      )}
      <ActivePortal key={activeId} />
    </div>
  );
}
