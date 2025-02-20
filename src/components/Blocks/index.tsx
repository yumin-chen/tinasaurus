import React, { h } from "preact";
import { Features } from "../Features";
import { Hero } from "../Hero";
import { YouTubeEmbed } from "../YouTubeEmbed";

export const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks
        ? blocks.map(function (block, i) {
            switch (block._template) {
              case "hero":
                return h(
                  "div",
                  { "data-tinafield": `blocks.${i}`, key: i + block._template },
                  h(Hero, { data: block, index: i }),
                );
              case "features":
                return h(
                  "div",
                  { "data-tinafield": `blocks.${i}`, key: i + block._template },
                  h(Features, { data: block, index: i }),
                );
              case "youTubeEmbed":
                return h(
                  "div",
                  { "data-tinafield": `blocks.${i}`, key: i + block._template },
                  h(YouTubeEmbed, { data: block, index: i }),
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
