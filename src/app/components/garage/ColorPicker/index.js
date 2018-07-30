import * as React from 'react';
import s from './styles.css';

const ColorPicker = () => (
  <div className={s.container}>
    <div className={s.title}>COLOR</div>
    {['#979797', '#fff', '#28b7e4', '#f32757'].map((color) => (
      <div key={color} style={{ backgroundColor: color }} className={s.item}/>
    ))}
  </div>
);

export default ColorPicker;
