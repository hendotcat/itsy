import { storiesOf } from "@storybook/react";
import React from "react";
import Post from "./post.component";

const stories = storiesOf("Post", module);

stories.add("[default]", () => <Post>{"<p>body html</p>"}</Post>);
