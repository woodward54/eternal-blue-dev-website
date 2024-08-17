import { Fragment, useContext } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { context } from '../context/context';
import { projectsSlider } from '../sliderProps';

const data = [
  {
    title: 'Location Based NFT Platform',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/geo-drops/header.png',
    client: 'Niantic',
    category: 'Web App, WebAR, Web3',
    overview:
      "A fullstack web app I built while at Niantic. The platform was a test bed to collect metrics for Niantic's VPS technology.",
    description: [
      'Tech Stack: React, Mapbox, 8th Wall, Niantic VPS, Fastify, Prisma, PostgresSQL, Zod',
      "This was a platform to allow users to collect NFTs tied to specific IRL locations using VPS Proof of Location tech. I built this web app with under the direction of our Web3 Director Chikai. Delivered a working prototype in under 3 weeks that integrated Niantic's VPS system, automatically logged hit rate metrics, and displayed them to the user.",
    ],
    verticalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/geo-drops/IMG_2869.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/geo-drops/IMG_2866.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/geo-drops/IMG_2870.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/geo-drops/IMG_2872.png',
    ],
    verticalVideos: [],
    horizontalImgs: [],
    horizontalVideos: [],
  },
  {
    title: 'Autoconvert',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/autoconvert/header.png',
    client: 'Reach Digital',
    category: 'Web App',
    overview:
      'Founding CTO, Built the v1 platform to collect landing page metrics, and automatically create landing page variants.',
    description: [
      'https://www.autoconvert.co/',
      'Tech Stack: React, Fastify, MongoDB, Firebase',
      'As the founding CTO, I Designed and built v1 of the product and delivered the 1st prototype to customers for testing. Worked with stakeholders to improve the product in a rapid feedback loop. I also hired and managed contractors.',
    ],
    verticalImgs: [],
    verticalVideos: [],
    horizontalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/autoconvert/header.png',
    ],
    horizontalVideos: [],
  },
  {
    title: 'Reach Digital Admin Dashboard',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/reach-admin/home.png',
    client: 'Reach Digital',
    category: 'Web App',
    overview:
      'I built a custom dashboard for Reach Digital to better view their Ad metrics.',
    description: [
      'Tech Stack: Nextjs, Flowbite, Clerk Auth, Tailwind, tRPC, Prisma, Facebook Marketing API',
      'Custom ads metrics reporting dashboard I built for the client. Features include facebook marketing API integration to pull live data, date range picker, custom charts, and a fully featured table.',
    ],
    verticalImgs: [],
    verticalVideos: [],
    horizontalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/reach-admin/home.png',
    ],
    horizontalVideos: [],
  },
  {
    title: 'Unity AR Prototypes',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/ar-prototypes/header.png',
    client: 'Niantic',
    category: 'AR, Unity',
    overview: 'Various AR Prototypes I built while at Niantic.',
    description: [
      'Tech Stack: Unity, Niantic ARDK (Lightship)',
      'Various AR prototypes I built while working R&D at Niantic. NFT Airdrops, AR Trading Cards, Turn based combat game I designed, and dodgeball with dynamic AI pathfinding based on the mesh generated at runtime.',
    ],
    verticalImgs: [],
    verticalVideos: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/ar-prototypes/airdrops.mp4',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/ar-prototypes/ar_trading_cards.mp4',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/ar-prototypes/pfp_combat.mp4',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/ar-prototypes/reality_channel_full.mov',
    ],
    horizontalImgs: [],
    horizontalVideos: [],
  },
  {
    title: 'Flayze',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/flayze/header.jpeg',
    client: 'Flayze',
    category: 'Web App, Web3',
    overview:
      'Founder, NFT ticketing platform to reduce concert ticket scams, scalping, and make reselling tickets easier.',
    description: [
      'Tech Stack: React, Three.js, Express, Solidity, Auth0',
      'Flayze was an NFT ticketing startup I founded. The goal was to reduce concert ticket scamming and scalping. Users would also receive a commemorative 3d NFT for each event. The system debuted at the Flayze launch party, and at HackDFW 2021.',
      'I built the backend, smart contracts, and 3d graphics work on the frontend.',
    ],
    verticalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/flayze/IMG_8246.png',
    ],
    verticalVideos: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/flayze/RenderedVideo.mov',
    ],
    horizontalImgs: [],
    horizontalVideos: [],
  },
  {
    title: 'Waystar',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/header2.png',
    client: 'Niantic',
    category: 'Unity Game, AR',
    overview:
      'A full AR/Web3 game I designed and built while at Niantic. Join a faction and battle for control of the universe...',
    description: [
      'Tech Stack: Unity, Niantic ARDK (Lightship), Fastify, Firebase Auth',
      'This is a full game I designed a built at Niantic. Its a space themed real world RTS where players join factions and battle for control of the universe.',
      'I used procedural generation algorithms alongside chatGPT to generate procedural planets which had their own environments, backstories, and bases to fight.',
    ],
    verticalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/header.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/map.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/ar.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/vert1.jpeg',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/vert2.jpeg',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/vert3.jpeg',
    ],
    verticalVideos: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/demo.mov',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/waystar/full_demo.mov',
    ],
    horizontalImgs: [],
    horizontalVideos: [],
  },
  {
    title: 'SXSW Activation',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/sxsw/sxsw_winner.png',
    client: 'Niantic',
    category: 'Web App, Web3, WebAR, Generative Art',
    overview:
      'Explore SXSW, check-in to events, gain a generative NFT based on locations you visited.',
    description: [
      'Tech Stack: React, Mapbox, 8th Wall, NodeJS, Fastify, Solidity, P5.js',
      'The SpotX @ SXSW game was a city wide scavenger hunt in Austin, TX. Players engaged in an augmented reality experience at a location (aka Spot) when an event was happening. A map showed events across 5 categories - music, film, tech, food, and local - that gave players a chance to rack up points by collecting as many tokens as possible towards a category reward of $1000 each and an overall game reward of $5000.',
      ' The augmented reality experience featured a floating mystery box full of tokens that players could collect as time ticked down.',
      ' Players earned a first-of-its-kind user generated NFT to commemorate their experience. The places that they visited are encoded in the NFT that they own, so instead of saving the badge they have something that won’t collect dust.',
    ],
    verticalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/sxsw/sxsw_winner.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/sxsw/webapp.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/sxsw/IMG_0219.jpg',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/sxsw/alt.jpg',
    ],
    verticalVideos: [],
    horizontalImgs: [],
    horizontalVideos: [],
  },
  {
    title: 'MYNE',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/myne/header.png',
    client: 'Niantic',
    category: 'Web App, WebAR, Web3',
    overview:
      'Use your NFT cypher to solve puzzles tied to real world locations.',
    description: [
      'Tech Stack: React, Mapbox, 8th Wall (WebAR), Fastify, Web3Auth, Smart Contracts',
      "MYNE was a game we built for Niantic's 2022 Lightship Conference. Players were givin an NFT with hidden clues to solve real world puzzles. As the player progressed, the NFT was mutated on chain to reveal new secrets. At the end of the game, players entered their secret 'seed phrase' which unlocked a lifesize wallet with a prize.",
    ],
    verticalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/myne/wallet1.jpeg',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/myne/wallet2.jpeg',
    ],
    verticalVideos: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/myne/final.mp4',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/myne/walkthrough.mp4',
    ],
    horizontalImgs: [],
    horizontalVideos: [],
  },
  {
    title: 'NASA Suits',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/header.png',
    client: 'NASA',
    category: 'Unity, AR, Magic Leap App',
    overview:
      'Designed and built an AR headset prototype to help astronauts while on spacewalks. Tested onsite at Houston Space Center.',
    description: [
      'Tech Stack: Unity, Magic Leap, Raspberry Pi',
      'Senior design project, my team and I designed and built an AR headset prototype to help astronauts while on spacewalks. The system included AR telemetry windows, navigation, live video feed from external mounted cameras, touch sensor gloves, and various AR features to provide additional situational awareness. Tested onsite at Houston Space Center in 2019.',
      "In response COVID, in person testing was suspended. So I built a 'Mars Simulator' (shown below) to test the system useability and navigation algorithms.",
      'The project was featured in many articles and aired on the news.',
    ],
    verticalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/onsite.jpeg',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/news.jpg',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/profile.jpeg',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/glove.png',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/camera.png',
    ],
    verticalVideos: [],
    horizontalImgs: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/screenshot.png',
    ],
    horizontalVideos: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/nasa/Nav.mov',
    ],
  },
  {
    title: 'Audio Reactive Visuals',
    img: 'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/visuals/header.png',
    client: 'Just for fun :)',
    category: 'Unity',
    overview:
      'Im using Unity to create visuals to support my music. Sound reactive and MIDI integration',
    description: [
      'Tech Stack: Unity, Unity Particle System, C# Scripting',
      'Building a system that will respond to MIDI and audio to create live visuals, just for fun :)',
    ],
    verticalImgs: [],
    verticalVideos: [],
    horizontalImgs: [],
    horizontalVideos: [
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/visuals/movie_040.mp4',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/visuals/movie_037.mp4',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/visuals/movie_045.mp4',
      'https://storage.googleapis.com/eternal-blue-dev-public/img/projects/visuals/trimmed.mov',
    ],
  },
];

