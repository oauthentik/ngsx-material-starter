import {
  trigger,
  sequence,
  state,
  animate,
  transition,
  style
} from "@angular/animations";

export const rowsAnimation = trigger("rowsAnimation", [
  transition("void => *", [
    style({
      height: "*",
      opacity: "0",
      transform: "scale3d(1,.3,1)",
      "box-shadow": "none"
    }),
    sequence([
      animate(
        ".31s ease",
        style({
          height: "*",
          opacity: ".2",
          transform: "scale3d(1,0,1)",
          "box-shadow": "none"
        })
      ),
      animate(
        ".35s ease",
        style({ height: "*", opacity: 1, transform: "scale3d(1,1,1)" })
      )
    ])
  ])
]);
