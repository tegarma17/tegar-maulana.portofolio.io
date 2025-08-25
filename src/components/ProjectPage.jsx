import { motion } from "motion/react";
import image1 from "../assets/image/aboutus.png";
import image2 from "../assets/image/ERWE.png";
import image3 from "../assets/image/feature.png";
import image4 from "../assets/image/home.png";
import image5 from "../assets/image/landingbayi.png";
import image6 from "../assets/image/desain1.png";
import image7 from "../assets/image/desain2.png";
function ProjectPage() {
  return (
    <section id="project" className="bg-white py-10 font-main">
      <div className="container mx-auto">
        <div className="project bg-white px-3 lg:pt-0 flex flex-col items-center space-y-8 ">
          <h1 className=" md:pt-1 mt-10 lg:mt-0 text-2xl font-bold text-blue ">
            Project Pribadi
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-black">
            <div className="">
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image3} alt="" />
            </div>
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
            <div>
              {" "}
              <img src={image5} alt="" />
            </div>
            <div class="col-span-3 grid grid-cols-subgrid gap-4">
              <div class="col-start-2">
                {" "}
                <img src={image6} alt="" />
              </div>
              <div>
                <img src={image7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectPage;
