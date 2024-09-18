const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 ">
      <div className="text-white max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="text-white text-lg font-semibold mb-4 ">
          About Us
          <p className="mb-4 font-normal text-gray-400">
            Music School is a premier institution dedicated to teaching the art
            and the science of music. We nurture talent fromthe ground up,
            fostering the vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 ">
            Quick Links
          </h2>
          <ul className="font-normal text-gray-400">
            <li>
              <a
                href="#"
                className=" hover:text-white transition-colors duration-300 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-white transition-colors duration-300 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-white transition-colors duration-300 "
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-white transition-colors duration-300 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 font-normal text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 "
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 "
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 "
            >
              Tweeter
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="font-normal text-gray-400">
            <p>Lashore, Pakistan</p>
            <p>Lahore 5400</p>
            <p>Email:Info@musicschool.com</p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
