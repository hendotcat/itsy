import { configure } from "@storybook/react";

const components = ["header", "ident", "post"];

function loadStories() {
  components.forEach(name => require(`../${name}/${name}.stories.tsx`));
}

configure(loadStories, module);
