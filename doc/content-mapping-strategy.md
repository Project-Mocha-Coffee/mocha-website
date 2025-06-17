# Project Mocha Website Content Mapping Strategy

## Overview
This document maps the provided content from `content.md` to the existing website structure without changing the layout. All content requirements will be addressed through updates to existing components and pages.

## Current Website Structure Analysis

### Pages:
- **Home.tsx** - Main landing page with key components
- **AboutUs.tsx** - Company story, team, values, journey
- **Investing.tsx** - Investment-focused content
- **Projects.tsx** - Project listings and details
- **ProjectDetail.tsx** - Individual project details
- **Contact.tsx** - Contact information and form
- **Blog.tsx** - Blog listing
- **BlogArticle.tsx** - Individual blog posts

### Key Components:
- **Hero.tsx** - Main hero section
- **InvestmentPlans.tsx** - Investment packages
- **InvestmentCalculator.tsx** - ROI calculator
- **HowItWorks.tsx** - Process explanation
- **Timeline.tsx** - Coffee growth timeline
- **TestimonialsSection.tsx** - Social proof
- **Partnerships.tsx** - Partner information
- **RiskMitigation.tsx** - Risk information
- **TransparentReports.tsx** - Reporting features
- **Faq.tsx** - Frequently asked questions

---

## Content Mapping Strategy

### 1. Hero Section (Current: Hero.tsx)
**Required Updates:**
- **Headline**: Update to "Invest in Coffee Trees – Earn 12-18% Annual Returns"
- **Subheadline**: Update to "Tangible assets, passive income, and a greener future."
- **Current**: "12-18% average annual returns" ✓ (Already matches)
- **Update Stats**: Change "Join 2000+ investors" to reflect current numbers
- **CTA**: Update button text to "Explore Investment Plans"

### 2. Our Story Section (Current: AboutUs.tsx - Hero Section)
**Required Updates:**
- **Content**: Replace current about content with provided story:
  - "Project Mocha was founded in 2024..."
  - "Our journey begins with bringing 2000 coffee trees from our pilot farm in Embu..."
  - "After the first year, we plan to increase to 200 million by 2040..."
  - "We pay our farmers above market rates..."

### 3. How It Works (Current: HowItWorks.tsx)
**Required Updates:**
- **Step 1**: "Choose Your Coffee Farm - Select from 1 to 1,000+ trees in our marketplace of prime coffee-growing regions"
- **Step 2**: "We Plant & Manage - Our expert agronomists handle every aspect—planting, irrigation, organic certification, and harvest"
- **Step 3**: "Receive Annual Payouts - Enjoy direct deposits from your share of the harvest starting in Year 3, with options to reinvest for compounding returns"

### 4. Investment Packages (Current: InvestmentPlans.tsx)
**Required Updates** - Replace current plans with provided packages:

| Package | Trees | Investment | Annual Yield | Term |
|---------|-------|------------|--------------|------|
| **Starter** | 50 | $5,000 | 12% | 5 years |
| **Professional** | 200 | $20,000 | 14% | 7 years |
| **Enterprise** | 1,000 | $100,000 | 16% | 10 years |

### 5. Coffee Growth Timeline (Current: Timeline.tsx)
**Required Updates** - Update with provided timeline:
- **Year 1-2**: "Sapling establishment phase – root development and adaptation"
- **Year 3**: "First harvest – expect 20% of target yield"
- **Year 5+**: "Peak production – full yield capacity and maximum returns"

### 6. Risk Mitigation & Trust (Current: RiskMitigation.tsx)
**Required Updates:**
- **Diversified Locations**: "Plantations in multiple climate zones for stability"
- **Insurance**: "Full crop coverage for peace of mind"
- **Certifications**: "USDA Organic, Fair Trade, Rainforest Alliance"
- **Social Proof**: "Join 1,250+ investors since 2022"

### 7. Testimonials (Current: TestimonialsSection.tsx)
**Required Updates:**
- Add testimonial: "Received 14.3% returns in Year 3 – better than my stock portfolio." – M. Rodríguez, Investor

### 8. Partnerships (Current: Partnerships.tsx)
**Required Updates:**
- **Content**: "We work with globally recognized partners such as the Rainforest Alliance, local farming cooperatives, and leading logistics firms to ensure quality and transparency at every step. Our partnerships ensure every bean is traceable, ethically sourced, and meets the highest environmental standards."
- **CTA**: "Interested in partnering with us? Contact our partnerships team to explore collaboration opportunities."

