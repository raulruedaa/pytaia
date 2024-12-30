import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
      <iframe width="560" height="315" src={`${videoId}?enablejsapi=1&rel=0`} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}