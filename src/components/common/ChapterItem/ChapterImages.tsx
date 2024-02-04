import React, { useState } from 'react';
type Images = {
  images: string[];
};

export const ChapterImages = (img: Images) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = img.images.length;

  const imageUrl = img.images[currentPage];
  return (
    <div>
      <div className="flex items-center justify-center p-1">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Page ${currentPage + 1}`}
            key={currentPage}
            width={512}
            height={1080}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        )}
      </div>
      <div className="mt-4 flex justify-center">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="m-2 rounded-lg bg-slate-950 p-3"
          >
            Back
          </button>
        )}
        {totalPages && currentPage < totalPages - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="m-2 rounded-lg bg-slate-950 p-3"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
