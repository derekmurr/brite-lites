import React from 'react';
import ColorPicker from './ColorPicker';

const Header = (props) => {
  
  return (
    <div className="wrapper">
      <div className="silver-border">
        <header>
          <h1>brite lites</h1>

          <div className="controls">
            <div className="color-picker-block">
              <ColorPicker color={1} changeColor={props.changeSelectedColor} />
              <ColorPicker color={2} changeColor={props.changeSelectedColor} />
              <ColorPicker color={3} changeColor={props.changeSelectedColor} />
              <ColorPicker color={4} changeColor={props.changeSelectedColor} />
              <ColorPicker color={5} changeColor={props.changeSelectedColor} />
              <ColorPicker color={6} changeColor={props.changeSelectedColor} />
              <ColorPicker color={7} changeColor={props.changeSelectedColor} />
              <ColorPicker color={8} changeColor={props.changeSelectedColor} />
            </div>

            <div className="button-block">
              <button className="control-button button-clear">Clear</button>
              <button className="control-button button-load">Load</button>
              <button className="control-button button-save">Save</button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;