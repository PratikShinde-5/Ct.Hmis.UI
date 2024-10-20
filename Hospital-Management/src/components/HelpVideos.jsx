import React, { useState, useRef } from "react";

export default function HelpVideos() {
  const [videos, setVideos] = useState([]); // Array to store uploaded videos and titles
  const [selectedFile, setSelectedFile] = useState(null); // State to handle file uploads
  const [videoTitle, setVideoTitle] = useState(""); // State to handle video title
  const fileInputRef = useRef(null); // Ref to reset file input after upload

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleUpload = () => {
    if (selectedFile && videoTitle) {
      // Add the uploaded video and its title to the videos array
      setVideos([
        ...videos,
        { url: URL.createObjectURL(selectedFile), title: videoTitle }
      ]);
      setSelectedFile(null); // Reset selected file after upload
      setVideoTitle(""); // Reset title after upload

      // Reset file input to "No file chosen"
      fileInputRef.current.value = null;
    }
  };

  const handleRemove = (index) => {
    // Remove the video at the given index from the videos array
    const updatedVideos = videos.filter((_, videoIndex) => videoIndex !== index);
    setVideos(updatedVideos);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Help Videos</h1>

      {/* Display video list or a message when no videos are available */}
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <video
                src={video.url}
                controls
                className="w-full h-48 object-cover rounded-md mb-2"
              ></video>
              {/* Styled video title */}
              <p className="text-sm font-semibold text-blue-800">{video.title}</p>
              {/* Minimal Remove Button */}
              <button
                onClick={() => handleRemove(index)}
                className="text-red-600 mt-2 underline text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No help videos available.</p>
      )}

      {/* File upload section */}
      <div className="mt-6">
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Enter video title"
          value={videoTitle}
          onChange={handleTitleChange}
          className="border p-2 mb-2 w-full"
        />
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Upload Video
        </button>
      </div>
    </div>
  );
}
