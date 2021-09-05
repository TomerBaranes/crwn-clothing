import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";

import { Link } from "react-router-dom";

import "./colleciton-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <Link className="title" to={`/shop/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
