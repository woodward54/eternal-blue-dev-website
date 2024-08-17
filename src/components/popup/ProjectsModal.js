import { useContext } from 'react';
import { context } from '../../context/context';
import Modal from './Modal';

const ProjectsModal = () => {
  const { showProjectsPopup, projectsPopup, projectsData } =
    useContext(context);

  return (
    <Modal close={showProjectsPopup} open={projectsPopup}>
      {projectsData && (
        <div className="projects_popup_details w-full h-auto clear-both float-left py-12 px-4">
          <div className="projects_main_title mb-4">
            <h3>{projectsData.title}</h3>
            <div />
          </div>
          <div className="text w-full float-left">
            {projectsData.description.map((data) => (
              <p key={data} className="mb-4">
                {data}
              </p>
            ))}
          </div>
          <div className="additional_images w-full h-auto clear-both float-left">
            <ul className="gallery_zoom ml-[-15px] list-none">
              {projectsData.horizontalVideos.map((vid) => (
                <div key={vid} className="mb-[15px] w-full pl-[15px]">
                  <video
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                    className="rounded-[10px]"
                  >
                    <source src={vid} type="video/mp4"></source>
                  </video>
                </div>
              ))}
              {projectsData.verticalVideos.map((vid) => (
                <div key={vid} className="mb-[15px] float-left w-1/2 pl-[15px]">
                  <video
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                    className=" rounded-[10px]"
                  >
                    <source src={vid} type="video/mp4"></source>
                  </video>
                </div>
              ))}
              {projectsData.horizontalImgs.map((img) => (
                <li key={img} className="mb-[15px] float-left w-full pl-[15px]">
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="image relative">
                      <img
                        className="opacity-0 min-w-full"
                        src="https://storage.googleapis.com/eternal-blue-dev-public/img/thumbs/87-48.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                        data-img-url={img}
                        style={{
                          backgroundImage: `url(${img})`,
                        }}
                      />
                      <a className="edrea_tm_full_link zoom" href={img} />
                    </div>
                  </div>
                </li>
              ))}
              {projectsData.verticalImgs.map((img) => (
                <li key={img} className="mb-[15px] float-left w-1/2 pl-[15px]">
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="image relative">
                      <img
                        className="opacity-0 min-w-full"
                        src="https://storage.googleapis.com/eternal-blue-dev-public/img/thumbs/41-71.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                        data-img-url={img}
                        style={{
                          backgroundImage: `url(${img})`,
                        }}
                      />
                      <a className="edrea_tm_full_link zoom" href={img} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
};
export default ProjectsModal;
