import React from 'react';
import ServiceIcon from "./icons/ServiceIcon";
import MoneyIcon from "./icons/MoneyIcon";
import BagIcon from "./icons/BagIcon";
import MoneyBagIcon from "./icons/MoneyBagIcon";

const StatsCards = () => {
  const stats = [
    {
      icon: <ServiceIcon className="text-3xl" />,
      number: '10.5k',
      label: 'Sellers active on our site',
    },
    {
      icon: <MoneyIcon className="text-3xl" />, 
      number: '33k',
      label: 'Monthly Product Sale',
    },
    {
      icon: <BagIcon className="text-3xl" />, 
      number: '45.5k',
      label: 'Customers active on our site',
    },
    {
      icon: <MoneyBagIcon className="text-3xl" />, 
      number: '25k',
      label: 'Annual gross sale on our site',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20 px-12">
      {stats.map((stat, index) => (
        <div key={index} className="group border border-gray-300 rounded-lg py-4 flex flex-col items-center transition duration-300 hover:bg-red-500 hover:text-white">
          <div className="text-3xl mb-3 transition-colors duration-300 ease-in-out group-hover:text-white">
            {stat.icon}
          </div>
          <h2 className="text-2xl font-bold text-center mb-2 transition-colors duration-300 ease-in-out group-hover:text-white">
            {stat.number}
          </h2>
          <p className="text-center transition-colors duration-300 ease-in-out group-hover:text-white">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
