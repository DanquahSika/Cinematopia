import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4">
            <h3 className="font-bold mb-4">Movies</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Top Rated</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Trending Movies</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Populat Movies</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Action</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Adventure</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Romance</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Classics</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h3 className="font-bold mb-4">More</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Reviews</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Disclaimer</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Site Map</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h3 className="font-bold mb-4">Stay Connected</h3>
            <form className="mb-4">
              <input type="email" placeholder="Enter Email Address" className="bg-gray-700 text-gray-400 rounded-l px-4 py-2 outline-none w-full" />
              <button type="submit" className="bg-gray-600 text-white rounded-r px-4 py-2">Subscribe</button>
            </form>
            <div className='flex space-x-2 m-4 items-center justify-center'>
                        <div className='social-links'><i className="fab fa-facebook-f"></i></div>
                        <div className='social-links'><i className="fab fa-twitter"></i></div>
                        <div className='social-links'><i className="fab fa-instagram"></i></div>
                        <div className='social-links'><i className="fab fa-linkedin-in"></i></div>
                        <div className='social-links'><i className="fab fa-tumblr"></i></div>
                        <div className='social-links'><i className="fab fa-reddit-alien"></i></div>
                    </div>
            <div className="text-sm">
              <div className="mb-2">
                <i className="far fa-building mr-2"></i>
                Aliguntugui Street, Accra.
              </div>
              <div>
                <i className="fas fa-gopuram mr-2"></i>
                Banana Street, Accra.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© All Rights Reserved 2024</p>
        <p className="text-gray-400">Designed by BeyondTechTeam</p>
      </div>
    </footer>
  );
};

export default Footer;
