import { DeleteIcon } from "../Icon/DeleteIcon";
import { EditIcon } from "../Icon/EditIcon";
import { EyeIcon } from "../Icon/EyeIcon";
import { UserIcon } from "../Icon/UserIcon";

export const TableBody = () => {
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
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="p-4 border border-gray-400">{item.dayAndTime}</td>
          <td className="p-4 border border-gray-400">{item.location}</td>
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
  );
};
