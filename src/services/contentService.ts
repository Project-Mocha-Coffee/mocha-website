export interface ContentData {
  hero: any;
  projects: Record<string, any>;
  [key: string]: any;
}

export interface ContentVersion {
  version: string;
  timestamp: string;
  description?: string;
}

// Global content data that components can access directly
export let contentData: ContentData | null = null;

// Global state for version tracking
export let currentVersion: string = '';
export let isLoading: boolean = false;
export let error: string | null = null;

// Listeners for content updates
const contentListeners: (() => void)[] = [];

export const subscribeToContentUpdates = (callback: () => void) => {
  contentListeners.push(callback);
  return () => {
    const index = contentListeners.indexOf(callback);
    if (index > -1) {
      contentListeners.splice(index, 1);
    }
  };
};

const notifyContentListeners = () => {
  contentListeners.forEach(callback => callback());
};

class ContentService {
  private readonly CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/ddainirdi/raw/upload';

  

  // Test function to directly check CDN content
  async testCDNFetch(): Promise<void> {
    const testUrl = `${this.CLOUDINARY_BASE_URL}/content/content-latest.json`;
    console.log('🧪 Testing CDN fetch from:', testUrl);
    
    try {
      const response = await fetch(testUrl, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      console.log('🧪 Test Response Status:', response.status);
      console.log('🧪 Test Response Headers:', [...response.headers.entries()]);
      
      if (!response.ok) {
        console.error('🧪 Test Failed - Response not OK:', response.status, response.statusText);
        return;
      }
      
      const content = await response.json();
      console.log('🧪 Test Content Keys:', Object.keys(content));
      console.log('🧪 Test Content Sample:', {
        heroTitle: content.hero?.title,
        projectsCount: Object.keys(content.projects || {}).length,
        availableOpportunities: !!content.availableOpportunities
      });
      
    } catch (error) {
      console.error('🧪 Test Error:', error);
    }
  }

  async fetchLatestContent(): Promise<ContentData> {
    // Always fetch fresh content (no caching)
    const url = `${this.CLOUDINARY_BASE_URL}/content/content-latest.json`;
    console.log('🔍 Fetching fresh content from:', url);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      console.log('🌐 CDN Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const content = await response.json();
      console.log('📦 Content loaded from CDN:', Object.keys(content));
      
      return content;
    } catch (error) {
      console.error('❌ Failed to fetch content from CDN:', error);
      throw new Error('Failed to load content from CDN');
    }
  }

  async fetchContentVersion(version: string): Promise<ContentData> {
    try {
      const url = `${this.CLOUDINARY_BASE_URL}/content/content-${version}.json`;
      console.log('🔗 Fetching versioned content from:', url);
      
      const response = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const content = await response.json();
      console.log('📦 Versioned content loaded:', Object.keys(content));
      return content;
    } catch (error) {
      console.error(`Failed to fetch content version ${version}:`, error);
      throw new Error(`Failed to load content version ${version}`);
    }
  }

  async getAvailableVersions(): Promise<ContentVersion[]> {
    try {
      const url = `${this.CLOUDINARY_BASE_URL}/content/versions.json`;
      console.log('📋 Fetching versions from:', url);
      
      const response = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const versions = await response.json();
      console.log('📋 Found versions:', versions.length);
      return versions || [];
    } catch (error) {
      console.error('Failed to fetch versions:', error);
      return [];
    }
  }

  // Initialize global content data
  async initializeGlobalContent(): Promise<void> {
    try {
      // Update global loading state
      isLoading = true;
      error = null;
      notifyContentListeners();
      
      // Get available versions to find the latest one
      console.log('🔍 Fetching available versions...');
      const versions = await this.getAvailableVersions();
      
      if (versions.length === 0) {
        throw new Error('No versions available on CDN');
      }
      
      // Sort versions by timestamp to get the latest
      const latestVersion = versions.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )[0];
      
      console.log('🎯 Latest version found:', latestVersion.version, 'from', latestVersion.timestamp);
      
      // Fetch content using the specific version
      const content = await this.fetchContentVersion(latestVersion.version);
      
      // Update global contentData
      (globalThis as any).contentData = content;
      contentData = content;
      currentVersion = latestVersion.version;
      error = null;
      console.log('✅ Content loaded from Cloudinary CDN with version:', latestVersion.version);
      
      // Notify components to re-render
      notifyContentListeners();
    } catch (err) {
      // Use static fallback content - this is expected when no content uploaded yet
      console.log('📄 Using static fallback content (no CDN content found)');
      error = null; // Don't show error since fallback is expected behavior
      
      // Fallback to static content
      const fallbackContent = await import('../data/content.json');
      (globalThis as any).contentData = fallbackContent.default;
      contentData = fallbackContent.default as ContentData;
      currentVersion = 'static-fallback';
      
      // Notify components to re-render
      notifyContentListeners();
    } finally {
      isLoading = false;
      notifyContentListeners();
    }
  }

  // Refresh content (for ContentVersionIndicator)
  async refreshGlobalContent(): Promise<void> {
    await this.initializeGlobalContent();
  }
}

export const contentService = new ContentService();

// Global test function accessible from browser console
(globalThis as any).testCDN = () => contentService.testCDNFetch();
(globalThis as any).refreshContent = () => contentService.refreshGlobalContent();
(globalThis as any).checkContentService = () => {
  console.log('ContentService status:', {
    hasInstance: !!contentService,
    globalContentData: !!contentData,
    currentVersion,
    isLoading,
    error
  });
}; 