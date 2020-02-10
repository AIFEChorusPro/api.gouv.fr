import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import colors from "../../styles/colors";

const MENU_OPTIONS = [
  {
    id: "api-description",
    label: "Description",
    hasNoDetails: true
  },
  {
    id: "access",
    label: "Accès"
  },
  {
    id: "contact",
    label: "Support"
  },
  {
    id: "monitoring",
    label: "Supervision"
  },
  {
    id: "rate_limiting",
    label: "Limite d'usage"
  },
  {
    id: "partenaires",
    label: "Partenaires"
  },
  {
    id: "doc_tech",
    label: "Documentation technique"
  },
  {
    id: "services",
    label: "Services",
    hasNoDetails: true
  }
];

const Menu = ({ detail, selectedItem, select }) => {
  return (
    <div className="menu">
      {MENU_OPTIONS.map(menu => (
        <div key={menu.id}>
          <div
            className={`item ${selectedItem === menu.id && "selected"}`}
            onClick={() => select(menu.id)}
          >
            {menu.label}
            {!menu.hasNoDetails &&
              !detail[menu.id] &&
              menu.id !== "partenaires" && (
                <div className="ui grey mini label">Non renseigné</div>
              )}
          </div>
        </div>
      ))}
      <style jsx>{`
        .menu {
          position: sticky;
          overflow: hidden;
          border-radius: 4px;
          top: 2em;
          max-width: 245px;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border: 2px solid ${colors.lightGrey};
        }
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
          color: black;
          transition: background 300ms ease-in-out, border 50ms ease-in-out;
          cursor: pointer;
        }
        .item:hover {
          background-color: ${colors.lightBlue};
        }
        .item.selected {
          border-left: 5px solid ${colors.smartData};
        }
      `}</style>
    </div>
  );
};

Menu.propTypes = {
  detail: PropTypes.object.isRequired
};

export default Menu;
