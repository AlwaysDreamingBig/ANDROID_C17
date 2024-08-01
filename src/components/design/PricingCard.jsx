import React from 'react';

const PricingCard = ({ plan, price, features, additionalFeatures, cta, icon, className }) => {
  return (
    <div className="bg-gradient-to-r from-m-8 via-gray-900 to-black/60 relative border border-green-800 min-w-[300px] text-white rounded-2xl shadow-2xl overflow-hidden p-6 transform transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="text-6xl mb-4">{icon}</div>
        <h2 className={`text-2xl font-bold mb-2 button ${className} `}>{plan}</h2>
        <p className="text-5xl font-semibold mb-4">${price}</p>
        <hr className="border-t border-white mb-4" />
        <p className="text-xs uppercase tracking-wider mb-6 italic">per month</p>
      </div>

      <div className="mb-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <hr className="border-t border-white mt-4 mb-6" />

        <ul className="space-y-4 text-gray-400">
          {additionalFeatures.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <a 
          href="#"
          className="button bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105"
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
