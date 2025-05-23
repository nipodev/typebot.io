import { createBlock } from "@typebot.io/forge";
import { executeJs } from "./actions/executeJs";
import { JsButtonLogo } from "./logo";
import { jsButtonInputOptionsSchema, jsButtonInputSettingsSchema } from "./schema";

export const jsButtonBlock = createBlock({
  id: "js-button", // Unique ID for the block
  name: "JavaScript Button",
  tags: ["custom", "scripting", "button"],
  LightLogo: JsButtonLogo,
  // Define it as an input block type if it requires user interaction like a button click
  // Or potentially a different type if it just executes script without direct user input
  // Let's assume it's presented like an input/button for now.
  // The actual rendering and execution logic will be handled client-side.
  type: "input", // This might need adjustment based on how it integrates visually
  options: jsButtonInputOptionsSchema,
  settings: jsButtonInputSettingsSchema,
  // Link the client-side action
  actions: [executeJs],
});

