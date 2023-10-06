import "./RadioButtons.css";
import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const RadioButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  }

  const buttonList = ["Apple", "Pear", "Orange"]

  const buttons = buttonList.map(button =>
    <Button
        active={activeType === button}
        onClick={() => handleClick(button)}
        text={button}
      />)

  return (
    <Panel backgroundColor="blue">
    {buttons}
    </Panel>
  );
};

export default RadioButtons;
