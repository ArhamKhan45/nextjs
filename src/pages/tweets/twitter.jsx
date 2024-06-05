"use client";

import { useEffect, useRef } from "react";

const loadTwitterScript = () => {
  if (window.twttr) {
    window.twttr.widgets.load();
  } else {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    };
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }
};

export const TwitterEmbed = ({ tweetId }) => {
  const tweetRef = useRef(null);

  useEffect(() => {
    loadTwitterScript();
  }, [tweetId]);

  return (
    <blockquote
      ref={tweetRef}
      className="twitter-tweet  "
      data-lang="en"
      // data-theme="light"
      align="center"
      data-theme="light"
    >
      <a
        href={`https://twitter.com/i/status/${tweetId}`}
        style={{ border: "2px solid red !important" }}
      >
        Loading tweet...
      </a>
    </blockquote>
  );
};

export function YouTubeEmbed({ videoId }) {
  return (
    <>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </>
  );
}
export function LinkedinEmbed({ postId }) {
  return (
    <>
      <iframe
        className={""}
        src={`https://www.linkedin.com/embed/feed/update/urn:li:${postId}`}
        seamless
        scrolling="no"
        allowFullScreen
        title="Embedded post"
      ></iframe>
    </>
  );
}
