"use client"
import React, { useState } from 'react'
import axios from 'axios'


const page = () => {
    const [name, setName] = useState("")
    const [scholar_number, setScholar_number] = useState("")
    const [department, setDepartment] = useState("")
    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/form_data', { name, scholar_number, department })
            const status = response.status
            if (status == 200) {
                alert("Form Submitted Succesfully")
                setName("")
                setDepartment("")
                setScholar_number("")
            }
        } catch (error) {
            console.log("Error in Sunmitting Data")
            alert("Something Went Wrong")
        }
    }
    return (
        <div>

        </div>
    )
}

export default page
