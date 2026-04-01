import DataImage from "./data";

function App() {
 
  return (
   <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
    <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"/>
        <q>Kode yang indah, lahir dari ketekunan.😁</q>
      </div>
      <h1 className="text-3xl/tight font-bold mb-6">Hi, Saya Habi Jiyan Mustaqim</h1>
      <p className="text-base/loose mb-6 opacity-50">
        Seorang pengembang perangkat lunak yang bersemangat dan bertanggung jawab. Saya senang membuat solusi yang inovatif dan efisien untuk masalah yang kompleks.
      </p>
      <div className="flex items-center sm:gap-4 gap-2">
        <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors">Download CV <i className="ri-download-line ri-lg"></i> </a>
        <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors">Lihat Project <i className="ri-arrow-right-line ri-lg"></i></a>
      </div>
    </div>
    <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
   </div>
  )
}

export default App
