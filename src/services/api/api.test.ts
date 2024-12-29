import { ApiService } from "./api";

describe("ApiService", () => {
  let apiService: ApiService;

  // Setup before each test
  beforeEach(() => {
    // Using test URL
    apiService = new ApiService("https://test-api.example.com");

    // Reset all mocks before each test
    jest.resetAllMocks();
  });

  // Clean up after each test
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("getUser", () => {
    const mockUser = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    };

    test("successfully fetches user data", async () => {
      // Mock the fetch call
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(mockUser),
        } as Response)
      );

      const result = await apiService.getUser(1);

      expect(result).toEqual({
        data: mockUser,
        status: 200,
        message: "Success",
      });

      expect(fetch).toHaveBeenCalledWith(
        "https://test-api.example.com/users/1"
      );
    });

    test("handles API error responses", async () => {
      // Mock API error response
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
          json: () => Promise.resolve({ message: "User not found" }),
        } as Response)
      );

      await expect(apiService.getUser(999)).rejects.toThrow("User not found");
    });

    test("handles network errors", async () => {
      // Mock network error
      global.fetch = jest.fn(() => Promise.reject(new Error("Network error")));

      await expect(apiService.getUser(1)).rejects.toThrow("Network error");
    });
  });
});
