import { Fragment, useContext } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { context } from '../context/context';
import { skillsSlider } from '../sliderProps';

const data = [
  {
    title: 'Building brands through customer service',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/skills/1.jpg',
    tag: 'Branding',
    des: [
      'Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: 'Unstoppable Jamstack and Gatsby opportunity',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/skills/2.jpg',
    tag: 'Design',
    des: [
      'Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: 'Electron framework adds encryption API',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/skills/3.jpg',
    tag: 'Media',
    des: [
      'Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: 'Sentry for JavaScript monitors release health',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/skills/4.jpg',
    tag: 'Technology',
    des: [
      'Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: 'Five reasons to begin a Packt subscription',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/skills/5.jpg',
    tag: 'Lifestyle',
    des: [
      'Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: 'Why developers are so divided over WordPress',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/skills/6.jpg',
    tag: 'Modern',
    des: [
      'Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.',
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

const Skills = () => {
  const onClick = (value) => {
    showSkillsPopup(data[value]);
  };
  const { showSkillsPopup } = useContext(context);
  return (
    <Fragment>
      <div className="edrea_tm_section" id="skills">
        <div className="section_inner">
          <div className="edrea_tm_skills swiper-section w-full h-auto clear-both float-left">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="text-pink-color">Skills</span>
              </h3>
            </div>
            <div className="skills_list w-full h-auto clear-both float-left relative">
              <Swiper {...skillsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((skills, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                        <div className="image relative overflow-hidden">
                          <img
                            className="relative opacity-0 min-w-full"
                            src="https://storage.googleapis.com/eternal-blue-dev-public/img/thumbs/4-3.jpg"
                            alt=""
                          />
                          <div
                            className="main  absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                            data-img-url={skills.img}
                            style={{ backgroundImage: skills.img }}
                          />
                          <a
                            className="edrea_tm_full_link skills_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details w-full float-left bg-[#222] pt-[30px] pr-[20px] pb-[27px] pl-[20px]">
                          <h3 className="text-[15px] mb-[4px]">
                            <a
                              className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                              href="#"
                              onClick={() => onClick(i)}
                            >
                              {skills.title}
                            </a>
                          </h3>
                          <span>
                            <a
                              className="no-underline text-main-color text-[14px] transition-all duration-300 hover:text-white-color"
                              href="#"
                              onClick={() => onClick(i)}
                            >
                              {skills.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentSkills" />
                    <span className="pagination_progress">
                      <span className="all allSkills">
                        <span />
                      </span>
                    </span>
                    <span className="totalSkills" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
