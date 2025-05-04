import React, { useState } from "react";
import { TableHeader } from "./Components/Table/TableHeader";
import { TableBody } from "./Components/Table/TableBody";
import { Header } from "./Components/Header/Header";
import { LessonForm } from "./Components/LessonForm/LessonForm";
import { Modal } from "./Components/Modal/Modal";

// import { EmptyState } from "./Components/EmptyState/EmptyState";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-auto">
      <Header />
      <div className="min-h-screen flex justify-center p-4">
        <div className="w-full">
          {/* TODO: Enable EmptyState when implement data props into table */}
          {/* <EmptyState /> */}
          <table className="w-full table-auto border border-gray-400 bg-white shadow-md rounded overflow-hidden">
            <TableHeader />
            <TableBody onClick={() => setIsModalOpen(true)} />
          </table>
          <Modal
            isOpen={isModalOpen}
            onClose={() =>
              // setIsModalOpen(false)
              console.log("click here")
            }
          >
            <LessonForm
              date={""}
              teacher={""}
              location={""}
              level={""}
              notes={""}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
