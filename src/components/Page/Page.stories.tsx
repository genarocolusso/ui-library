import { Page } from ".";

export default {
  title: "MyComponents/Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "the title of the page",
      control: {
        type: "text",
      },
    },
    children: {
      description: "the child of the page",
      control: {
        type: "text",
      },
    },
  },
};

export const PageOne = {
  args: {
    title: "page 1 here",
    children: "page 1 children",
  },
};
export const PageTwo = {
  args: {
    title: "page 2  here",
    children: "page 2 children wow",
  },
};
