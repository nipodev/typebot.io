import { createAction } from "@typebot.io/forge";
import { copyPasteOptionsSchema } from "../schema";

// This action definition primarily serves to pass the variable ID and display texts
// to the frontend component responsible for rendering the copy element.
// The actual copy-to-clipboard logic happens client-side upon interaction.
export const copyToClipboard = createAction({
  name: "Copy to Clipboard",
  type: "client-side", // Indicate this action is handled client-side
  options: copyPasteOptionsSchema,
  // This action retrieves the value of the specified variable client-side
  // and copies it. It doesn't set server-side variables directly via this action.
  getSetVariableIds: (options) => [], // No server-side variable setting
  // The actual copy logic will be part of the frontend component
  // that renders this block in the chat interface.
});

