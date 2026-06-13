import React, { useState } from 'react';

const NAV_LINKS = [
  'REGISTRATION',
  'RENEW',
  'PROCEDURE',
  'BENEFITS',
  "FAQ'S",
  'ABOUT US',
  'CONTACT US',
  'POLICIES',
  'LICENSE',
];

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi',
];

const Field = ({ label, name, placeholder, type = 'text', colors }) => (
  <div>
    <label htmlFor={name} className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 text-sm border border-gray-300 bg-white rounded-sm focus:outline-none focus:border-gray-500"
      style={{ borderColor: '#ccc' }}
    />
  </div>
);

const AddressFields = ({ colors }) => (
  <div>
    <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: colors.accent }}>
      Address
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Field label="Shop/Flat/Door No." name="shop_no" placeholder="Shop/Flat/Door No." colors={colors} />
      <Field label="Near By" name="nearby" placeholder="Near By" colors={colors} />
      <Field label="Road/Street" name="address" placeholder="Road/Street" colors={colors} />
      <Field label="Area/Locality" name="locality" placeholder="Area/Locality" colors={colors} />
      <Field label="City" name="city" placeholder="City" colors={colors} />
      <Field label="District" name="district" placeholder="District" colors={colors} />
      <Field label="State" name="state" placeholder="State" colors={colors} />
      <Field label="PIN Code" name="pincode" placeholder="PIN Code" colors={colors} />
    </div>
  </div>
);

