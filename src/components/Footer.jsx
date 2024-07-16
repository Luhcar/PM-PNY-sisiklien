import { forwardRef } from "react";

const Footer = forwardRef((props,ref) => {
  return (
    <footer
      ref={ref}>
      <div className="flex bg-[url('/src/assets/photos/footer.png')] w-full h-[191px] bg-cover mt-[90px]">
        <div className="bg-[#234A49] w-[367px] h-[108px] ml-[264px] mt-[42px]">
            <p className="flex flex-col text-[#FED8BD] font-[Quattrocento] text-[20px] mx-[48px] mt-[23px]"> 
                Muhammad Rizky Ramadhani
            </p>
            <p className="flex flex-col text-[#FFFFFF] font-[Quattrocento] text-[20px] mt-[8px] ml-[48px]">
                A11.2021.13325
            </p>
        </div>
        <div className="bg-[#234A49] w-[367px] h-[108px] ml-[142px] mt-[42px]">
            <p className="flex flex-col text-[#FED8BD] font-[Quattrocento] text-[20px] mx-[48px] mt-[20px]"> 
                Rachul Indra Atmawan
            </p>
            <p className="flex flex-col text-[#FFFFFF] font-[Quattrocento] text-[20px] mt-[7px] ml-[48px]">
                A11.2021.13856
            </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
