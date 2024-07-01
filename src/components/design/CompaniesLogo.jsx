import { companyLogos } from "../../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className}`}>
            <h5 className="tagline mb-5 text-center text-white text-sm">
                Learn more about ANDROID-17 here!!
            </h5>

            <ul className="flex">
                {companyLogos.map((logo, index) => (
                <li
                    className="flex items-center justify-center flex-1 h-[8.5rem] mr-20 ml-9"
                    key={index}
                >
                    <img src={logo} width={134} height={28} alt={logo} />
                </li>
                ))}
            </ul>
    </div>
    
  );
};

export default CompanyLogos;