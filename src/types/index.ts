export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
}
