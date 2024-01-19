import ReactDOM from "react-dom";
import { useEffect } from "react";

/*
Acknowledgement:
This file was modified from Stephen Grider's 'Modern React with Redux' Udemy course
*/

// A component that displays a modal window (a message box that overlays other content)
function Modal({ children, actionBar }) {
  // Disable scrolling while the modal window is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // Use 'createPortal' because a modal logically belongs to specific section
  // of the app but it needs to be rendered as if <body> is its parent
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-80 p-10 bg-white min-w-96 min-h-48">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