### 9. Meet the Team (Current: AboutUs.tsx - Team Section)
**Required Updates:**
- Update team member information with actual CEO, COO, CTO details when provided
- Current structure supports this content well

### 10. Interactive Coffee Dashboard (New Feature)
**Implementation Strategy:**
- **Option A**: Add as new section to Projects.tsx
- **Option B**: Integrate into ProjectDetail.tsx
- **Option C**: Add to TransparentReports.tsx
- **Content**: 
  - "Live yield metrics: Current cherry price, harvest volumes"
  - "Environmental impact: Your trees offset X tons of CO2 per year"
  - "Geotagged photos: View your plot via satellite imagery"
  - "Download Quarterly Harvest Reports"

### 11. Educational Resources (Current: Blog.tsx)
**Required Updates:**
- Add educational content:
  - "Guide: Coffee Market 101: Global Demand Trends (PDF download)"
  - "Video: From Seedling to Export: Your Coffee's Journey"

### 12. FAQ Updates (Current: Faq.tsx)
**Required Updates:**
- Add questions:
  - "What if drought affects my trees?"
  - "How are local farmers compensated?"
  - "How do I track my investment?"

### 13. Referral Program (New Feature)
**Implementation Strategy:**
- **Option A**: Add section to Investing.tsx
- **Option B**: Add to InvestmentPlans.tsx
- **Option C**: Create new component and add to Home.tsx
- **Content**: 
  - "Refer a friend: Earn 1 free tree for every $500 invested"
  - "Easy social sharing options"

### 14. Ethical Impact (Current: AboutUs.tsx or Community.tsx)
**Required Updates:**
- **Content**: "Your Investment Grows Communities"
  - "40% premium over local coffee prices paid to farmers"
  - "School scholarships for growers' children"
  - "Water conservation systems installed per 100 trees"

### 15. Footer Conversion (Current: Footer.tsx)
**Required Updates:**
- **Final CTA**: "Download Our 10-Year Cash Flow Projection"
- **Form Fields**: Email, Investment Interest (<$10k, $10k–$50k, $50k+)

---

## Implementation Priority

### Phase 1: Core Content Updates (Immediate)
1. **Hero.tsx** - Update headlines and CTAs
2. **InvestmentPlans.tsx** - Replace with new package structure
3. **HowItWorks.tsx** - Update process steps
4. **Timeline.tsx** - Update coffee growth timeline

### Phase 2: Enhanced Content (Week 1)
1. **AboutUs.tsx** - Update story section
2. **RiskMitigation.tsx** - Update risk mitigation content
3. **TestimonialsSection.tsx** - Add new testimonial
4. **Partnerships.tsx** - Update partnership content

### Phase 3: New Features (Week 2)
1. **Faq.tsx** - Add new FAQ items
2. **Footer.tsx** - Update conversion CTA
3. **Blog.tsx** - Add educational resources
4. Implement Referral Program section
5. Implement Interactive Dashboard features

### Phase 4: Final Integration (Week 3)
1. **AboutUs.tsx** - Update ethical impact section
2. Final content review and optimization
3. SEO optimization with new content
4. Performance testing

---

## Content Guidelines

### Brand Voice Consistency
- Professional yet approachable tone
- Focus on transparency and sustainability
- Emphasize tangible benefits and real returns
- Maintain focus on ethical investment

### Key Messaging Pillars
1. **Transparency**: Clear information about processes and returns
2. **Sustainability**: Environmental and social impact
3. **Profitability**: Competitive returns (12-18%)
4. **Community**: Supporting farmers and local communities
5. **Innovation**: Modern approach to traditional agriculture

### Design Considerations
- Maintain current brown theme throughout
- Use high-quality coffee plantation images
- Ensure all content is mobile-responsive
- Maintain consistent typography and spacing
- Use data visualization for statistics and projections

---

## Success Metrics
- All content from `content.md` successfully integrated
- No breaking changes to existing layout
- Improved conversion rates on key pages
- Enhanced user engagement with new content
- Maintained or improved page load speeds

---

## Notes
- All updates should maintain the existing deep dark brown theme
- Interactive elements should use consistent styling
- New features should integrate seamlessly with existing components
- Content should be easily updatable for future changes
- Consider A/B testing for key conversion elements 