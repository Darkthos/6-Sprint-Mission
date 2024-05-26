interface RouterLinks {
  [key: string]: string;
}

export const ROUTER_LINKS: RouterLinks = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  items: "/items",
  itemsId: "/items/:id",
  additem: "/additem",
};
