import { motion } from "motion/react";
import Hero from "../assets/image/hero.png";
import { FaCode } from "react-icons/fa6";
import { FaCodeMerge } from "react-icons/fa6";
import { IoShapes } from "react-icons/io5";
import { BsWindowFullscreen } from "react-icons/bs";

function AboutPage() {
  return (
    <section id="about" className="bg-white py-10 font-main overflow-hidden ">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center "
        >
          <div className="avatar mb-8 lg:mb-0 lg:mr-8">
            <div className="w-48 rounded-full  ">
              <img src={Hero} alt="Profile Image" />
            </div>
          </div>
          <div className="flex-1 mx-3">
            <h1 className="text-4xl font-bold text-marine mb-4">
              Tentang Saya
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Saya seorang pengembang web profesional yang berdedikasi untuk
              menciptakan solusi inovatif dan ramah pengguna. Dengan pemahaman
              mendalam tentang berbagai teknologi pengembangan web, saya
              berfokus pada hasil yang berkualitas tinggi.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-3 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="card bg-putih shadow-xl "
          >
            <div className="card-body text-center">
              <div className="flex flex-col items-center justify-center">
                <FaCode className="text-3xl mb-5 text-marine" />
                <h1 className="card-title text-blue text-xl font-bold">
                  Front End Development
                </h1>
                <h3 className="text-black text-left text-base my-3">
                  Bahasa Pemrograman:{" "}
                </h3>
                <div className="text-slate-600 my-3">
                  <p>HTML, JS, CSS</p>
                </div>
                <h3 className="text-black text-left text-base my-3">
                  Framework:{" "}
                </h3>
                <div className="text-slate-600">
                  <p className="my-3">Boostrap</p>
                  <p className="my-3">Tailwind</p>
                  <p className="my-3">React</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="card bg-putih shadow-xl"
          >
            <div className="card-body text-center  bg-marine rounded-lg">
              <div className="flex flex-col items-center justify-center">
                <FaCodeMerge className="text-3xl mb-5" />
                <h2 className="card-title text-blue text-xl font-bold">
                  Back End
                </h2>
                <h3 className="text-black text-left text-base my-3">
                  Bahasa Pemrograman:{" "}
                </h3>
                <div className="text-slate-600 my-3">
                  <p>PHP</p>
                </div>
                <h3 className="text-black text-left text-base my-3">
                  Framework:{" "}
                </h3>
                <div className="text-slate-600">
                  <p className="my-3">CodeIgniter</p>
                  <p className="my-3">Laravel</p>
                  <p className="my-3">MySQL</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="card bg-putih shadow-xl"
          >
            <div className="card-body text-center">
              <div className="flex flex-col items-center justify-center">
                <IoShapes className="text-3xl mb-5 text-marine" />
                <h2 className="card-title text-blue font-bold">Web Design</h2>
                <h3 className="text-black text-left text-base my-3">Paham: </h3>
                <div className="text-slate-600 my-3">
                  <p>Web Desgin, UI, Editing Foto / Video</p>
                </div>
                <h3 className="text-black text-left text-base my-3">Tools: </h3>
                <div className="text-slate-600">
                  <p className="my-3">Figma</p>
                  <p className="my-3">Adobe</p>
                  <p className="my-3">Canva</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default AboutPage;
