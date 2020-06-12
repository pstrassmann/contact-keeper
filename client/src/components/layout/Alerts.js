import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    <>
      <TransitionGroup>
        {alerts.length > 0 &&
          alerts.map((alert) => (
            <CSSTransition
              key={alert.id}
              appear={true}
              in={true}
              timeout={{ appear: 200, enter: 200, exit: 150 }}
              classNames="alert"
            >
              <div className={`alert alert-${alert.type}`}>
                <i
                  className="fas fa-info-circle"
                  style={{ marginRight: '0.5rem' }}
                />
                {alert.msg}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};

export default Alerts;
