import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";

// import useWindowDimensions from "../check-dimensions/check-dimensions";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  // const { height, width } = useWindowDimensions();
  // const newSections = () => {
  //   if (width <= 469) {
  //     sections[4] = sections[2];
  //     sections[2] = sections[4];
  //     return sections;
  //   } else if (width > 469) {
  //     return sections;
  //   }
  // };

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
