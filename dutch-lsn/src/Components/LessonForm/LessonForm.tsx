import React, { useState } from "react";

export interface LessonInterface {
  date: string;
  teacher: string;
  location: string;
  level: string;
  notes: string;
}

export const LessonForm: React.FunctionComponent<LessonInterface> = ({}) => {
  const [lesson, setLesson] = useState<LessonInterface>({
    date: "",
    teacher: "",
    location: "",
    level: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLesson((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 border rounded max-w-md">
      <input
        type="text"
        name="date"
        value={lesson.date}
        onChange={handleChange}
        placeholder="Date"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="teacher"
        value={lesson.teacher}
        onChange={handleChange}
        placeholder="Teacher"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="location"
        value={lesson.location}
        onChange={handleChange}
        placeholder="Location"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="level"
        value={lesson.level}
        onChange={handleChange}
        placeholder="Level"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="notes"
        value={lesson.notes}
        onChange={handleChange}
        placeholder="Notes"
        className="border p-2 w-full"
      />
    </div>
  );
};
