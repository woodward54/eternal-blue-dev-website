import { useContext } from 'react';
import { context } from '../context/context';
import AnimatedText from './AnimatedText';
import { aboutData } from '../aboutData';

const About = () => {
  const { showAboutPopup } = useContext(context);
  return (
    // <div className="edrea_tm_section" id="about">
    //   <div className="flex flex-col md:flex-row px-12 md:px-0 gap-0 md:gap-20">
    //     <div className="">
    //       <img
    //         className="rounded-[10px] h-64 w-full object-cover object-center"
    //         src="https://storage.googleapis.com/eternal-blue-dev-public/img/about/profile.png"
    //         alt=""
    //       />
    //     </div>

    //     <div className="flex flex-col">
    //       <div className=" border-dashed border-[rgba(255,255,255,.15)] border-b pb-[30px] mb-[30px]">
    //         <h3 className="name uppercase mb-[15px] text-[40px] font-bold">
    //           {aboutData.firstName}
    //           <span className="text-pink-color"> {aboutData.lastName}</span>
    //         </h3>
    //         <h3 className="job text-[18px] font-normal text-main-color">
    //           <AnimatedText />
    //         </h3>
    //       </div>

    //       <div className="text w-full float-left ">
    //         <p>
    //           Hey, My name is
    //           <span className="text-white-color">
    //             {' '}
    //             {aboutData.firstName} {aboutData.lastName}.
    //           </span>{' '}
    //           {aboutData.bio}
    //         </p>
    //         <div className="edrea_tm_button">
    //           <a href="#" onClick={() => showAboutPopup()}>
    //             Resume
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="edrea_tm_section" id="about">
      <div className="section_inner">
        <div className="edrea_tm_about h-auto flex">
          <div className="flex justify-center max-h-1/2 w-1/2 pb-4">
            <div className="image relative glow_card min-w-full">
              <img
                className="relative min-w-full opacity-0"
                src="https://storage.googleapis.com/eternal-blue-dev-public/img/thumbs/1-1.jpg"
                alt=""
              />
              <div
                className="main absolute inset-0 bg-no-repeat bg-cover bg-top rounded-[10px]"
                data-img-url="https://storage.googleapis.com/eternal-blue-dev-public/img/about/profile.png"
              />
            </div>
          </div>

          <div className="right w-[60%] pl-[100px]">
            <div className="short w-full float-left mb-[24px] border-dashed border-[rgba(255,255,255,.15)] border-b pb-[30px]">
              <h3 className="name uppercase mb-[15px] text-[40px] font-bold">
                {aboutData.firstName}
                <span className="text-pink-color"> {aboutData.lastName}</span>
              </h3>
              <h3 className="job text-[18px] font-normal text-main-color">
                <AnimatedText />
              </h3>
            </div>
            <div className="text w-full float-left mb-[36px]">
              <p>
                Hey, My name is{' '}
                <span className="text-white-color">
                  {aboutData.firstName} {aboutData.lastName}.
                </span>{' '}
                {aboutData.bio}
              </p>
            </div>
            <div className="edrea_tm_button">
              <a href="#" onClick={() => showAboutPopup()}>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
