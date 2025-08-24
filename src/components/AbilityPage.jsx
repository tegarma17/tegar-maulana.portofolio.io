import UX from "../assets/image/ux.png";
import Backend from "../assets/image/backend.png";
import Laravel from "../assets/image/laravel.png";
import React from "../assets/image/react.png";
import CI from "../assets/image/ci.png";
import CSS from "../assets/image/css-3.png";
import HTML from "../assets/image/html.png";
import { motion } from "motion/react";
function AbilityPage() {
  return (
    <div className="AbilityPage">
      <section>
        <div className="container mx-auto">
          <div className="keahlian  flex flex-col items-center justify-center space-y-8 p-4 ">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-bold text-marine"
            >
              Keahlian
            </motion.h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 font-main md:grid-cols-4 lg:grid-cols-5 gap-5">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                className="card bg-marine w-45 shadow-sm"
              >
                <figure>
                  <img src={Laravel} className="max-w-1/2 mt-5" alt="Shoes" />
                </figure>
                <div className="card-body mx-auto">
                  <h2 className="card-title ">Laravel</h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.3 }}
                className="card bg-gray-400 w-45 shadow-sm"
              >
                <figure>
                  <img src={CI} className="max-w-1/2 mt-5" alt="Shoes" />
                </figure>
                <div className="card-body mx-auto">
                  <h2 className="card-title">CodeIgniter</h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.6 }}
                className="card bg-gray-400 lg:bg-marine w-45 shadow-sm"
              >
                <figure>
                  <img src={React} className="max-w-1/2 mt-5" alt="Shoes" />
                </figure>
                <div className="card-body mx-auto">
                  <h2 className="card-title">React</h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.9 }}
                className="card bg-marine lg:bg-gray-400 w-45 shadow-sm"
              >
                <figure>
                  <img src={UX} className="max-w-1/2 mt-5" alt="Shoes" />
                </figure>
                <div className="card-body mx-auto">
                  <h2 className="card-title">Front End</h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2 }}
                className="card bg-marine w-45 shadow-sm"
              >
                <figure>
                  <img src={Backend} className="max-w-1/2 mt-5" alt="Shoes" />
                </figure>
                <div className="card-body mx-auto">
                  <h2 className="card-title">BackEnd</h2>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2 }}
                className="lg:col-span-2 lg:col-start-2"
              >
                <div className="card bg-gray-400 lg:bg-marine w-45 shadow-sm">
                  <figure>
                    <img src={CSS} className="max-w-1/2 mt-5" alt="Shoes" />
                  </figure>
                  <div className="card-body mx-auto">
                    <h2 className="card-title">CSS</h2>
                  </div>
                </div>
              </motion.div>
              <div className="lg:col-span-2 lg:col-start-4">
                <motion.div
                  initial={{ opacity: 0, y: -200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2 }}
                  className="card bg-gray-400 lg:bg-marine w-45 shadow-sm"
                >
                  <figure>
                    <img src={HTML} className="max-w-1/2 mt-5" alt="Shoes" />
                  </figure>
                  <div className="card-body mx-auto">
                    <h2 className="card-title">HTML</h2>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AbilityPage;
