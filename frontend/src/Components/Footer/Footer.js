const Footer = () => {
    return (
      <footer className="bg-black text-white py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold">EventSphere</h2>
              <p className="text-gray-400">Bringing the best experiences to you.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Quick Links</h2>
              <ul className="text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                {/* <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li> */}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Follow Us</h2>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <hr className="border-gray-700 my-4" />
          <p className="text-gray-400">&copy; IC-Divya Maam.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  