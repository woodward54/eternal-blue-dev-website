import { useContext } from 'react';
import { context } from '../../context/context';
import Modal from './Modal';
const SkillsPopup = () => {
  const { showSkillsPopup, skillsPopup, skillsData } = useContext(context);
  return (
    <Modal open={skillsPopup} close={showSkillsPopup}>
      <div className="skills_popup_details w-full h-auto clear-both float-left px-[50px] pt-[50px] pb-[42px]">
        <div className="top_image">
          <img
            src="https://storage.googleapis.com/eternal-blue-dev-public/img/thumbs/4-2.jpg"
            alt=""
          />
          <div
            className="main"
            data-img-url="https://storage.googleapis.com/eternal-blue-dev-public/img/skills/1.jpg"
          ></div>
        </div>
        <div className="skills_main_title">
          <h3>{skillsData && skillsData.title}</h3>
          <span>
            <a
              className="no-underline text-main-color text-[14px] transition-all duration-300 hover:text-white-color"
              href="#"
            >
              {skillsData && skillsData.tag}
            </a>
          </span>
          <div></div>
        </div>
        <div className="text w-full float-left">
          {skillsData &&
            skillsData.des &&
            skillsData.des.map((des, i) => (
              <p key={i} className="mb-[10px]">
                {des}
              </p>
            ))}
        </div>
      </div>
    </Modal>
  );
};
export default SkillsPopup;
