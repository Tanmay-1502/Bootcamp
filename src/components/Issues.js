import React, { useState } from 'react';
import './Issues.css'; 

const Issues = () => {
  const [alerts, setAlerts] = useState([]);
  const [customAlert, setCustomAlert] = useState('');
  const [rigId, setRigId]=useState('');
  const [customAlertType, setCustomAlertType] = useState('success'); 


  const addAlert = (message, type, rigId) => {
    const newAlert = {
      message,
      type,
      id: Date.now(),
      rigId
    };

    setAlerts([...alerts, newAlert]);
  };

  const removeAlert = (id) => {
    const updatedAlerts = alerts.filter((alert) => alert.id !== id);
    setAlerts(updatedAlerts);
  };

  const raiseCustomAlert = () => {
    if (customAlert.trim() !== '') {
      addAlert(customAlert, customAlertType, rigId);
      setCustomAlert(''); 
      setRigId('')
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url("https://pluspng.com/img-png/oil-rig-png-hd--2880.jpg")`}} className="alert-container ">
        <h1 style={{color:'white', marginLeft:'20px'}}>
            ISSUES
        </h1>
      <div className="custom-alert " style={{padding: '5px', margin: '10px'}}>
      <input
          type="text"
          placeholder="Rig ID"
          value={rigId}
          onChange={(e) => setRigId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Issue Description"
          value={customAlert}
          onChange={(e) => setCustomAlert(e.target.value)}
        />
       
        
        <select
          value={customAlertType}
          onChange={(e) => setCustomAlertType(e.target.value)}
        >
          <option value="success">OPEN</option>
          <option value="warning">RESOLVED</option>

        </select>

        <button onClick={raiseCustomAlert}>Raise An Issue</button>
      </div>
      <h4 style={{color:'white', backgroundColor:'black' , marginTop:'30px'}}>Recent Issues </h4>
     <div style={{margin: '30px'}}>
     
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          {`ISSUE ID: ${alert.id}     RIG ID: ${alert.rigId}     ISSUE DESCRIPTION: ${alert.message}` }  
          <button onClick={() => removeAlert(alert.id)} className="close-button">
            X
          </button>
        
        </div>
      ))}
      </div>
    </div>
  );
};

export default Issues;
