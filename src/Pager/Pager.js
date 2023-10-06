import "./Pager.css";
import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const Pager = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  }
  
  const decreasePage = (type) => {
    if (type === 1) {
      setActiveType(type);
    } else {
      setActiveType(activeType-1);
    }
  }

  const increasePage = (type) => {
    if (type === pages.length) {
      setActiveType(type);
    } else {
      setActiveType(activeType+1);
    }
  }

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const innerPager = pages.map(page =>
    <Button
      active={activeType === page}
      onClick={() => handleClick(page)}
      text={page}
    />)
  
    return (
      <Panel backgroundColor="blue">

        <Button
          onClick={() => decreasePage(activeType)}
          text="<"
        />

        {innerPager}

        <Button
          onClick={() => increasePage(activeType)}
          text=">"
        />

      </Panel>
    );
};

export default Pager;
