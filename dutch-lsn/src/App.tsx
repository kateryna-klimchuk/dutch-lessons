import React from "react";
import { EditIcon } from "./Components/Icon/EditIcon";
import { EyeIcon } from "./Components/Icon/EyeIcon";
import { DeleteIcon } from "./Components/Icon/DeleteIcon";
import { UserIcon } from "./Components/Icon/UserIcon";

function App() {
  const data = [
    {
      dayAndTime: "Monday 9:00",
      location: "Bladel",
      teacher: "Mary N",
      level: "A0",
      notes: "Any additional information",
    },
    {
      dayAndTime: "Tuesday 14:30",
      location: "Eersel",
      teacher: "Rob van der Meer",
      level: "A1",
      notes: "",
    },
    {
      dayAndTime: "Thursday 9:00",
      location: "Vessem",
      teacher: "Mieke Vlass",
      level: "A0",
      notes: "",
    },
    {
      dayAndTime: "Friday 9:00",
      location: "Eersel",
      teacher: "Jacob Roberts",
      level: "B1",
      notes: "",
    },
  ];

  return (
    <div className="mx-auto">
      <header className="w-full p-4 bg-white shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-semibold">Dutch lessons schedule</h1>
          </div>

          <div className="flex gap-2 items-center">
            <button className="border border-gray-400 rounded py-2.5 px-3  hover:bg-gray-100 transition">
              <UserIcon />
            </button>
            <button className="border border-gray-400 rounded py-2 h px-3 hover:bg-gray-100 transition">
              Login
            </button>
            <button className="border border-gray-400 rounded py-2 h px-3 hover:bg-gray-100 transition">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="min-h-screen flex justify-center p-4">
        <div className="w-full">
          <table className="w-full table-auto border border-gray-400 bg-white shadow-md rounded overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 border border-gray-400 text-left">
                  Day / time
                </th>
                <th className="p-4 border border-gray-400 text-left">
                  Location
                </th>
                <th className="p-4 border border-gray-400 text-left">
                  Teacher
                </th>
                <th className="p-4 border border-gray-400 text-left">
                  Student level
                </th>
                <th className="p-4 border border-gray-400 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 border border-gray-400">
                    {item.dayAndTime}
                  </td>
                  <td className="p-4 border border-gray-400">
                    {item.location}
                  </td>
                  <td className="p-4 border border-gray-400">{item.teacher}</td>
                  <td className="p-4 border border-gray-400">{item.level}</td>

                  <td className="p-4 border border-gray-400">
                    <div className="flex items-center justify-between">
                      <p>{item.notes}</p>
                      <div className="flex items-center justify-center gap-2">
                        <button className="border border-gray-400 rounded hover:bg-gray-100 p-1 px-2 transition">
                          <EyeIcon />
                        </button>
                        <button className="border border-gray-400 rounded hover:bg-gray-100 p-1 px-2 transition">
                          <EditIcon />
                        </button>
                        <button className="border border-gray-400 rounded hover:bg-gray-100 p-1 px-2 transition">
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <table className="">
          <tr className="">
            <th className="border px-2">Time</th>
            <th className="border px-2">Monday</th>
            <th className="border">Tuesday</th>
            <th className="border">Wednesday</th>
            <th className="border">Thursday</th>
            <th className="border">Friday</th>
          </tr>
          <tr className="border px-2">
            <td className="border px-2">9:00</td>
          </tr>
          <tr className="border px-2">
            <td className="border px-2">10:00</td> */}

      {/* <td className="border px-2">
              <div>
                <p>Location:</p>
                <p>Bladel</p>
                <p>Teacher:</p>
                <p>Blabla</p>
                <p>Level:</p>
                <p>A0</p>
              </div>
            </td>
            <td className="border px-2"></td>
            <td className="border px-2"></td>
            <td className="border px-2"></td>
            <td className="border px-2"></td>
          </tr>
          <tr className="border px-2">
            <td className="border px-2">11:00</td>
          </tr>
        </table> */}
    </div>
    // </div>
  );
}

export default App;
