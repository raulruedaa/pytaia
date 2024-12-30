import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gradient-to-br from-green-100 via-yellow-50 to-pink-100 shadow-lg border-4 border-yellow-200">
      <iframe 
        width="560" 
        height="315" 
        src={`${videoId}?enablejsapi=1&rel=0`} 
        title={title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        className="rounded-lg border-t border-green-300"
      ></iframe>
    </div>
  );
}
