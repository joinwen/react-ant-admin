import { store } from "store/store";
import { SET_SIZE } from "store/app/app";
const enquire = require("enquire.js"),
  breakPoints = [
    undefined,
    ["xs", "480px"],
    ["sm", "576px"],
    ["md", "768px"],
    ["lg", "995px"],
    ["xl", "1200px"],
    ["xxl", "1600px"],
  ];
function registerBreakPoints() {
  console.log("register break points", breakPoints);
  breakPoints.reduceRight((prev, next) => {
    if (!prev) {
      enquire.register(`screen and (min-width: ${next[1]})`, {
        match: function () {
          store.dispatch(SET_SIZE(next[0]));
        },
      });
    }
    if (prev && next) {
      enquire.register(
        `screen and (min-width: ${next[1]}) and (max-width: ${prev[1]})`,
        {
          match: function () {
            store.dispatch(SET_SIZE(next[0]));
          },
        }
      );
    }
    if(!next) {
      enquire.register(`screen and (max-width: ${prev[1]})`, {
        match: function() {
          store.dispatch(SET_SIZE(prev[0]));
        }
      })
    }
    return next;
  }, undefined);
}
registerBreakPoints();
