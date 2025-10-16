import React from "react";

interface MovieCardProps {
  title?: string;
  posterUrl?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title = "Movie Title", posterUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
      {posterUrl ? (
        <img src={posterUrl} alt={title} className="w-full h-80 object-cover" />
      ) : (
        <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
