import { loading } from "../assets";

const Generating = ({ className, text }) => {
  return (
    <div>
      <div
        className={`flex items-center h-[3.5rem] px-6 bg-purple-500 rounded-[1.7rem] blur-xl ${
          className || ""
        } text-base`}
      >
        <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
        {text ? `${text}` : 'C-17 is powering up KI'}
      </div>

      <div
        className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
          className || ""
        } text-base`}
      >
        <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
        {text ? `${text}` : 'C-17 is powering up KI'}
      </div>
    </div>

    
    
  );
};

export default Generating;