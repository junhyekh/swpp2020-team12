/* eslint react/prop-types: 0 */
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Studycomp = (props) => {
    const bar = props.rate>0.8 ? <ProgressBar striped variant="danger" label={`${Math.round(props.rate*100)}%`} animated now={props.rate*100} />
    : props.rate>0.6 ? <ProgressBar variant="warning" label={`${Math.round(props.rate*100)}%`} animated now={props.rate*100} /> :
    <ProgressBar variant="info" label={`${Math.round(props.rate*100)}%`} animated now={props.rate*100} />;
    return (
        <div className="User">
            <div className="img">
                <img className='last_img' src={props.image}/>
            </div>
            <div className="username">{props.name}</div>
            <div className="state"> {props.state} </div>
            <div className="bar">
                {bar}
            </div>
        </div>
    );
};
export default Studycomp;
