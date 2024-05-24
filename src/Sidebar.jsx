import React from "react";
export function Sidebar({ children }) {
  return (
    <div className="sidebar">
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {index < React.Children.count(children) - 1 ? <hr /> : null}
          </>
        );
      })}
    </div>
  );
}
