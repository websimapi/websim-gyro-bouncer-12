import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, Img, useCurrentFrame } from "remotion";
const FPS = 60;
const getFrameDataForTime = (frames, time) => {
  let cumulativeTime = 0;
  for (let i = 0; i < frames.length; i++) {
    cumulativeTime += frames[i].dt;
    if (time < cumulativeTime) {
      return frames[i];
    }
  }
  return frames[frames.length - 1];
};
const ReplayComposition = ({ replayData }) => {
  const frame = useCurrentFrame();
  const time = frame / FPS;
  const { frames, avatarUrl, platformUrl } = replayData;
  const currentFrameData = getFrameDataForTime(frames, time);
  if (!currentFrameData) return null;
  const { player, platforms, cameraY } = currentFrameData;
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#3d5a80" }, children: /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { transform: `translateY(${-cameraY}px)` }, children: [
    platforms.map((p, i) => /* @__PURE__ */ jsxDEV(
      Img,
      {
        src: platformUrl,
        style: {
          position: "absolute",
          left: p.x,
          top: p.y,
          width: p.width,
          height: p.height
        }
      },
      `platform-${i}`,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 21
      }
    )),
    /* @__PURE__ */ jsxDEV(
      AbsoluteFill,
      {
        style: {
          left: player.x,
          top: player.y,
          width: player.width,
          height: player.height,
          transform: `scale(${player.scale})`,
          transformOrigin: "center center"
        },
        children: /* @__PURE__ */ jsxDEV(
          Img,
          {
            src: avatarUrl,
            style: {
              width: "100%",
              height: "100%",
              borderRadius: "50%"
            }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 57,
            columnNumber: 21
          }
        )
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 47,
        columnNumber: 17
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 30,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 29,
    columnNumber: 9
  });
};
export {
  ReplayComposition
};
