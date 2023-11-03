import React from 'react';

export function Player() {
  return (
    <div className="h-full w-full pt-14">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/aZWWlqDy8nE?&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full"
      ></iframe>
    </div>
  );
}
