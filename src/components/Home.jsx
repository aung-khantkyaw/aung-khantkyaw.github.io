import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

function Home() {
  return (
    <div className="container mx-auto h-screen">
      <img
        src="./background.jpg"
        alt=""
        className="w-full h-40 pt-5 object-cover md:h-80"
      />
      <div className="flex flex-col items-center md:flex-row md:justify-between md:mx-10">
        <div className="flex gap-x-10">
            <div className="avatar -mt-8">
                <div className="w-32 rounded-2xl md:rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="./myPhoto.jpg" />
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl font-bold">Aung Khant Kyaw</h3>
                <a href="mailto:aungkhantkyaw.info@gmail.com" className="text-primary">
                    aungkhantkyaw.info@gmail.com
                </a>
            </div>
        </div>
        <div className="flex gap-x-5 mt-5">
            <a href="https://www.facebook.com/aungkhantkyaw66" target="_blank"><FaFacebook className="text-4xl" /></a>
            <a href="https://t.me/aung_khantkyaw" target="_blank"><FaTelegram className="text-4xl" /></a>
            <a href="https://github.com/aung-khantkyaw" target="_blank"><FaGithub className="text-4xl" /></a>
        </div>
      </div>
      <div className="container mx-auto mt-5 px-5">
        <p className="md:text-xl font-bold text-center">
          I am a software engineer who loves to build web applications. I can build a website for you.
        </p>
        
      </div>
    </div>
  );
}

export default Home;
