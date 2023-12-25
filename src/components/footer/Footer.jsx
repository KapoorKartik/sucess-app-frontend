import React from "react";
// import { div } from 'react-router-dom'
import "./Footer.css";
export const Footer = () => {
    let props = {selectHome: true}
  return (
    <footer >
      <div className="row bottom-menu mx-1">
        <hr />
        {props.selectHome ? (
          <div class="col-3">
            <div to="/" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/2196F3/home--v1.png"
                alt="home--v1"
              />
              <br />
              Home
            </div>
          </div>
        ) : (
          <div class="col-3">
            <div to="/" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/2196F3/home--v1.png"
                alt="home--v1"
              />
              <br />
              Home
            </div>
          </div>
        )}

        {props.selectStudy ? (
          <div class="col-3">
            <div to="/study" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/2196F3/saving-book.png"
                alt="saving-book"
              />
              <br />
              Study
            </div>
          </div>
        ) : (
          <div class="col-3 text-decoration-none">
            <div to="/study" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/2196F3/saving-book.png"
                alt="saving-book"
              />
              <br />
              Test
            </div>
          </div>
        )}

        {props.selectStore ? (
          <div class="col-3">
            <div to="/store" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/2196F3/online-store.png"
                alt="home--v1"
              />
              <br />
              Store
            </div>
          </div>
        ) : (
          <div class="col-3">
            <div to="/store" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/2196F3/online-store.png"
                alt="home--v1"
              />
              <br />
              Courses
            </div>
          </div>
        )}

        {props.selectMore ? (
          <div class="col-3">
            <div to="/more" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/2196F3/brilliant-idea.png"
                alt="home--v1"
              />
              <br />
              More
            </div>
          </div>
        ) : (
          <div class="col-3">
            <div to="/more" className="text-decoration-none">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/2196F3/brilliant-idea.png"
                alt="home--v1"
              />
              <br />
              Practice
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
