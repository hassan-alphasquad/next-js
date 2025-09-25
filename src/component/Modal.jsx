"use client";
import Image from "next/image";
import { useState } from "react";

const Main = () => {
  const [todo, settodo] = useState([]);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enroll: "",
    date: "",
  });
  const [showModal, setshowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      setshowModal(false);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(todo[index]);
    setshowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedTodo = [...todo];
      updatedTodo[editIndex] = FormData;
      settodo(updatedTodo);
      setEditIndex(null);
    } else {
      settodo([...todo, FormData]);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      enroll: "",
      date: "",
    });
    setshowModal(false);
  };

  const handleDelete = (index) => {
    settodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex items-center mt-5 hover:border-b-2 ml-8 h-13">
        <h2 className="font-bold text-2xl mr-2 mb-3">Students List</h2>
        <Image
          className="p-4 ml-auto mb-3"
          src="/icons/arrow.svg"
          width={50}
          height={50}
          alt="not found"
        />
        <button
          className="font-normal mb-3 mr-5 text-md h-12 w-48 cursor-pointer hover: text-white rounded-md bg-amber-500"
          onClick={() => {
            setEditIndex(null);
            setFormData({
              name: "",
              email: "",
              phone: "",
              enroll: "",
              date: "",
            });
            setshowModal(true);
          }}
        >
          ADD NEW STUDENT
        </button>
      </div>

      <div className="flex justify-evenly items-center h-3.5 mt-6 ">
        <p className="font-semibold text-sm text-gray-400"> Name </p>
        <p className="font-semibold text-sm text-gray-400"> Email </p>
        <p className="font-semibold text-sm text-gray-400"> Phone </p>
        <p className="font-semibold text-sm text-gray-400"> Enroll Number </p>
        <p className="font-semibold text-sm text-gray-400"> Date of admission </p>
      </div>
      <div className="mt-5">
        <ul>
          {todo?.map((student, i) => (
            <li
              key={i}
              className="flex items-center justify-between h-20 mt-5 ml-5"
            >
              <Image
                className="w-16 h-14 rounded-[8px]"
                src="/images/photo.svg"
                height={50}
                width={50}
                alt=""
              />
              <div className="font-semibold text-sm">
                {student.name}
              </div>
              <div className="font-semibold text-sm">
                {student.email}
              </div>
              <div className="font-semibold  text-sm">
                {student.phone}
              </div>
              <div className="font-semibold text-sm">
                {student.enroll}
              </div>
              <div className="font-semibold text-sm">
                {student.date}
              </div>
              <div className="flex ml-27">
                <Image
                  className="p-4 cursor-pointer"
                  src="/icons/pen.svg"
                  height={50}
                  width={50}
                  onClick={() => handleEdit(i)}
                  alt="edit"
                />
                <Image
                  className="p-4 hover:p-3 cursor-pointer"
                  src="/icons/trash.svg"
                  height={50}
                  width={50}
                  onClick={() => handleDelete(i)}
                  alt="delete"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-opacity-25 backdrop-brightness-50 flex justify-center items-center"
          id="wrapper"
          onClick={handleClose}
        >
          <div className="w-xl justify-center flex flex-col">

            <div className="bg-white rounded-lg text-black p-2">
              <h2 className="flex ml-5 justify-between text-xl  font-bold">{editIndex !== null ? "Edit Student" : "Add Student"}

                <button
                  className="text-white text-xl bg-black px-2 rounded-sm"
                  onClick={() => setshowModal(false)}
                >
                  x
                </button>
              </h2>
              <p className="ml-5 text-gray-500">Automatically generate a form from a Zod schema.</p>
              <form onSubmit={handleSubmit}>
                <p className="ml-6 mt-10 mb-2 font-semibold text-gray-700">Username</p>
                <input
                  className="flex mx-auto h-11 w-lg outline-0 p-3 border border-gray-200 rounded-lg placeholder:text-gray-400"
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={FormData.name}
                  onChange={handleInputChange}
                  required
                />
                <p className="ml-7 mt-6 mb-2 font-semibold text-gray-700">Email</p>
                <input
                  className="flex mx-auto h-11 w-lg outline-0 p-3 border border-gray-200 rounded-lg placeholder:text-gray-400"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={FormData.email}
                  onChange={handleInputChange}
                  required
                />
                <p className="ml-7 mt-6 mb-2 font-semibold text-gray-700">Phone</p>
                <input
                  className="flex mx-auto h-11 w-lg outline-0 p-3 border border-gray-200 rounded-lg placeholder:text-gray-400"
                  type="tel"
                  name="phone"
                  placeholder="Enter your Phone"
                  value={FormData.phone}
                  onChange={handleInputChange}
                  required
                />
                <p className="ml-7 mt-6 mb-2 font-semibold text-gray-700">Enroll</p>
                <input
                  className="flex mx-auto h-11 w-lg outline-0 p-3 border border-gray-200 rounded-lg placeholder:text-gray-400"
                  type="text"
                  name="enroll"
                  placeholder="Enter your Enroll Number"
                  value={FormData.enroll}
                  onChange={handleInputChange}
                  required
                />
                <p className="ml-7 mt-6 mb-2 font-semibold text-gray-700">Date</p>
                <input
                  className="flex mx-auto h-11 w-lg outline-0 text-gray-400 p-3 border border-gray-200 rounded-lg placeholder:text-gray-400"
                  type="date"
                  name="date"
                  value={FormData.date}
                  onChange={handleInputChange}
                  required
                />

                <button
                  className="font-normal mb-3 ml-25 mt-5 text-sm h-11 w-96 cursor-pointer text-white rounded-lg bg-amber-500"
                  type="submit"
                > {editIndex !== null ? "SAVE CHANGES" : "ADD NEW STUDENT"}</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
