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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting lesson:", lesson);
  };

  return (
    <div className="">
      <form className="p-4 border rounded max-w-md" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="border w-full p-2 bg-blue-200 hover:bg-blue-400 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
