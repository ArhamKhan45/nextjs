"use client";
// components/TwitterEmbed.js

import React from "react";

const TwitterEmbed = () => {
  return (
    <div>
      <div style={{ width: "200px", margin: "0 auto" }}>
        <blockquote class="twitter-tweet" dataHeight={200}>
          <p lang="en" dir="ltr">
            Launching{" "}
            <a href="https://twitter.com/Starlink?ref_src=twsrc%5Etfw">
              @Starlink
            </a>{" "}
            in Fiji with ⁦
            <a href="https://twitter.com/PresidentFiji?ref_src=twsrc%5Etfw">
              @PresidentFiji
            </a>
            ⁩! <a href="https://t.co/mOmf2HNkm9">pic.twitter.com/mOmf2HNkm9</a>
          </p>
          &mdash; Elon Musk (@elonmusk){" "}
          <a href="https://twitter.com/elonmusk/status/1793447467519803452?ref_src=twsrc%5Etfw">
            May 23, 2024
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
};

export default TwitterEmbed;
