
// This is a client-side implementation of environment variables
// In production, this should be replaced with proper environment variable handling

const env = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
};

export default env;
