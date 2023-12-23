import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
const Counter = ({topConunt}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <VisibilitySensor
        onChange={(visible) => {
          if (visible) {
            setIsVisible(true);
          }
        }}
      >
        <CountUp
          className="account-balance"
          end={topConunt}
          duration={3}
          style={{ fontSize: "50px", color: "#4BADE8" }}
          useEasing={true}
          useGrouping={true}
          start={isVisible ? 0 : null}
        />
      </VisibilitySensor>
    );
};

export default Counter;