'use server';
/**
 * @fileOverview An AI content assistant that helps draft, refine, or summarize text for portfolio sections.
 *
 * - aiContentAssistant - A function that handles content generation for portfolio sections.
 * - AIContentAssistantInput - The input type for the aiContentAssistant function.
 * - AIContentAssistantOutput - The return type for the aiContentAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIContentAssistantInputSchema = z.object({
  action: z
    .enum(['draft', 'refine', 'summarize'])
    .describe('The action to perform: draft new content, refine existing content, or summarize content.'),
  section:
    z.enum([
      'About Me',
      'Work Experience',
      'Project Description',
      'Testimonial',
    ])
    .describe('The portfolio section the content is for.'),
  content: z
    .string()
    .optional()
    .describe('The existing content to refine or summarize (required for refine/summarize actions).'),
  instructions: z
    .string()
    .optional()
    .describe('Optional specific instructions or keywords to guide the AI.'),
});
export type AIContentAssistantInput = z.infer<typeof AIContentAssistantInputSchema>;

const AIContentAssistantOutputSchema = z.object({
  generatedContent: z.string().describe('The AI-generated or processed content.'),
});
export type AIContentAssistantOutput = z.infer<typeof AIContentAssistantOutputSchema>;

export async function aiContentAssistant(
  input: AIContentAssistantInput
): Promise<AIContentAssistantOutput> {
  return aiContentAssistantFlow(input);
}

const aiContentAssistantPrompt = ai.definePrompt({
  name: 'aiContentAssistantPrompt',
  input: {schema: AIContentAssistantInputSchema},
  output: {schema: AIContentAssistantOutputSchema},
  prompt: `You are an AI assistant specialized in crafting compelling and concise portfolio content for an AI masters graduate named Siddhant Sahoo.
Your goal is to help the user {{action}} content for their '{{section}}' section.

**Action: {{action}}**
**Section: {{section}}**

{{#ifEquals action "draft"}}
Please draft content for the '{{section}}' section.
Focus on highlighting skills in data analytics, data engineering, and AI engineering. Ensure the tone is professional and suitable for a portfolio.
Here are some additional instructions: {{{instructions}}}
{{/ifEquals}}

{{#ifEquals action "refine"}}
Please refine the following content for the '{{section}}' section.
Ensure it is compelling, concise, and effectively showcases skills relevant to an AI masters graduate (data analytics, data engineering, AI engineering).
Here is the original content:
{{{content}}}
Additional instructions: {{{instructions}}}
{{/ifEquals}}

{{#ifEquals action "summarize"}}
Please summarize the following content for the '{{section}}' section.
Make it concise and impactful, suitable for a professional portfolio. Aim for 1-3 sentences if possible.
Here is the original content:
{{{content}}}
Additional instructions: {{{instructions}}}
{{/ifEquals}}

Provide only the generated content, without any conversational filler or introductions/conclusions.`,
});

const aiContentAssistantFlow = ai.defineFlow(
  {
    name: 'aiContentAssistantFlow',
    inputSchema: AIContentAssistantInputSchema,
    outputSchema: AIContentAssistantOutputSchema,
  },
  async input => {
    if (
      (input.action === 'refine' || input.action === 'summarize') &&
      !input.content
    ) {
      throw new Error(
        `Content is required for '${input.action}' action.`
      );
    }
    const {output} = await aiContentAssistantPrompt(input);
    return output!;
  }
);
