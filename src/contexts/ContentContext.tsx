import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { contentService, contentData, isLoading, subscribeToContentUpdates } from '../services/contentService';
import { ContentData } from '../types/content';

interface ContentContextType {
  content: ContentData | null;
  isLoading: boolean;
  error: string | null;
  refreshContent: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const updateContentState = () => {
      if (!isMounted) return;
      
      setContent(contentData as ContentData);
      setLoading(isLoading);
      setError(null);
    };

    // Initialize content loading
    const initializeContent = async () => {
      try {
        await contentService.initializeGlobalContent();
        if (isMounted) {
          updateContentState();
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load content');
          setLoading(false);
        }
      }
    };

    // Subscribe to content updates
    const unsubscribe = subscribeToContentUpdates(updateContentState);

    // Start loading content
    initializeContent();

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const refreshContent = async () => {
    setLoading(true);
    setError(null);
    try {
      await contentService.refreshGlobalContent();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh content');
    }
  };

  const value: ContentContextType = {
    content,
    isLoading: loading,
    error,
    refreshContent
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

// Loading component to show while content is being fetched
export const ContentLoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-16 h-16 bg-coffee-600 rounded-full opacity-20 animate-bounce"></div>
      </div>
    </div>
  );
}; 