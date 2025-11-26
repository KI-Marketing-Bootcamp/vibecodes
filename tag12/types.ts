export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details: string[];
  icon?: 'rocket' | 'sparkles' | 'cpu' | 'video' | 'book' | 'robot';
  highlight?: boolean;
}

export interface GroundingSource {
  title: string;
  url: string;
}

export interface AIResearchResult {
  text: string;
  sources: GroundingSource[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}