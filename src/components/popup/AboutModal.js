import { useContext } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { context } from '../../context/context';
import { testimonialSlider } from '../../sliderProps';
// import { testimonialSlider } from "../../sliderProps";
import AnimatedText from '../AnimatedText';
import Modal from './Modal';
import { aboutData } from '../../aboutData';

const AboutPopup = () => {
  const { showAboutPopup, aboutPopup, color } = useContext(context);

  return (
    <Modal open={aboutPopup} close={showAboutPopup}>
      <div className="about_popup_details w-full h-full clear-both float-left relative">
        <div className="left fixed w-[40%] left-0 top-0 bottom-0 border-dashed border-[rgba(255,255,255,.1)] border-r z-[5]">
          <div className="left_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]">
            <div className="author w-full float-left mb-[35px] text-center overflow-hidden">
              <div className="short w-full float-left">
                <h3 className="name text-[22px] uppercase mb-[10px]">
                  {aboutData.firstName}
                  <span className="text-pink-color"> {aboutData.lastName}</span>
                </h3>
                <h3 className="job font-normal text-main-color text-[15px]">
                  <AnimatedText />
                </h3>
              </div>
            </div>
            <div className="list w-full float-left mb-[35px]">
              <ul className="m-0 list-none">
                <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-user text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">David Woodward</span>
                  </div>
                </li>
                {/* <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-calendar text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">01.07.1990</span>
                  </div>
                </li> */}
                <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-location text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">
                      {aboutData.address}
                      {/* <a
                        href="#"
                        className="href_location no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        {aboutData.address}
                      </a> */}
                    </span>
                  </div>
                </li>
                {/* <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-phone text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">
                      <a
                        className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                        href="#"
                      >
                        +77 022 155 02 02
                      </a>
                    </span>
                  </div>
                </li> */}
                <li className="w-full float-left">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-mail-1 text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">
                      {aboutData.emailA}@{aboutData.emailB}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a
                href="https://storage.googleapis.com/eternal-blue-dev-public/img/about/Woodward_Resume_5_2023.pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="right w-full absolute pl-[40%] top-0 right-0 bottom-0">
          <div className="right_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]">
            <div className="biography w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    About
                    {/* <span className="text-pink-color">Me</span> */}
                  </span>
                </h3>
              </div>
              <div className="text mt-[29px] float-left">
                <p>{aboutData.bio}</p>
              </div>
            </div>
            <div className="service w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Specialties
                    {/* Specialties <span className="text-pink-color">Services</span> */}
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[20px]">
                <ul className="m-0 list-none">
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Frontend
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Backend
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Google Cloud Deployment
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    WebAR & Native App AR
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Unity Game Dev
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Web3
                  </li>
                </ul>
              </div>
            </div>
            <div className="prog_skill w-full float-left mb-[62px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Languages
                    {/* <span className="text-pink-color">Skills</span> */}
                  </span>
                </h3>
              </div>
              <div className="text mt-[29px] float-left">
                <p>
                  JavaScript, TypeScript, HTML, CSS, C#, C/C++, Java, Solidity,
                  HLSL
                </p>
              </div>
              {/* <div className="oki_progress">
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">WordPress</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: '95%' }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">Angular</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>
                
              </div> */}
            </div>
            <div className="prog_skill w-full float-left mb-[62px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Frameworks
                    {/* <span className="text-pink-color">Skills</span> */}
                  </span>
                </h3>
              </div>
              <div className="text mt-[29px] float-left">
                <p>
                  React, Firebase, GCP, Tailwind, Three.js, Mapbox, Niantic 8th
                  Wall, A-Frame, Node.js, Fastify, Prisma, tRPC, Zod, MongoDB,
                  PostgreSQL, Unity, Niantic ARDK (Lightship), Niantic VPS,
                  Processing, P5.js, Hardhat
                </p>
              </div>
            </div>
            <div className="prog_skill w-full float-left mb-[62px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">AI Tools</span>
                </h3>
              </div>
              <div className="text mt-[29px] float-left">
                <p>Midjourney, ChatGPT, OpenAI API</p>
              </div>
            </div>

            <div className="timeline w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Education
                    {/* Education <span className="text-pink-color">Timeline</span> */}
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[45px]">
                <ul className="m-0 list-none relative inline-block pt-[10px]">
                  {/* <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2014 - 2016
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">
                          Oxford Univercity
                        </h3>
                        <span className="text-[14px]">Master Degree</span>
                      </div>
                    </div>
                  </li>
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2010 - 2014
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">
                          Texas Univercity
                        </h3>
                        <span className="text-[14px]">Bacheloor Degree</span>
                      </div>
                    </div>
                  </li> */}
                  <li className="m-0 w-full float-left relative pl-[20px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2016 - 2020
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">
                          University of North Texas
                        </h3>
                        <span className="text-[14px]">
                          BS in Computer Engineering
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">Experience</span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[45px]">
                <ul className="m-0 list-none relative inline-block pt-[10px]">
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2022 - 2023
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">Niantic</h3>
                        <span className="text-[14px]">
                          Web3/AR Developer, Product Designer
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2021 - 2022
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">Flayze</h3>
                        <span className="text-[14px]">Founder</span>
                      </div>
                    </div>
                  </li>
                  <li className="m-0 w-full float-left relative pl-[20px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2019 - 2022
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">
                          Lockheed Martin Skunkworks
                        </h3>
                        <span className="text-[14px]">Software Engineer</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="partners w-full float-left mb-[62px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    My <span className="text-pink-color">Partners</span>
                  </span>
                </h3>
              </div>
              <div className="list w-full float-left clear-both overflow-hidden border-solid border-[#333] border mt-[40px]">
                <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left">
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="https://storage.googleapis.com/eternal-blue-dev-public/img/partners/1.png"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="https://storage.googleapis.com/eternal-blue-dev-public/img/partners/2.png"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="https://storage.googleapis.com/eternal-blue-dev-public/img/partners/3.png"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="https://storage.googleapis.com/eternal-blue-dev-public/img/partners/4.png"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="testimonial w-full float-left">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Client Feedback
                    {/* Clients <span className="text-pink-color">Feedback</span> */}
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[54px]">
                <Swiper
                  {...testimonialSlider}
                  watchOverflow
                  className="m-0 list-none cursor-e-resize"
                >
                  <SwiperSlide className="m-0">
                    <div className="list_inner w-full h-auto clear-both float-left relative">
                      <div className="text w-full h-auto clear-both float-left relative border-solid border-[#333] border p-[40px] mb-[30px]">
                        <i className="icon-quote-left absolute z-[1] text-[30px] top-[-16px] left-[50px] text-pink-color" />
                        <p>
                          I've worked with David on several projects at Niantic,
                          where he was able to jump in and build an application
                          from the ground up, ranging from a web app to a Unity
                          app. David has a solid understanding of each layer of
                          the development stack and is able learn new
                          technologies like dynamic AR meshing building and work
                          though any roadblocks that come up. David also has a
                          good product sense and asks good questions that help
                          make any project he works on better
                        </p>
                      </div>
                      <a target="_blank" href="https://twitter.com/lifeofc">
                        <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                          <div className="image relative w-[60px] h-[60px]">
                            <div
                              className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                              data-img-url="https://storage.googleapis.com/eternal-blue-dev-public/img/testimonials/chikai.jpeg"
                            />
                          </div>
                          <div className="info pl-[20px]">
                            <h3 className="text-[15px] mb-[2px]">
                              Chikai Ohazama
                            </h3>
                            <span className="text-[14px]">
                              Niantic Web3 Director
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
