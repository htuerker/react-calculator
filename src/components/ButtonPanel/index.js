import './styles.css';
import React from 'react';
import Button from '../Button';

const ButtonPanel = ({ handleClick }) => {
  return (
    <div className="button-panel">
      <div className="button-group">
        <Button name="AC"  color="gray" handleClick={handleClick} />
        <Button name="+/-" color="gray" handleClick={handleClick} />
        <Button name="%"   color="gray" handleClick={handleClick} />
        <Button name="÷" handleClick={handleClick} />
      </div>
      <div className="button-group">
        <Button name="7" color="gray" handleClick={handleClick} />
        <Button name="8" color="gray" handleClick={handleClick} />
        <Button name="9" color="gray" handleClick={handleClick} />
        <Button name="x" handleClick={handleClick} />
      </div>
      <div className="button-group">
        <Button name="4" color="gray" handleClick={handleClick} />
        <Button name="5" color="gray" handleClick={handleClick} />
        <Button name="6" color="gray" handleClick={handleClick} />
        <Button name="-" handleClick={handleClick} />
      </div>
      <div className="button-group">
        <Button name="1" color="gray" handleClick={handleClick} />
        <Button name="2" color="gray" handleClick={handleClick} />
        <Button name="3" color="gray" handleClick={handleClick} />
        <Button name="+" handleClick={handleClick} />
      </div>
      <div className="button-group">
        <Button name="0" color="gray" handleClick={handleClick} wide={true} />
        <Button name="." color="gray" handleClick={handleClick} />
        <Button name="=" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default ButtonPanel;
