import React, { useRef, useEffect } from "react";

function useOutsideClick(ref, callback) {
  // Alert if clicked on outside of element
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

// Component that alerts if you click outside of it
export default function OutsideClick(props) {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, props.do);

  return <div ref={wrapperRef}>{props.children}</div>;
}
