import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    shop: {
      title: 'Shop',
      links: [
        { name: 'Super Deals', href: '#' },
        { name: 'Value of the Day', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Computer & Accessories', href: '#' },
        { name: 'Mobiles & Tablets', href: '#' },
        { name: 'Gift Cards', href: '#' },
      ]
    },
    help: {
      title: 'Help',
      links: [
        { name: 'Track My Order', href: '#' },
        { name: 'My Account', href: '#' },
        { name: 'Return Policies', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Product Recalls', href: '#' },
      ]
    },
    aboutUs: {
      title: 'About Us',
      links: [
        { name: 'About company', href: '#' },
        { name: 'Delivery with assembly', href: '#' },
        { name: 'Affiliate Program', href: '#' },
        { name: 'Cooperation', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Careers', href: '#' },
      ]
    },
    regulations: {
      title: 'Regulations',
      links: [
        { name: 'Privacy policy', href: '#' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Help', href: '#' },
        { name: 'Submit a complaint', href: '#' },
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Test Drive Product', href: '#' },
        { name: 'Repair Help', href: '#' },
        { name: 'Find a Repair Shop', href: '#' },
        { name: 'Pick Up in Store', href: '#' },
      ]
    }
  };

  return (
    <footer className="bg-white pt-16 pb-8 px-10 md:px-8 lg:px-[6vw]">
      {/* Newsletter Section */}
      <div className=" mx-auto  mb-12 py-[3vh]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">NEWSLETTER</h2>
            <p className="text-gray-600 text-lg">Subscribe to get the latest deals, promotions and offering.</p>
          </div>
          <div className="flex w-full md:w-[30vw]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-4 border border-r-0 border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-6 py-2 bg-yellow-400 font-bold hover:bg-yellow-500 text-gray-800 rounded-r-full transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-2xl text-gray-700 mb-8">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 text-lg hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 ">
          <p className="text-gray-600 text-lg mb-4 md:mb-0">
            © Electro: Buy electronics products and gadgets online
          </p>
          <div className="flex items-center gap-4">
            <img src="https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/10/payment_methods_logos.png" alt="Mastercard" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;