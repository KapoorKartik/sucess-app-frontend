import React from "react";
// import { div } from 'react-router-dom'
import { Link } from "react-router-dom";
export const Footer = () => {
  let props = { selectHome: true };
  return (
    <footer>
      <div className="row bottom-menu mx-1">
        <hr />

        <div className="col-3">
          <Link to="/" className="text-decoration-none">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/2196F3/home--v1.png"
              alt="home--v1"
            />
            <br />
            Home
          </Link>
        </div>

        <div className="col-3 text-decoration-none">
          <Link to="/listing" className="text-decoration-none">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/2196F3/saving-book.png"
              alt="saving-book"
            />
            <br />
            Test
          </Link>
        </div>

        <div className="col-3">
          <Link to="/mocktest" className="text-decoration-none">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/2196F3/online-store.png"
              alt="home--v1"
            />
            <br />
            Courses
          </Link>
        </div>

        <div className="col-3">
          <Link to="/questions" className="text-decoration-none">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/2196F3/brilliant-idea.png"
              alt="home--v1"
            />
            <br />
            Practice
          </Link>
        </div>
      </div>
    </footer>
  );
};
