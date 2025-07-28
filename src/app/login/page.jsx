"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

const page = () => {

    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            const res = await axios.post("/api/check-pass", { password })
            if (res.status === 200 && res.data.success) {
                router.push("/form-data")
            } else {
                setError("Incorrect password.")
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError("Incorrect password.")
            } else {
                console.error(err)
                setError("Something went wrong.")
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
            >
                <h1 className="text-2xl font-semibold text-gray-800">Enter Admin Password</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition font-medium"
                >
                    Login
                </button>
                <div className="mt-2">Admin Password: <strong>Admin1234</strong></div>
            </form>
        </div>
    )
}

export default page