export default function GovRenewalLayout({ config }) {
  const { colors } = config;
  const [tickerOffset, setTickerOffset] = useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setTickerOffset((o) => (o + 1) % 100), 50);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Demo submission received. This is a preview portal.');
  };

  const handleUrgentSubmit = (e) => {
    e.preventDefault();
    alert('Urgent form received. Our consultant will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top utility bar */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs text-gray-600">
        <div className="max-w-[1200px] mx-auto px-4 py-1 flex flex-wrap justify-between gap-2">
          <span>Government of India | {config.department}</span>
          <span className="flex gap-4">
            <button type="button" className="hover:underline">हिंदी</button>
            <button type="button" className="hover:underline">English</button>
            <button type="button" className="hover:underline">Screen Reader</button>
            <button type="button" className="hover:underline">A+ A A-</button>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b-4 shadow-sm" style={{ borderColor: colors.orange }}>
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="w-16 h-16 rounded-full border-4 flex items-center justify-center text-white font-bold text-lg shadow-md"
              style={{ backgroundColor: colors.navy, borderColor: colors.orange }}
            >
              🇮🇳
            </div>
            <div>
              <h1 className="text-2xl font-bold leading-tight" style={{ color: colors.navy, fontFamily: 'Georgia, serif' }}>
                {config.portalName}
              </h1>
              <p className="text-sm font-semibold" style={{ color: colors.orange }}>{config.portalAccent}</p>
            </div>
          </div>

          <div className="flex-1 text-center px-2">
            <p className="text-sm font-semibold mb-1" style={{ color: colors.orange }}>{config.titleHindi}</p>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wide" style={{ color: colors.navy }}>
              {config.titleEnglish}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div
              className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-xs font-bold text-center leading-tight"
              style={{ borderColor: colors.green, color: colors.green }}
            >
              {config.emblemLabel}
            </div>
            <p className="text-xs font-bold uppercase max-w-[100px] leading-snug" style={{ color: colors.navy }}>
              {config.slogan}
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ backgroundColor: colors.navy }}>
        <div className="max-w-[1200px] mx-auto px-2">
          <ul className="flex flex-wrap items-center text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wide">
            <li className="px-3 py-3 border-r border-white/20">
              <span className="text-lg">🏠</span>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link} className="border-r border-white/20">
                <button type="button" className="px-3 py-3 hover:bg-white/10 transition-colors block w-full text-left">
                  {link}
                  {link === 'POLICIES' && ' ▾'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Ticker */}
      <div className="overflow-hidden whitespace-nowrap py-2 text-white text-xs sm:text-sm" style={{ backgroundColor: colors.green }}>
        <div
          className="inline-block"
          style={{ transform: `translateX(-${tickerOffset}%)`, transition: 'transform 0.05s linear' }}
        >
          <span className="px-8">📢 {config.ticker}</span>
          <span className="px-8">📢 {config.ticker}</span>
        </div>
      </div>

      {/* Hero banner with photo */}
      <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
        <img
          src={config.heroImage}
          alt={config.heroCaption}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            <p className="text-white/80 text-xs uppercase tracking-widest mb-2">Official Government Portal</p>
            <h2 className="text-white text-2xl sm:text-4xl font-bold max-w-xl leading-tight">
              {config.heroCaption}
            </h2>
            <button
              type="button"
              className="mt-4 px-6 py-2 text-sm font-bold text-white rounded-sm shadow-lg"
              style={{ backgroundColor: colors.orange }}
            >
              Apply Online Now →
            </button>
          </div>
        </div>
      </div>

      {/* Photo gallery strip */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Highlights & Compliance</p>
          <div className="grid grid-cols-3 gap-3">
            {config.galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-video overflow-hidden rounded-sm border border-gray-200 shadow-sm group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] px-2 py-1 truncate">
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Urgent form bar */}
      <div style={{ backgroundColor: colors.orange }}>
        <form onSubmit={handleUrgentSubmit} className="max-w-[1200px] mx-auto px-4 py-3 flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
          <span className="text-white font-bold text-sm uppercase shrink-0 lg:mr-2">Urgent Form</span>
          <input
            type="text"
            placeholder="Business Name"
            className="flex-1 px-3 py-2 text-sm border border-white/30 bg-white rounded-sm min-w-0"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-3 py-2 text-sm border border-white/30 bg-white rounded-sm min-w-0"
          />
          <input
            type="tel"
            placeholder="10 Digit Mobile no."
            className="flex-1 px-3 py-2 text-sm border border-white/30 bg-white rounded-sm min-w-0"
          />
          <select className="flex-1 px-3 py-2 text-sm border border-white/30 bg-white rounded-sm min-w-0 text-gray-500">
            <option value="">Select State</option>
            {INDIAN_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button
            type="submit"
            className="px-8 py-2 text-sm font-bold text-white uppercase tracking-wide shrink-0"
            style={{ backgroundColor: colors.navy }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Main renewal section */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-wide" style={{ color: colors.navy }}>
          Apply For Renewal
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="border border-gray-300 rounded-sm overflow-hidden shadow-sm bg-white">
            <div className="px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white" style={{ backgroundColor: colors.navy }}>
              Information Form for Renewal
            </div>
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label={config.idField.label}
                  name={config.idField.name}
                  placeholder={config.idField.placeholder}
                  colors={colors}
                />
                <Field label="Name of Business or Person" name="business_name" placeholder="Name of Business or Person" colors={colors} />
                <Field label="Email Id" name="email" placeholder="Email Id" type="email" colors={colors} />
                <Field label="Mobile No." name="mobile" placeholder="Mobile No." type="tel" colors={colors} />
              </div>
              <AddressFields colors={colors} />
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold uppercase tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: colors.navy }}
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Instructions */}
          <div className="border border-gray-300 rounded-sm overflow-hidden shadow-sm bg-white">
            <div className="px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white" style={{ backgroundColor: colors.navy }}>
              Instructions
            </div>
            <div className="p-4 sm:p-6 text-sm leading-relaxed">
              <ol className="space-y-4 list-decimal list-inside text-gray-800">
                <li>
                  <strong style={{ color: colors.accent }}>{config.idLabel}</strong>: Enter number as on certificate.
                  <br /><span className="text-xs text-gray-500">प्रमाणपत्र पर दर्ज संख्या भरें</span>
                </li>
                <li>
                  <strong style={{ color: colors.accent }}>Name of Business/Person</strong>: Fill name per official documents.
                  <br /><span className="text-xs text-gray-500">व्यावसायिक दस्तावेजों के अनुसार नाम भरें</span>
                </li>
                <li>
                  <strong style={{ color: colors.accent }}>Email Id</strong>: Registered email id.
                  <br /><span className="text-xs text-gray-500">पंजीकृत ईमेल आईडी भरें</span>
                </li>
                <li>
                  <strong style={{ color: colors.accent }}>Mobile No.</strong>: Valid 10-digit mobile number.
                  <br /><span className="text-xs text-gray-500">मोबाइल नंबर भरें</span>
                </li>
                <li>
                  <strong style={{ color: colors.accent }}>Address</strong>: {config.addressHint}
                  <br /><span className="text-xs text-gray-500">पूरा पता भरें</span>
                </li>
                <li>
                  <strong style={{ color: colors.accent }}>Applicant&apos;s Details</strong>: Verify all details before submit.
                  <br /><span className="text-xs text-gray-500">विवरण ठीक से भरें।</span>
                </li>
              </ol>
              <p className="mt-6 pt-4 border-t border-gray-200 text-xs font-semibold" style={{ color: colors.accent }}>
                {config.footer}
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges / additional photos row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '✅', title: 'Verified Process', desc: 'Government-approved workflow' },
            { icon: '🔒', title: 'Secure Portal', desc: 'Encrypted data submission' },
            { icon: '📋', title: 'Easy Renewal', desc: 'Complete in minutes online' },
            { icon: '📞', title: '24×7 Support', desc: 'Helpline: 1800-XXX-XXXX' },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-sm p-4 text-center bg-gray-50">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-xs font-bold uppercase" style={{ color: colors.navy }}>{item.title}</p>
              <p className="text-[11px] text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.navy }} className="text-white mt-4">
        <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-bold uppercase mb-2">{config.portalName} {config.portalAccent}</p>
            <p className="text-white/70 text-xs leading-relaxed">{config.titleEnglish}</p>
          </div>
          <div>
            <p className="font-bold uppercase mb-2">Quick Links</p>
            <ul className="text-white/70 text-xs space-y-1">
              <li>→ Registration Procedure</li>
              <li>→ Document Checklist</li>
              <li>→ Fee Structure</li>
              <li>→ Track Application Status</li>
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase mb-2">Contact</p>
            <p className="text-white/70 text-xs leading-relaxed">
              {config.department}<br />
              Email: support@govportal.in<br />
              Toll Free: 1800-XXX-XXXX
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 text-center py-3 text-xs text-white/60">
          © {new Date().getFullYear()} Government of India. All rights reserved. | Last updated: {new Date().toLocaleDateString('en-IN')}
        </div>
      </footer>
    </div>
  );
}
