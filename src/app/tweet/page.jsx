// import React from "react";
// import { Tweet } from "react-tweet";

// const Tweetssss = () => {
//   return (
//     <div className="light w-full flex flex-wrap">
//       <div className="w-full md:w-1/3 p-2">
//         <div className="h-full border border-blue-600 overflow-auto">
//           <Tweet id="1793489218368672113" />
//         </div>
//       </div>
//       <div className="w-full md:w-1/3 p-2">
//         <div className="h-full border border-blue-600 overflow-auto">
//           <Tweet id="1629307668568633344" />
//         </div>
//       </div>
//       <div className="w-full md:w-1/3 p-2">
//         <div className="h-full border border-blue-600 overflow-auto">
//           <Tweet id="1793530687997260103" />
//         </div>
//       </div>
//       <div className="w-full md:w-1/3 p-2">
//         <div className="h-full border border-blue-600 overflow-auto">
//           <Tweet id="1793530687997260103" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tweetssss;
import { Tweet, TweetSkeleton } from "react-tweet";
import React, { Suspense } from "react";
const StringToJSX = ({ htmlString }) => {
  const createMarkup = (html) => {
    // Ideally, sanitize the html string here before returning it
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup(htmlString)} />;
};
// Example image URLs, replace with your own image URLs
const items = [
  "1629307668568633344",
  ` <iframe  width="100%" height="400px" src="https://www.youtube.com/embed/VuG7ge_8I2Y?si=q2hYEyEBCSiIEqjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  "",
  "",
  "",
  `<iframe  height=400 width=100%
  src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>`,
  "",
  "",
  "",
  "",
];

const FancyGallery = () => {
  return (
    <div className="container  flex flex-wrap w-full mx-auto px-[120px] py-8 border border-red-600">
      {items.map((item, index) => (
        <div
          key={index}
          className="= overflow-hidden rounded-lg shadow-lg w-[30%] h-auto mx-auto border-blue-600 border"
        >
          {item.length === 19 ? (
            <Suspense fallback={<TweetSkeleton />}>
              <Tweet id={item} className="border border-yellow-600 p-0 m-0" />
            </Suspense>
          ) : (
            <>
              <StringToJSX htmlString={item} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FancyGallery;

// import React from "react";
// import { Tweet } from "react-tweet";

// const Tweetssss = () => {
//   return (
//     <div className="light w-full flex flex-col md:flex-row flex-wrap">
//       <div className="w-full md:w-1/3 h-fit   border border-blue-600 overflow-auto">
//         <Tweet id="1793489218368672113" />
//         <Tweet id="1793530687997260103" />
//       </div>
//       <div className="w-full md:w-1/3 h-fit border border-blue-600 overflow-auto">
//         <Tweet id="1629307668568633344" />
//         <Tweet id="1793530687997260103" />
//       </div>
//       <div className="w-full md:w-1/3 h-fit border border-blue-600 overflow-auto">
//         <Tweet id="1793530687997260103" /> <Tweet id="1793530687997260103" />
//       </div>
//     </div>
//   );
// };

// export default Tweetssss;
