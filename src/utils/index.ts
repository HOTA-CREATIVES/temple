/**
 * Centralized Utility Functions
 */

/**
 * Merge class names conditionally (placeholder for clsx / tailwind-merge)
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
