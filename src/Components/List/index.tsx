import { ComponentProps } from "react";
import Item from "./Item";

export const List = {
  Item: Item,
  _: ({ children, className }: ComponentProps<"div">) => (
    <ul className={className}>{children}</ul>
  ),
};
