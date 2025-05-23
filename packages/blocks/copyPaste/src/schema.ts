import { z } from '@typebot.io/forge'

export const copyPasteOptionsSchema = z.object({
  variableId: z.string().label('Variable to copy').describe('Select the variable whose value you want to copy.'),
  displayText: z.string().label('Display Text').default('Click to copy').describe('Text displayed before copying.'),
  successText: z.string().label('Success Text').default('Copied!').describe('Text displayed after successful copy.'),
})

export const copyPasteSettingsSchema = z.object({})

