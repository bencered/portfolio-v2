import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "fs";
import { resolve } from "path";

// Read fonts from local @fontsource packages (no network dependency)
function loadFont(pkg: string, file: string): ArrayBuffer {
  const path = resolve(`node_modules/@fontsource/${pkg}/files/${file}`);
  return readFileSync(path).buffer as ArrayBuffer;
}

const interRegular  = loadFont("inter", "inter-latin-400-normal.woff");
const interSemiBold = loadFont("inter", "inter-latin-600-normal.woff");
const plexSerif     = loadFont("ibm-plex-serif", "ibm-plex-serif-latin-600-normal.woff");

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get("title") ?? "Bence Redmond";
  const desc  = url.searchParams.get("desc")  ?? "Software engineering student & developer based in Limerick, Ireland.";
  const titleSize = title.length > 30 ? "52px" : "68px";

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "1200px",
          height: "630px",
          background: "#0d0d0c",
          padding: "72px 80px",
          fontFamily: "Inter",
        },
        children: [
          // Top: site label
          {
            type: "div",
            props: {
              style: { display: "flex", alignItems: "center", gap: "10px" },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#38bdf8",
                      flexShrink: 0,
                    },
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    },
                    children: "bence.red",
                  },
                },
              ],
            },
          },
          // Middle: title + description
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "center",
                gap: "20px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontFamily: "IBM Plex Serif",
                      fontSize: titleSize,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.92)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    },
                    children: title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "22px",
                      color: "rgba(255,255,255,0.48)",
                      lineHeight: 1.5,
                      maxWidth: "820px",
                    },
                    children: desc,
                  },
                },
              ],
            },
          },
          // Bottom: name + accent dash
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
              children: [
                {
                  type: "span",
                  props: {
                    style: {
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: "-0.01em",
                    },
                    children: "Bence Redmond",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      width: "36px",
                      height: "2px",
                      background: "#38bdf8",
                      borderRadius: "1px",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
        { name: "IBM Plex Serif", data: plexSerif, weight: 600, style: "normal" },
      ],
    }
  );

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
    .render()
    .asPng();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
