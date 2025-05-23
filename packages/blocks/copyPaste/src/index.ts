import { createBlock } from "@typebot.io/forge";
import { copyToClipboard } from "./actions/copyToClipboard";
import { CopyPasteLogo } from "./logo";
import { copyPasteOptionsSchema, copyPasteSettingsSchema } from "./schema";

export const copyPasteBlock = createBlock({
  id: "copy-paste", // Unique ID for the block
  name: "Copy Paste",
  tags: ["custom", "clipboard", "utility"],
  LightLogo: CopyPasteLogo,
  // This block likely presents information or an interactive element to copy
  // Let's classify it as an "input" type for now, similar to buttons or text inputs
  // The actual rendering and copy logic will be handled client-side.
  type: "input", // This might need adjustment based on visual integration
  options: copyPasteOptionsSchema,
  settings: copyPasteSettingsSchema,
  // Link the client-side action
  actions: [copyToClipboard],
});

