import { createPortal } from "react-dom";

export default function Modal({ children }) {
  return <div>{createPortal(children, document.getElementById("modal"))}</div>;
}
