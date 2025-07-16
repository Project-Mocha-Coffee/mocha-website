// Test script to check direct Cloudinary URLs with version
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/ddainirdi/raw/upload';

async function testDirectUrls() {
  console.log('🧪 Testing direct Cloudinary URLs...');
  
  const testUrls = [
    // With version number (from asset list)
    `${CLOUDINARY_BASE_URL}/v1751711457/content/content-latest.json`,
    // Without version number  
    `${CLOUDINARY_BASE_URL}/content/content-latest.json`,
    // Test the old working path with double content folder
    `${CLOUDINARY_BASE_URL}/content/content/content-latest.json`,
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
        if (response.headers.get('x-cld-error')) {
          console.log(`🔍 Cloudinary Error: ${response.headers.get('x-cld-error')}`);
        }
        continue;
      }
      
      const content = await response.json();
      console.log(`✅ SUCCESS! Content keys:`, Object.keys(content).slice(0, 5));
      
      if (content.hero) {
        console.log(`📝 Hero title: ${content.hero.title || 'N/A'}`);
      }
      
      console.log(`📦 Content size: ${JSON.stringify(content).length} characters`);
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`);
    }
  }
}

testDirectUrls().then(() => {
  console.log('\n🏁 Direct URL test completed!');
}).catch(error => {
  console.error('💥 Test failed:', error);
}); 