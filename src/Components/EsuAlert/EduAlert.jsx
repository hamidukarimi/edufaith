import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import "./EduAlert.css";
import { useEffect } from 'react';

function EduAlert({alertMessage, closeAlert}) {

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert();
    }, 3000);
  })
    
  return (
    <>
      <div className='edufaith-alert'>
      <div className="ed_parent">
        <div className="alert-icon">
          <FontAwesomeIcon icon={faInfoCircle}/>
        </div>
        <div className="alert-message">{alertMessage}</div>
        <button
          className="close-alert"
          onClick={closeAlert}
        >
          &times;
        </button>
      </div>
      </div>
    </>
  );
}

export default EduAlert;
