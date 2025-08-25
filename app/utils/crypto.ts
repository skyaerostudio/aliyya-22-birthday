/**
 * Utility function to hash user input using SHA-256
 * Includes salt from environment variables for security
 */
export async function hashInput(input: string): Promise<string> {
  const salt = (typeof window !== 'undefined' && process?.env?.NEXT_PUBLIC_GATE_SALT) || 'HBD-ALIYYA-22'
  const saltedInput = `${salt}|${input.toLowerCase().trim()}`
  
  // Convert string to ArrayBuffer
  const encoder = new TextEncoder()
  const data = encoder.encode(saltedInput)
  
  // Hash the data
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  
  // Convert ArrayBuffer to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  
  return hashHex
}

/**
 * Helper function to generate hashes for answers (for development/setup)
 * This would be used to generate the hashes for .env file
 */
export async function generateHash(answer: string, salt: string = 'HBD-ALIYYA-22'): Promise<string> {
  const saltedInput = `${salt}|${answer.toLowerCase().trim()}`
  const encoder = new TextEncoder()
  const data = encoder.encode(saltedInput)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
