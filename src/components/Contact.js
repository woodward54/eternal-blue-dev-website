import { aboutData } from '../aboutData'

const Contact = () => {
  return (
    <div className="edrea_tm_section" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact w-full h-auto clear-both float-left px-[20px] py-0">
          <div className="edrea_tm_main_title">
            <h3>
              Let's <span className="text-pink-color">Build</span>
            </h3>
          </div>
          <div className="wrapper w-full h-auto clear-both float-left flex mt-4">
            <div className="left w-1/2 pr-[50px]">
              <ul className="m-0 list-none">
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-location text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <div className="text-white-color">Austin, TX</div>
                    </span>
                  </div>
                </li>
                {/* <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-phone text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="#"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        +77 022 155 02 02
                      </a>
                    </span>
                  </div>
                </li> */}
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-mail-1 text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <div className="text-white-color">
                        {aboutData.emailA}@{aboutData.emailB}
                      </div>
                    </span>
                  </div>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <a
                    href="https://www.linkedin.com/in/davidwoodward1/"
                    target="_blank"
                    className="text-white-color transition-all duration-300 hover:text-pink-color"
                  >
                    <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                      <i className="icon-linkedin-1 text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                      <span className="inline-block pl-[48px]">
                        Linkedin
                      </span>
                    </div>
                  </a>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <a
                    href="https://twitter.com/madebydayK8"
                    target="_blank"
                    className="text-white-color transition-all duration-300 hover:text-pink-color"
                  >
                    <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                      <i className="icon-twitter-1 text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                      <span className="inline-block pl-[48px]">
                        @madebydayK8
                      </span>
                    </div>
                  </a>
                </li>
                {/* <li className="w-full float-left">
                  <a
                    href="https://www.instagram.com/dayk8music"
                    target="_blank"
                    className="text-white-color transition-all duration-300 hover:text-pink-color"
                  >
                    <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                      <i className="icon-instagram-3 text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                      <span className="inline-block pl-[48px]">
                        @dayK8music
                      </span>
                    </div>
                  </a>
                </li> */}
              </ul>
            </div>
            {/* CONTACT FORM */}
            {/* <div className="right w-1/2 pl-[50px]">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="first w-full float-left mb-[20px]">
                    <ul className="ml-[-20px] list-none">
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="email"
                            type="text"
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last w-full float-left bg-[#222] rounded-[10px] mb-[20px]">
                    <textarea
                      className="w-full h-[108px] bg-transparent border-none text-main-color resize-none p-[20px] font-poppins"
                      id="message"
                      placeholder="Message"
                      defaultValue={''}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <a id="send_message" href="#">
                      Send Message
                    </a>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact
