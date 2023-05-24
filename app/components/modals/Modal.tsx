"use client";

import React, { useCallback, useEffect, useState } from "react";
import clsx from "classnames";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/50">
        <div className="relative w-full min-h-full flex items-center justify-center">
          {/* CONTENT */}
          <div
            className={clsx(
              "w-full md:w-4/6 lg:w-3/6 xl:w-2/5 translate duration-300",
              showModal
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
          >
            <div className="translate h-full lg:h-auto md:h-auto rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* HEADER */}
              <div className="relative flex items-center justify-center p-6 rounded-t border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute right-3"
                >
                  <IoMdClose />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* BODY */}
              <div className="relative p-10 flex-auto">{body}</div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
