import { Article } from "@/types/article";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const articleService = {
  async getArticles(page: number = 1, limit: number = 10): Promise<Article[]> {
    const skip = (page - 1) * limit;
    const response = await fetch(
      `${API_URL}/api/articles?skip=${skip}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    return response.json();
  },

  async getArticle(id: number): Promise<Article> {
    const response = await fetch(`${API_URL}/api/articles/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }
    return response.json();
  },

  async createArticle(
    article: Omit<Article, "id" | "created_at" | "updated_at">
  ): Promise<Article> {
    const response = await fetch(`${API_URL}/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    if (!response.ok) {
      throw new Error("Failed to create article");
    }
    return response.json();
  },

  async deleteArticle(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/api/articles/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete article");
    }
  },
};
