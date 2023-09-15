import React, { useState } from 'react';
import './Alert.css'; 

const Alert = () => {
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
      backgroundImage: `url("https://www.afscmelocal88.org/wp-content/uploads/2023/03/pexels-monstera-5849597-1536x901.jpg")`, margRight:'50px'}} className="alert-container ">
              <div>
      <h2 style={{  marginTop:'30px',marginLeft:'10px', paddingLeft:'30px', color:'white'}}>ALERT DASHBOARD </h2>
     <div style={{margin: '30px'}}>
     <div style={{ backgroundColor: '#5b0303',color: '#fff',   padding: '10px',
      marginBottom: '10px',
      marginRight: '850px',
      marginLeft:'20px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'}}>
        {`ALERT ID: 10100000     RIG ID: 104    ALERT DESCRIPTION: EXPLOSION` }
        <button className="close-button">
            X
          </button>
          </div>  
     
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          {`ALERT ID: ${alert.id}     RIG ID: ${alert.rigId}     ALERT DESCRIPTION: ${alert.message}` }  
          <button onClick={() => {if(alert.type!=='success'){removeAlert(alert.id)}}} className="close-button">
            X
          </button>
        
        </div>
      ))}
      </div>
      </div>
        <div>
        <h2 style={{ marginTop:'20px', marginLeft: '20px', padding: '20px', color:'white'}}>
            NEW ALERT
        </h2>
      <div className="custom-alert " style={{padding: '5px', margin: '10px'}}>
      <input
          type="text"
          placeholder="Rig ID"
          value={rigId}
          onChange={(e) => setRigId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alert Message"
          value={customAlert}
          onChange={(e) => setCustomAlert(e.target.value)}
        />
       
        
        <select
          value={customAlertType}
          onChange={(e) => setCustomAlertType(e.target.value)}
        >
          <option value="success">SEVERE</option>
          <option value="warning">CRITICAL</option>
          <option value="error">TRIVIAL</option>


        </select>

        <button onClick={raiseCustomAlert} style={{backgroundColor:'red', opacity:'50%'}}>Raise An Alert</button>
      </div>
        </div>
        

     
    </div>
  );
};

export default Alert;
