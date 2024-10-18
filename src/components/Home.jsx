import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

function Home() {
  const birthdate = new Date(2003, 1, 16); // February 16, 2003 (month is 0-indexed)
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  return (
    <div className="container mx-auto">
      <img
        src="./background.jpg"
        alt=""
        className="w-full h-52 pt-5 object-cover md:h-96"
      />
      <div className="flex flex-col items-center md:flex-row md:justify-between md:mx-10">
        <div className="md:flex gap-x-10 block text-center">
          <div className="avatar -mt-12">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="./myPhoto.jpg" />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-bold">Aung Khant Kyaw</h3>
            <a
              href="mailto:aungkhantkyaw.info@gmail.com"
              className="text-primary"
            >
              aungkhantkyaw.info@gmail.com
            </a>
          </div>
        </div>
        <div className="flex gap-x-5 mt-5">
          <a href="https://www.facebook.com/aungkhantkyaw66" target="_blank">
            <FaFacebook className="text-4xl" />
          </a>
          <a href="https://t.me/aung_khantkyaw" target="_blank">
            <FaTelegram className="text-4xl" />
          </a>
          <a href="https://github.com/aung-khantkyaw" target="_blank">
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </div>
      <div className="m-5 p-5 bg-base-300 rounded-xl shadow-md">
        <div className="mockup-code">
          <pre data-prefix="1">
            <code>let person = {"{"}</code>
          </pre>
          <pre data-prefix="2">
            <code> name: &quot;Aung Khant Kyaw&quot;,</code>
          </pre>
          <pre data-prefix="3">
            <code> age: {age},</code>
          </pre>
          <pre data-prefix="4">
            <code> gender: &quot;Male&quot;,</code>
          </pre>
          <pre data-prefix="5">
            <code> programming: {"{"} </code>
          </pre>
          <pre data-prefix="6">
            <code>
              {" "}
              languages: [&quot;JavaScript&quot;, &quot;Java&quot;,
              &quot;PHP&quot;],
            </code>
          </pre>
          <pre data-prefix="7">
            <code>
              {" "}
              frameworks: [&quot;Tailwind&quot;, &quot;Node&quot;,
              &quot;Express&quot;, &quot;Laravel&quot;],
            </code>
          </pre>
          <pre data-prefix="8">
            <code> libraries: [&quot;React&quot;]</code>
          </pre>
          <pre data-prefix="9">
            <code> {"}"}</code>
          </pre>
          <pre data-prefix="10">
            <code>{"}"}</code>
          </pre>
        </div>

        {/* <p>
        🙋‍♂️ Greetings from my portfolio! <br />
        🕸️ I'm a driven and aspirational full stack web developer ready to take my programming career to new heights. Even though I'm new to the field, my passion and commitment motivate me to keep learning and developing. <br />
        
        🕸️ My primary area of interest is web development projects using the Laravel and React stack, where I've developed my skills via practical application. I'm also investigating the MERN stack right now, excited to add more tools to my arsenal and take on new challenges. <br />
        
        🕸️ I haven't had much professional experience, but I have already worked on a few projects that have helped me put my programming talents to use. I want to use this portfolio to share my journey, highlight my projects, and establish connections with other developers and possible partners.
        </p> */}
      </div>
    </div>
  );
}

export default Home;
