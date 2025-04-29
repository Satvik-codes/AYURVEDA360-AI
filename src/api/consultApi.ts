
import { handleConsultRequest, ChatMessage } from './consult';

export async function fetchConsultResponse(messages: ChatMessage[], prompt: string) {
  try {
    const response = await handleConsultRequest(messages, prompt);
    return { response };
  } catch (error) {
    console.error('Error in consult API:', error);
    throw error;
  }
}
