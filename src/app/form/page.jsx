"use client"
import React, { useState } from 'react'
import axios from 'axios'

const Page = () => {
  const [name, setName] = useState("")
  const [scholar_number, setScholar_number] = useState("")
  const [department, setDepartment] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/form_data', { name, scholar_number, department })
      if (response.status === 200) {
        alert("Form Submitted Successfully")
        setName("")
        setScholar_number("")
        setDepartment("")
      }
    } catch (error) {
      alert("Something Went Wrong")
    }
  }

  const departments = [
    "Architecture and Planning",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
    "Materials and Metallurgical Engineering",
    "Chemical Engineering"
  ]

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">IEEE MANIT</h2>
          <p className="text-gray-700 text-lg">
            The IEEE Student Branch MANIT is a dynamic community of student technologists,
            engineers, and innovators promoting technical growth, research, and collaboration
            within NIT Bhopal and beyond.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-gray-800">Student Info Form</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Scholar Number</label>
            <input
              type="text"
              value={scholar_number}
              onChange={(e) => setScholar_number(e.target.value)}
              placeholder="Enter your scholar number"
              required
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="" disabled>Select your department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page