const Projects = () => {
  const onClick = (value) => {
    showProjectsPopup(data[value]);
  };
  const { showProjectsPopup } = useContext(context);
  return (
    <Fragment>
      <div className="edrea_tm_section" id="projects">
        <div className="section_inner">
          <div className="edrea_tm_projects swiper-section w-full h-auto clear-both float-left px-[20px]">
            <div className="edrea_tm_main_title pb-2 md:pb-5">
              <h3 className="">
                Things I've worked on
                {/* <span className="text-pink-color">Projects</span> */}
              </h3>
            </div>
            <div className="projects_list mt-4 md:mt-10 w-full h-auto clear-both float-left relative">
              {/* <div className="projects_list w-[75rem] h-auto clear-both float-left relative"> */}
              <Swiper
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                effect={'coverflow'}
                spaceBetween={20}
                // slidesPerView={1}
                // loopAdditionalSlides={1}
                navigation={{
                  nextEl: '.my_next',
                  prevEl: '.my_prev',
                }}
                breakpoints={{
                  700: {
                    spaceBetween: 100,
                  },
                  1200: {
                    spaceBetween: 180,
                  },
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 80,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow]}
                className="swiper-container"
              >
                <div className="swiper-wrapper">
                  {data.map((projects, i) => (
                    <SwiperSlide className="swiper-slide w-56 md:w-72" key={i}>
                      {/* <div className="w-full h-full relative rounded-2xl bg-blue-500">hello</div> */}
                      <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                        <div className="image relative overflow-hidden">
                          <img
                            className="relative opacity-0 min-w-full"
                            src="https://storage.googleapis.com/eternal-blue-dev-public/img/thumbs/4-3.jpg"
                            alt=""
                          />
                          <div
                            className="main  absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                            data-img-url={projects.img}
                            style={{ backgroundImage: projects.img }}
                          />
                          <a
                            className="edrea_tm_full_link projects_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details w-full float-left bg-[#222] p-[20px]">
                          <h3 className="text-[15px] mb-[4px]">
                            <a
                              className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                              href="#"
                              onClick={() => onClick(i)}
                            >
                              {projects.title}
                            </a>
                          </h3>
                          <p className="no-underline my-4 text-main-color text-sm">
                            {projects.category}
                          </p>
                          <p className="no-underline mb-4 text-main-color text-sm">
                            {projects.overview}
                          </p>
                          <div className="w-full flex justify-center">
                            <div className="edrea_tm_button transition_link w-auto">
                              <a href="#" onClick={() => onClick(i)}>
                                More Info
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill flex justify-center mt-4 md:pt-12">
                  {/* <div className="my_pagination_in">
                    <span className="currentProjects" />
                    <span className="pagination_progress">
                      <span className="all allProjects">
                        <span />
                      </span>
                    </span>
                    <span className="totalProjects" />
                  </div> */}
                  <div className="my_navigation font-bold text-4xl">
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
export default Projects;
