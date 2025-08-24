import { motion } from "motion/react";
import Hero from "../assets/image/hero.png";
import portoPdf from "../assets/pdf/CV.pdf";
function HeroPage() {
  return (
    <div className="HeroPage">
      <div className="hero bg-putih min-h-screen font-main">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={Hero}
            className="max-w-1/2 rounded-lg "
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h2 className="text-black">Halo, Saya</h2>
            <h1 className="text-5xl font-bold text-marine">
              Tegar Maulana Alfaridzi
            </h1>
            <h3 className="text-black font-bold mt-10 text-xl">
              Junior Web Development, Web Design
            </h3>
            <p className=" text-black">
              Saya seorang Junior web development dengan keahlian bahasa
              pemrograman PHP, HTML, CSS dan JS dan juga memahami Framework Web
              Development
            </p>
            <a
              href={portoPdf}
              download="CV.pdf"
              className="btn bg-marine border-none shadow-md mt-5"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default HeroPage;
