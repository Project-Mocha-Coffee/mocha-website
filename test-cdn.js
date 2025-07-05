// Simple test script to check CDN content fetching
const fetch = require('node-fetch');

const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dkjvszmx4/raw/upload';

async function testCDNFetch() {
  console.log('🧪 Testing CDN fetch...');
  
  const testUrls = [
    `${CLOUDINARY_BASE_URL}/content/content-latest.json`,
    `${CLOUDINARY_BASE_URL}/content/versions.json`,
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
        continue;
      }
      
      const content = await response.json();
      console.log(`✅ Success! Content keys:`, Object.keys(content));
      
      if (content.hero) {
        console.log(`📝 Hero title: ${content.hero.title || 'N/A'}`);
      }
      
      if (content.projects) {
        console.log(`📈 Projects count: ${Object.keys(content.projects).length}`);
      }
      
      if (content.availableOpportunities) {
        console.log(`💼 Available opportunities: ${content.availableOpportunities.length || 0}`);
      }
      
      if (content.versions) {
        console.log(`🗂️ Versions count: ${content.versions.length || 0}`);
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
  }
}

// Run the test
testCDNFetch().then(() => {
  console.log('\n🏁 CDN test completed!');
}).catch(error => {
  console.error('💥 Test failed:', error);
}); 