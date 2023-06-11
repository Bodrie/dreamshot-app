import React, { useRef } from "react";
import OverlayContainer from "../OverlayContainer";
import styles from "./SuccessfulModal.module.scss";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

interface SuccessfulModalProps {
  succModalOpen: boolean;
  setSuccModalOpen: (succModalOpen: boolean) => void;
}

const SuccessfulModal = ({
  succModalOpen,
  setSuccModalOpen,
}: SuccessfulModalProps) => {
  const { modal, title, description, btn } = styles;
  const modalRef = useRef(null);

  useDisableBodyScroll(succModalOpen);

  return (
    <>
      {succModalOpen && (
        <OverlayContainer>
          <div ref={modalRef} className={modal}>
            <p className={title}>Congratulations!</p>
            <p className={description}>Your order it’s on its way.</p>
            <button className={btn} onClick={() => setSuccModalOpen(false)}>
              Ok
            </button>
          </div>
        </OverlayContainer>
      )}
    </>
  );
};

export default SuccessfulModal;
