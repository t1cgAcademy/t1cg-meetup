import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p>This site is created for the Meetup with ♥</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="meetUpRepo">
              <a
                href="https://github.com/t1cgAcademy/t1cg-meetup"
                target="_blank"
              >
                T1CG Meetup Repo
              </a>
            </p>
          </div>
          <div className="col-sm-6">
            <p className="meetUpLink">
              <a
                href="https://www.meetup.com/T1CG-Academy/events/"
                target="_blank"
              >
                Check us out on Meetup
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
