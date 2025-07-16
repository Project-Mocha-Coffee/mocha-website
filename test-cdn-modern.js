// Modern test script for CDN content fetching (Node.js 18+)
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/ddainirdi/raw/upload';

async function testCDNFetch() {
  console.log('🧪 Testing CDN fetch with modern Node.js...');
  
  const testUrls = [
    `${CLOUDINARY_BASE_URL}/content/content/content-latest.json`,
    `${CLOUDINARY_BASE_URL}/content/content/versions.json`,
  ];
  
  for (const url of testUrls) {
    console.log(`\n🔍 Testing: ${url}`);
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      console.log(`📊 Status: ${response.status} ${response.statusText}`);
      console.log(`📋 Headers:`, Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        console.log(`❌ Failed: ${response.status} ${response.statusText}`);
        
        // Try to get error details
        try {
          const errorText = await response.text();
          console.log(`📄 Error body: ${errorText.substring(0, 200)}${errorText.length > 200 ? '...' : ''}`);
        } catch (e) {
          console.log(`📄 Could not read error body`);
        }
        continue;
      }
      
      const content = await response.json();
      console.log(`✅ Success! Content keys:`, Object.keys(content));
      
      if (content.hero) {
        console.log(`📝 Hero title: ${content.hero.title || 'N/A'}`);
        console.log(`📝 Hero subtitle: ${content.hero.subtitle || 'N/A'}`);
      }
      
      if (content.projects) {
        console.log(`📈 Projects count: ${Object.keys(content.projects).length}`);
        console.log(`📈 First project:`, Object.keys(content.projects)[0] || 'N/A');
      }
      
      if (content.availableOpportunities) {
        console.log(`💼 Available opportunities: ${content.availableOpportunities.length || 0}`);
        if (content.availableOpportunities.length > 0) {
          console.log(`💼 First opportunity:`, content.availableOpportunities[0].title || 'N/A');
        }
      }
      
      if (content.versions) {
        console.log(`🗂️ Versions count: ${content.versions.length || 0}`);
        if (content.versions.length > 0) {
          console.log(`🗂️ Latest version:`, content.versions[0].version || 'N/A');
        }
      }
      
      // Show a sample of the content structure
      console.log(`📦 Content structure:`, JSON.stringify(content, null, 2).substring(0, 500) + '...');
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
      console.log(`📍 Error details:`, error.stack);
    }
  }
}

// Run the test
testCDNFetch().then(() => {
  console.log('\n🏁 CDN test completed!');
}).catch(error => {
  console.error('💥 Test failed:', error);
}); 