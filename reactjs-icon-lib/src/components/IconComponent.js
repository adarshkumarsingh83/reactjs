import React from "react";
import { FaChrome } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosPower } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { GoBell } from "react-icons/go";
import { FiAperture } from "react-icons/fi";
import { GiAmericanShield } from "react-icons/gi";
import { WiDayHail } from "react-icons/wi";
import { DiApple } from "react-icons/di";
import { AiFillBank } from "react-icons/ai";
class IconComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
          <br />
          <br />
          <br />
          FONT AWESOME <FaChrome />
          <br />
          <br />
          <br />
          IONICONS <IoIosPower />
          <br />
          <br />
          <br />
          MATERIAL DESIGN ICONS <MdDashboard />
          <br />
          <br />
          <br />
          TYPICONS <TiHeartFullOutline />
          <br />
          <br />
          <br />
          GITHUB OCTICONS ICONS <GoBell />
          <br />
          <br />
          <br />
          FEATHER <FiAperture />
          <br />
          <br />
          <br />
          GAME ICONS <GiAmericanShield />
          <br />
          <br />
          <br />
          WEATHER ICONS <WiDayHail />
          <br />
          <br />
          <br />
          DEVICONS <DiApple />
          <br />
          <br />
          <br />
          ANT DESIGNE ICON <AiFillBank />
        </IconContext.Provider>
      </div>
    );
  }
}

export default IconComponent;
