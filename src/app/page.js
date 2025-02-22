"use client"; // ✅ Add this at the top

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    if (image) formData.append("image", image);
    if (description) formData.append("description", description);

    try {
      const response = await axios.post("http://127.0.0.1:5000/search", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Find Cheaper Alternatives</h1>

        <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-3 block w-full border rounded p-2" />
        <input type="text" placeholder="Or type a description..." value={description} onChange={(e) => setDescription(e.target.value)}
          className="mb-3 block w-full border rounded p-2" />

        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? "Searching..." : "Find Alternative"}
        </button>

        {result && (
          <div className="mt-5">
            <h2 className="text-lg font-semibold">Cheaper Alternative:</h2>
            <img src={result.image_url} alt="Alternative" className="w-full h-48 object-cover rounded mt-2" />
            <a href={result.link} target="_blank" rel="noopener noreferrer" className="block mt-3 text-blue-600 underline">
              View Product
            </a>
          </div>
        )}
      </div>
    </div>
  );
}