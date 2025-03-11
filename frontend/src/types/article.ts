export interface Article {
  id: number;
  title: string;
  content: string;
  summary?: string;
  metadata?: Record<string, any>;
  source_url?: string;
  created_at: string;
  updated_at?: string;
}
