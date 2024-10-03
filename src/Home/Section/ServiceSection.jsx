import React from 'react';

const services = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: "../../../public/icons/services/delivery.svg",
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support.",
    icon: "../../../public/icons/services/support.svg",
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: "../../../public/icons/services/safety.svg", 
  },
];

const ServiceSection = () => {
  return (
    <div className="py-12">
      <div className="md:mx-36">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6">
              <div className="flex items-center justify-center mb-4">
                <img src={service.icon} alt={service.title} className="w-[66px] h-[66px]"/>
              </div>
              <h3 className="text-base font-bold text-center">{service.title}</h3>
              <p className="text-base text-center text-gray-700 mt-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
