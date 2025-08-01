import { ComponentProps } from "react";
import Item from "./Item";

export const List = {
  Item: Item,
  _: ({ children, ...props }: ComponentProps<"ul">) => (
    <ul {...props}>{children}</ul>
  ),
};
