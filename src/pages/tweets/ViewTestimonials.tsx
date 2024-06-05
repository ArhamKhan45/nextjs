import React from "react";
import Style from "./Testimonials.module.css";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { LinkedinEmbed, TwitterEmbed, YouTubeEmbed } from "./twitter";
import { ImLinkedin } from "react-icons/im";

const ViewTestimonials = () => {
  const testimonialsData = [
    {
      facebook: {},
    },
    {
      linkedIn: {},
    },
    {
      youtube: {},
    },
    {
      twitter: {},
    },
  ];

  const url =
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198536341804978176";
  return (
    <section className={Style.Testimonial}>
      <section>
        <div className={`${Style.item_1} `}>
          <section>
            <YouTubeEmbed videoId="tJjhqXjEmA0?si=pz3es1MtmxrJXdFM" />
          </section>
          <div className={`${Style.icon_container} `}>
            <IoLogoYoutube size={24} className={`${Style.youtube_color}`} />
          </div>
        </div>
        <div className={Style.item_2}>
          <section>
            <TwitterEmbed tweetId={"1701920809265360962"} />
          </section>
          <div className={Style.icon_container}>
            <FaTwitter size={24} className={`${Style.twitter_color}`} />
          </div>
        </div>
        <div className={Style.item_3}>
          <section>
            <LinkedinEmbed postId={"ugcPost:7193844488975331330"} />
          </section>
          <div className={Style.icon_container}>
            <ImLinkedin size={24} className={` ${Style.linkedin_color}`} />
          </div>
        </div>
        <div className={Style.item_3}>
          <section>
            <LinkedinEmbed postId={"share:7197108367390044160"} />
          </section>
          <div className={Style.icon_container}>
            <ImLinkedin size={24} className={`${Style.linkedin_color}`} />
          </div>
        </div>

        <div className={Style.item_2}>
          <section>
            <TwitterEmbed tweetId={"1701920809265360962"} />
          </section>
          <div className={Style.icon_container}>
            <FaTwitter size={24} className={`${Style.twitter_color}`} />
          </div>
        </div>

        <div className={`${Style.item_1} `}>
          <section>
            <YouTubeEmbed videoId="tJjhqXjEmA0?si=pz3es1MtmxrJXdFM" />
          </section>
          <div className={Style.icon_container}>
            <IoLogoYoutube size={24} className="text-danger" />
          </div>
        </div>
      </section>
      <section>
        <div className={`${Style.item_1} `}>
          <section>
            <YouTubeEmbed videoId="tJjhqXjEmA0?si=pz3es1MtmxrJXdFM" />
          </section>
          <div className={`${Style.icon_container} `}>
            <IoLogoYoutube size={24} className={`${Style.youtube_color}`} />
          </div>
        </div>
        <div className={Style.item_2}>
          <section>
            <TwitterEmbed tweetId={"1701920809265360962"} />
          </section>
          <div className={Style.icon_container}>
            <FaTwitter size={24} className={`${Style.twitter_color}`} />
          </div>
        </div>
        <div className={Style.item_3}>
          <section>
            <LinkedinEmbed postId={"ugcPost:7193844488975331330"} />
          </section>
          <div className={Style.icon_container}>
            <ImLinkedin size={24} className={` ${Style.linkedin_color}`} />
          </div>
        </div>
        <div className={Style.item_3}>
          <section>
            <LinkedinEmbed postId={"share:7197108367390044160"} />
          </section>
          <div className={Style.icon_container}>
            <ImLinkedin size={24} className={`${Style.linkedin_color}`} />
          </div>
        </div>

        <div className={Style.item_2}>
          <section>
            <TwitterEmbed tweetId={"1701920809265360962"} />
          </section>
          <div className={Style.icon_container}>
            <FaTwitter size={24} className={`${Style.twitter_color}`} />
          </div>
        </div>

        <div className={`${Style.item_1} `}>
          <section>
            <YouTubeEmbed videoId="tJjhqXjEmA0?si=pz3es1MtmxrJXdFM" />
          </section>
          <div className={Style.icon_container}>
            <IoLogoYoutube size={24} className="text-danger" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViewTestimonials;
