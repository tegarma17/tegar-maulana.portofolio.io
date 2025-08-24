import { motion } from "motion/react";

function ProjectPage() {
  return (
    <div className="ProjectPage">
      <section className="bg-white py-10 font-main">
        <div className="container mx-auto">
          <div className="project bg-white px-3 lg:pt-0 flex flex-col items-center space-y-8 ">
            <h1 className=" md:pt-1 mt-10 lg:mt-0 text-2xl font-bold text-blue ">Project</h1>
            <div className="filter ">
              <input className="btn filter-reset " type="radio" name="metaframeworks" aria-label="All" />
              <input
                className="btn border-none bg-marine text-white"
                type="radio"
                name="metaframeworks"
                aria-label="Front End"
              />
              <input
                className="btn bg-marine border-none text-white"
                type="radio"
                name="metaframeworks"
                aria-label="BackEnd"
              />
              <input
                className="btn bg-marine border-none text-white"
                type="radio"
                name="metaframeworks"
                aria-label="Full Stack"
              />
            </div>
            <div className="box mr-5">
              <div className="carousel carousel-center rounded-box gap-5 ">
                <div className="carousel-item relative group ">
                  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Burger" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black lg:bg-transparent lg:backdrop-blur-md opacity-75 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="text-center opacity-100">
                      <h2 className="text-white text-lg font-bold mb-2 opacity-100">Front End</h2>
                      <button className="btn btn-primary opacity-100">Selengkapnya</button>
                    </div>
                  </div>
                </div>

                <div className="carousel-item relative group">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                    alt="Burger"
                    className="hover:scale-125 ease-in duration-150 w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black lg:bg-transparent lg:backdrop-blur-md opacity-75 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="text-center opacity-100">
                      <h2 className="text-white text-lg font-bold mb-2">BackEnd</h2>
                      <button className="btn btn-primary">Selengkapnya</button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item relative group">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                    alt="Burger"
                    className="hover:scale-125 ease-in duration-150 w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black lg:bg-transparent lg:backdrop-blur-md opacity-75 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="text-center opacity-100">
                      <h2 className="text-white text-lg font-bold mb-2">Desain Web</h2>
                      <button className="btn btn-primary">selengkapnya</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProjectPage;
