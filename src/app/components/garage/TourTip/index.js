import React from 'react';

import s from './styles.css';

const TourTip = (props) => {
  console.log(props);

  return (
    <div className={s.tip}>
      <div className={s.advice}>
        {props.content}
      </div>

      <div className={s.pic}>
        <img src="https://pbs.twimg.com/profile_images/1043470714479751170/zjLtFRoy_400x400.jpg"/>
      </div>
    </div>
  );
};

export default TourTip;
