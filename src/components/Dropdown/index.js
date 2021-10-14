import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  const options = ["React", "Vue", "Angular", "Node", "MongoDB"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}

        <AiOutlineCaretDown />
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
