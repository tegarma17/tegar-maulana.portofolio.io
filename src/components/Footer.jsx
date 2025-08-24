import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-marine text-primary-content p-10">
      <aside>
        <h1 className="font-navbar text-blue text-2xl font-bold tracking-tighter">tegar</h1>
        <p className="font-bold font-main">Tegar Maulana Alfaridzi</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/Tegar.maula/">
            <FaFacebookF className="text-2xl font-bold" />
          </a>
          <a href="https://www.instagram.com/tmaaf_/">
            <FaInstagram className="text-2xl font-bold" />
          </a>
          <a href="https://github.com/tegarma17">
            <FaGithub className="text-2xl font-bold" />
          </a>
          <a href="https://wa.me/6287752890469">
            <FaWhatsapp className="text-2xl font-bold" />
          </a>
          <a href="https://www.linkedin.com/in/tegar-maulanaa/">
            <FaLinkedin className="text-2xl font-bold" />
          </a>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
