import Button from "../components/Button";
import Footer from "../components/Footer.jsx";
import penyebab from "../assets/photos/Penyebab.png";
import sawah from "../assets/photos/header.png";

const homePage = () => {
  const handleDataContext = () => {
    window.location.href = "/data";
  };

  const handleDataRedux = () => {
    window.location.href = "/dataredux";
  };
  return (
    <div className="flex flex-col h-[2300px] w-full bg-[#123332] ">
      <div>
        <img
          src={sawah}
          alt="sawah"
          className="w-full h-[230px]"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#FED8BD] ml-[264px] mr-[261px] mt-[70px] text-[50px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
          Memahami Bencana Alam
        </p>
        <p className="text-white ml-[264px] mr-[250px] mt-[30px] inline-block font-[Quattrocento] text-[18px]">
          Bencana alam adalah peristiwa atau rangkaian peristiwa yang disebabkan
          oleh alam yang mengancam dan mengganggu kehidupan manusia. Mempelajari
          penyebab, dampak, dan cara menghadapi bencana alam sangat penting agar
          kita dapat melindungi diri dan masyarakat.
        </p>
      </div>
      <div className="flex flex-col bg-[#1D4241] h-[700px] mt-[90px] justify-center">
        <p className="text-[#FED8BD] ml-[264px] mr-[261px] text-[40px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
          Definisi Bencana Alam
        </p>
        <p className="text-white ml-[264px] mr-[250px] mt-[27px] inline-block font-[Quattrocento] text-[18px]">
          Bencana alam adalah fenomena alam yang terjadi secara tiba-tiba dan
          tak terduga, seperti gempa bumi, banjir, gunung meletus, dan
          lain-lain. Bencana alam dapat mengancam keselamatan, menimbulkan
          korban jiwa, dan merusak harta benda serta lingkungan. Ketika terjadi
          bencana alam, masyarakat berada dalam keadaan darurat dan membutuhkan
          bantuan segera.
        </p>
      </div>
      <div className="flex flex-col bg-[url('/src/assets/photos/fotoJenis.png')] w-full h-[700px] justify-center ">
        <p className="text-[#FED8BD] ml-[264px] mr-[261px] text-[40px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
          Jenis-jenis Bencana Alam
        </p>
        <div className="flex mt-[20px]">
          <div className="flex flex-col ml-[250px]">
            <p className="text-[#FED8BD]  mt-[27px] inline-block font-[Quattrocento] text-[19px]">
              Geologi
            </p>
            <p className="text-white ] mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Gempa bumi, tsunami, letusan gunung api
            </p>
          </div>
          <div className="flex flex-col ml-[20px] mr-[20px]">
            <p className="text-[#FED8BD] mt-[27px] inline-block font-[Quattrocento] text-[19px]">
              Hidrometeorologi
            </p>
            <p className="text-white mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Banjir, tanah longsor, angin topan, kekeringan
            </p>
          </div>
          <div className="flex flex-col mr-[200px]">
            <p className="text-[#FED8BD] mt-[27px] inline-block font-[Quattrocento] text-[19px]">
              Biogeofisik
            </p>
            <p className="text-white  mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Wabah penyakit, kebakaran hutan, gelombang panas
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p className="text-[#FED8BD] ml-[264px] mt-[70px] text-[40px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
            Penyebab Bencana Alam
          </p>
          <div className="flex flex-col">
            <p className="text-[#FED8BD] ml-[264px] mr-[250px] mt-[50px] inline-block font-[Quattrocento] text-[20px]">
              Faktor Alam
            </p>
            <p className="text-white ml-[264px] mr-[150px] mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Aktivitas tektonik, perubahan iklim, proses alam lainnya
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FED8BD] ml-[264px] mr-[250px] mt-[27px] inline-block font-[Quattrocento] text-[20px]">
              Aktivitas Manusia
            </p>
            <p className="text-white ml-[264px] mr-[150px] mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Eksploitasi alam yang berlebihan, pembukaan lahan, industrialisa
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FED8BD] ml-[264px] mr-[250px] mt-[27px] inline-block font-[Quattrocento] text-[20px]">
              Interaksi Manusia-Alam
            </p>
            <p className="text-white ml-[264px] mr-[150px] mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Kombinasi antara faktor alam dan aktivitas manusia
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={penyebab}
            alt="Penyebab"
            className="w-[370px] h-[550px] mr-[230px]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[50px] space-x-20">
      <Button
          classname="w-[170px] h-[53px] bg-[#EF9C82] rounded-[7px]"
          onClick={handleDataContext}
        >
          <p className="text-[#123332] font-[Quattrocento] text-[21px] justify-center items-center">
            Data Context
          </p>
        </Button>
        <Button
          classname="w-[170px] h-[53px] bg-[#EF9C82] rounded-[7px]"
          onClick={handleDataRedux}
        >
          <p className="text-[#123332] font-[Quattrocento] text-[21px] justify-center items-center">
            Data Redux
          </p>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default homePage;
