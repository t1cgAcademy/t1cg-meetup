import React from 'react';
// import './style.css';

export default function MemberCard(props) {
  return (
    <div className="card memberCard">
      <div className="img-container">
        <img
          alt={props.Name}
          src={
            props.imgURL.length < 2
              ? 'https://via.placeholder.com/350x150'
              : props.imgURL
          }
        />
      </div>
      <div className="memberCardContent">
        <ul>
          <li>
            <strong>Name:</strong> {props.Name}
          </li>
          <li>
            <strong>Occupation:</strong>{' '}
            {props.Occupation.length < 1 ? 'Team Member' : props.Occupation}
          </li>
          <li>
            <strong>Bio:</strong> {props.Bio.length < 1 ? 'Hello!' : props.Bio}
          </li>
          {props.socialMedia ? (
            <>
              <li>
                <strong>Twitter:</strong>{' '}
                <a
                  href={'https://www.twitter.com/' + props.Twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.Twitter}
                </a>
              </li>
              <li>
                <strong>Facebook:</strong>{' '}
                <a
                  href={props.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.Facebook}
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href={props.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.LinkedIn}
                </a>
              </li>
              <li>
                <strong>Github:</strong>{' '}
                <a
                  href={props.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.Github}
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href={props.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.LinkedIn}
                </a>
              </li>
              <li>
                <strong>Github:</strong>{' '}
                <a
                  href={props.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.Github}
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
