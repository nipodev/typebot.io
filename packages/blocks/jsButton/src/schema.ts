import { z } from '@typebot.io/forge'

export const jsButtonInputOptionsSchema = z.object({
  scriptToExecute: z
    .string()
    .label('JavaScript code')
    .describe(
      'Enter the JavaScript code to execute when the button is clicked.'
    )
    .default('console.log("Button clicked!");'), // Add a default
  buttonText: z.string().label('Button Text').default('Run Script'),
})

// Input blocks might also have settings, let's add an empty one for now
export const jsButtonInputSettingsSchema = z.object({})

