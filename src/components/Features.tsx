import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const Features: React.FC = () => {
  const features = [
    {
      icon:<TbTruckDelivery />, // Replace with an actual icon if using a library like Heroicons or FontAwesome
      title: "Free Delivery",
      description: "from $50",
    },
    {
      icon: <LuRefreshCcw />,
      title: "365 Days",
      description: "for free return",
    },
    {
      icon: <RiSecurePaymentFill />,
      title: "Payment",
      description: "Secure System",
    },
    {
      icon: <BiMessageDetail />,
      title: "99% Customer",
      description: "Feedbacks",
    },
    {
      icon: <IoPricetagOutline />,
      title: "Only Best",
      description: "Brands",
    },
  ];

  return (
    <div className="w-full  py-4 px-4 md:px-8 lg:px-[6vw] my-[3vh]">
      <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:flex-row md:text-left md:space-x-3"
          >
            <div className="text-4xl font-light text-gray-700">{feature.icon}</div>
            <div className="flex flex-col items-center gap-0">
              <h3 className="font-bold text-lg text-gray-700">{feature.title}</h3>
              <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
