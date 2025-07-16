// Test script to check current uploaded content paths
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/ddainirdi/raw/upload';

async function testCurrentPaths() {
  console.log('🧪 Testing current uploaded content paths...');
  
  const testUrls = [
    // Current paths (double content)
    `${CLOUDINARY_BASE_URL}/content/content/content-latest.json`,
    `${CLOUDINARY_BASE_URL}/content/content/versions.json`,
    // Expected paths (single content)
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
      
      if (!response.ok) {
        console.log(`❌ Failed: ${response.status} ${response.statusText}`);
        continue;
      }
      
      const content = await response.json();
      console.log(`✅ Success! Content keys:`, Object.keys(content));
      
      if (content.hero) {
        console.log(`📝 Hero title: ${content.hero.title || 'N/A'}`);
      }
      
      if (content.length) {
        console.log(`🗂️ Versions found: ${content.length}`);
        content.slice(0, 3).forEach(v => console.log(`  - ${v.version}: ${v.description}`));
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
  }
}

testCurrentPaths().then(() => {
  console.log('\n🏁 Path test completed!');
}).catch(error => {
  console.error('💥 Test failed:', error);
}); 