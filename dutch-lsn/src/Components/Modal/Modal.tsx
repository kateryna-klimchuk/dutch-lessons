import React from "react";

interface ModalInterface {
  children: React.ReactNode;
}

export const Modal: React.FunctionComponent<ModalInterface> = ({
  children,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
};
