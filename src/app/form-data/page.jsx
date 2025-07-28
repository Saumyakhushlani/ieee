"use client"
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
const page = () => {
    const [formData, setFormData] = useState([])
    useEffect(() => {
        try {
            const response = axios.get('/api/form_data')
            setFormData(response.data.formData)
        } catch (error) {
            console.log("Erro in Fetching Data", error)
        }
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default page
