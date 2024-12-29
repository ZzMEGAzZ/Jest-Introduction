import { User, ApiResponse } from "./types";

export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = "https://api.example.com") {
    this.baseUrl = baseUrl;
  }

  async getUser(id: number): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch user");
      }

      return {
        data,
        status: response.status,
        message: "Success",
      };
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }
}

export const api = new ApiService();
