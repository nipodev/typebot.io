import { createAction, ExecuteJsResponse } from "@typebot.io/forge";
import { jsButtonInputOptionsSchema } from "../schema";

// This action definition primarily serves to pass the script content
// to the frontend component responsible for rendering the button.
// The actual JavaScript execution happens client-side upon button click.
export const executeJs = createAction({
  name: "Execute JavaScript",
  type: "client-side", // Indicate this action is handled client-side
  options: jsButtonInputOptionsSchema,
  // Define potential outcomes or data passed back, if any.
  // For now, let's assume it doesn't directly return data via this action.
  // Client-side execution might update variables directly.
  getSetVariableIds: (options) => [], // No server-side variable setting planned here
  // The actual execution logic will be part of the frontend component
  // that renders this block in the chat interface.
});

