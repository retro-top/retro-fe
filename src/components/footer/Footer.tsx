import footer, { companyInfo } from "@/constants/footer";
import React from "react";
import FooterOption from "./FooterOption";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 text-sm text-white p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {footer.map((option, index) => (
          <div key={index} className="mb-4 sm:mb-0">
            <h3 className="mb-2 font-semibold">{option.heading}</h3>
            <ul>
              {option.options.map((item) => (
                <FooterOption
                  href={item.href}
                  text={item.text}
                  key={item.href}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4">
        <p className="text-xs text-justify md:text-left sm:text-left">{companyInfo}</p>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
        <span className="mb-2 sm:mb-0">1 ETH = $3,046.03</span>
        <span>© 2024 Aptos-Gamble.com | All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
