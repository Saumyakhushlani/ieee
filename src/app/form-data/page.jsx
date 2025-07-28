"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"

const Page = () => {
  const [formData, setFormData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/form_data")
        setFormData(response.data.formData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-12">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Submitted Forms
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {formData.length > 0 ? (
          formData.map((item) => (
            <div
              key={item._id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Scholar No:</span>{" "}
                {item.scholar_number}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Department:</span>{" "}
                {item.department}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Submitted at:{" "}
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No form data found.
          </p>
        )}
      </div>
    </div>
  )
}

export default Page
