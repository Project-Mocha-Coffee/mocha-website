export interface TimelineStage {
  stage: string;
  title: string;
  description: string;
  status: 'completed' | 'coming-soon';
  image: string;
}

export interface ProjectStat {
  number: string;
  label: string;
}

export interface ProjectData {
  id: string;
  title: string;
  location: string;
  region: string;
  status: string;
  statusColor: string;
  fundName: string;
  pricePerTree: string;
  roi: string;
  investmentCycle: string;
  totalTrees: number;
  treesSold: number;
  treesAvailable: number;
  altitude: string;
  plotSize: string;
  sunnyDays: number;
  description: string;
  timelineStages: TimelineStage[];
  stats: ProjectStat[];
  investmentDescription: string;
  returnsDescription: string;
  images: string[];
}

export interface AvailableOpportunitiesData {
  title: string;
  subtitle: string;
  description: string;
  featuredProject: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  actionText: string;
  description: string;
}

export interface HowItWorksData {
  sectionTitle: string;
  sectionSubtitle: string;
  steps: HowItWorksStep[];
  ctaButton: string;
}

export interface InvestmentPlan {
  id: string;
  name: string;
  trees: string;
  investment: string;
  annualYield: string;
  term: string;
  image: string;
  badge: string;
  badgeColor: string;
  isRecommended: boolean;
  tagline: string;
  features: string[];
  buttonText: string;
  buttonType: string;
}

export interface InvestmentPlansData {
  sectionTitle: string;
  sectionDescription: string[];
  mobileSwipeHint: string;
  plans: InvestmentPlan[];
}

export interface ReferralProgramButton {
  text: string;
  type: 'social' | 'invite' | 'copy';
}

export interface ReferralProgramEarnCard {
  title: string;
  subtitle: string;
  highlightText: string;
  description: string;
  benefits: string[];
}

export interface ReferralProgramShareCard {
  title: string;
  subtitle: string;
  description: string;
  buttons: ReferralProgramButton[];
}

export interface ReferralProgramData {
  sectionTitle: string;
  sectionSubtitle: string;
  earnCard: ReferralProgramEarnCard;
  shareCard: ReferralProgramShareCard;
  ctaButton: string;
}

export interface RiskMitigationSafeguard {
  icon: string;
  title: string;
  description: string;
}

export interface RiskMitigationCommunity {
  title: string;
  description: string;
}

export interface RiskMitigationTransparencySection {
  title: string;
  description?: string;
  buttonText?: string;
  reports?: string[];
}

export interface RiskMitigationTransparency {
  title: string;
  sections: RiskMitigationTransparencySection[];
}

export interface RiskMitigationData {
  sectionTitle: string;
  sectionSubtitle: string;
  safeguards: RiskMitigationSafeguard[];
  community: RiskMitigationCommunity;
  transparency: RiskMitigationTransparency;
}

export interface Testimonial {
  id: number;
  title: string;
  name: string;
  location: string;
  thumbnail: string;
  quote: string;
}

export interface TestimonialsMeetThePeople {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
  imageAlt: string;
  quote: string;
}

export interface TestimonialsData {
  sectionTitle: string;
  sectionSubtitle: string;
  viewMoreButton: string;
  swipeHint: string;
  testimonialsList: Testimonial[];
  meetThePeople: TestimonialsMeetThePeople;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Blog' | 'News' | 'Updates';
  date: string;
  author: string;
  image: string;
  readTime: string;
  featured: boolean;
  icon: string;
}

export interface BlogData {
  pageTitle: string;
  latestNewsBadge: string;
  posts: BlogPost[];
}

export interface TransparentReportsData {
  sectionTitle: string;
  sectionSubtitle: string;
  viewAllButton: string;
  latestNewsBadge: string;
  readMoreButton: string;
  maxDisplayItems: number;
}

export interface WhyJoinSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface WhyJoinData {
  sectionTitle: string;
  sectionSubtitle: string;
  slides: WhyJoinSlide[];
}

export interface HeroButton {
  text: string;
  type: 'primary' | 'secondary';
  action: string;
}

export interface HeroPartner {
  name: string;
  logo: string;
  alt: string;
}

export interface HeroTrustIndicators {
  title: string;
  partners: HeroPartner[];
}

export interface HeroData {
  backgroundImage: string;
  title: string;
  primarySubtitle: string;
  secondarySubtitle: string;
  benefits: string[];
  buttons: HeroButton[];
  trustIndicators: HeroTrustIndicators;
}

export interface AboutUsButton {
  text: string;
  type: 'primary' | 'secondary';
}

export interface AboutUsHero {
  backgroundImage: string;
  title: string;
  titleHighlight: string;
  descriptions: string[];
  buttons: AboutUsButton[];
  callToAction: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image: string;
}

export interface AboutUsTeam {
  sectionTitle: string;
  sectionSubtitle: string;
  swipeHint: string;
  members: TeamMember[];
}

export interface Statistic {
  number: string;
  label: string;
}

export interface AboutUsStatistics {
  sectionTitle: string;
  sectionTitleHighlight: string;
  description: string;
  buttons: AboutUsButton[];
  stats: Statistic[];
}

export interface InvestmentModel {
  title: string;
  description: string;
  buttonText: string;
  buttonType: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface ImpactStat {
  number: string;
  title: string;
  description: string;
  cardType: string;
}

export interface AboutUsCommunityImpact {
  title: string;
  descriptions: string[];
  buttons: { text: string; type: string; }[];
  image: string;
  imageAlt: string;
  videoQuote: string;
}

export interface AboutUsEthicalImpact {
  sectionTitle: string;
  sectionDescription: string;
  impactStats: ImpactStat[];
  communityImpact: AboutUsCommunityImpact;
}

export interface AboutUsInvestmentModel {
  sectionTitle: string;
  sectionSubtitle: string;
  backgroundImage: string;
  models: InvestmentModel[];
}

export interface AboutUsCoffeeDemand {
  badge: string;
  title: string;
  description: string;
  navigationInfo: string;
  image: string;
  imageAlt: string;
}

export interface AboutUsValues {
  sectionTitle: string;
  valuesList: Value[];
}

export interface AboutUsJourneyStep {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface AboutUsJourney {
  sectionTitle: string;
  sectionSubtitle: string;
  steps: AboutUsJourneyStep[];
}

export interface AboutUsCulture {
  sectionTitle: string;
  descriptions: string[];
  buttonText: string;
  image: string;
  imageAlt: string;
}

export interface AboutUsProcessingFacility {
  sectionTitle: string;
  descriptions: string[];
  buttonText: string;
  image: string;
  imageAlt: string;
}

export interface AboutUsData {
  hero: AboutUsHero;
  team: AboutUsTeam;
  statistics: AboutUsStatistics;
  investmentModel: AboutUsInvestmentModel;
  coffeeDemand: AboutUsCoffeeDemand;
  values: AboutUsValues;
  ethicalImpact: AboutUsEthicalImpact;
  journey: AboutUsJourney;
  culture: AboutUsCulture;
  processingFacility: AboutUsProcessingFacility;
}

export interface InvestingButton {
  text: string;
  type: 'primary' | 'secondary';
}

export interface InvestingHero {
  backgroundImage: string;
  title: string;
  titleLines: string[];
  titleHighlight: string;
  description: string;
  buttons: InvestingButton[];
  callToAction: string;
}

export interface ShowcaseCard {
  image: string;
  imageAlt: string;
  flagEmoji: string;
  title: string;
  description: string;
}

export interface GlobalInvestment {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  showcaseCard: ShowcaseCard;
  buttons: InvestingButton[];
}

export interface InvestmentStep {
  step: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface HowItWorks {
  sectionTitle: string;
  sectionDescription: string;
  steps: InvestmentStep[];
  ctaButton: {
    text: string;
  };
}

export interface ChartPhase {
  phase: string;
  description?: string;
  position: 'top-left' | 'top-right' | 'bottom-right';
}

export interface CashFlowForecast {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  downloadButton: {
    text: string;
  };
  chartTitle: string;
  chartPhases: ChartPhase[];
}

export interface LifeCycleStage {
  stage: string;
  timeline: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface LifeCycle {
  title: string;
  subtitle: string;
  stages: LifeCycleStage[];
}

export interface RiskMitigationCard {
  title: string;
  descriptions: string[];
  image: string;
  imageAlt: string;
}

export interface RiskMitigation {
  sectionTitle: string;
  sectionSubtitle: string;
  riskCard: RiskMitigationCard;
  insuranceCard: RiskMitigationCard;
}

export interface InvestmentBenefit {
  title: string;
  description: string;
  icon: string;
  cardType: 'text' | 'image';
  image?: string;
  imageAlt?: string;
}

export interface InvestmentBenefits {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
  benefits: InvestmentBenefit[];
}

export interface InvestingData {
  hero: InvestingHero;
  globalInvestment: GlobalInvestment;
  howItWorks: HowItWorks;
  cashFlowForecast: CashFlowForecast;
  lifeCycle: LifeCycle;
  riskMitigation: RiskMitigation;
  investmentBenefits: InvestmentBenefits;
}

// Projects page interfaces
export interface ProjectsPageButton {
  text: string;
  type: 'primary' | 'secondary';
}

export interface ProjectsPageHero {
  backgroundImage: string;
  title: string;
  description: string;
  buttons: ProjectsPageButton[];
  callToAction: string;
}

export interface ProjectsPageArticlesSection {
  sectionTitle: string;
  sectionDescription: string;
}

export interface ProjectsPageCoffeeFact {
  title: string;
  description: string;
  image: string;
}

export interface ProjectsPageCoffeeFacts {
  sectionTitle: string;
  sectionDescription: string;
  badge: string;
  facts: ProjectsPageCoffeeFact[];
}

export interface ProjectsPageWaitlist {
  sectionTitle: string;
  sectionDescription: string;
  cardTitle: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  emailPlaceholder: string;
  subscribeButton: {
    text: string;
  };
}

export interface ProjectsPageData {
  hero: ProjectsPageHero;
  projectsGrid: ProjectsPageArticlesSection;
  coffeeFacts: ProjectsPageCoffeeFacts;
  waitlist: ProjectsPageWaitlist;
}

// Project detail page interfaces
export interface ProjectDetailButton {
  text: string;
  type: 'primary' | 'secondary';
}

export interface ProjectDetailHero {
  backgroundImage: string;
  badge: string;
  buttons: ProjectDetailButton[];
  callToAction: string;
}

export interface ProjectDetailInvestmentCard {
  title: string;
  description: string;
  treesLabel: string;
  priceLabel: string;
  roiLabel: string;
  cycleLabel: string;
  investButton: {
    text: string;
  };
}

export interface ProjectDetailWelcome {
  title: string;
  subtitle: string;
  description: string;
  statsLabels: {
    totalTrees: string;
    treesSold: string;
    treesAvailable: string;
    altitude: string;
    plotSize: string;
    sunnyDays: string;
  };
  buttons: ProjectDetailButton[];
}

export interface ProjectDetailTimeline {
  title: string;
  subtitle: string;
}

export interface ProjectDetailInvestmentReturns {
  backgroundImage: string;
  title: string;
  subtitle: string;
  investmentSection: {
    title: string;
    buttonText: string;
  };
  returnsSection: {
    title: string;
    buttonText: string;
  };
}

export interface ProjectDetailFAQQuestion {
  question: string;
  answer: string;
}

export interface ProjectDetailFAQ {
  title: string;
  titleHighlight: string;
  titleMain: string;
  description: string;
  transparency: string;
  scheduleButton: {
    text: string;
  };
  questions: ProjectDetailFAQQuestion[];
}

export interface ProjectDetailNotFound {
  title: string;
  message: string;
  backButton: string;
}

export interface ProjectDetailPageData {
  hero: ProjectDetailHero;
  investmentCard: ProjectDetailInvestmentCard;
  welcome: ProjectDetailWelcome;
  timeline: ProjectDetailTimeline;
  investmentReturns: ProjectDetailInvestmentReturns;
  faq: ProjectDetailFAQ;
  notFound: ProjectDetailNotFound;
}

// Blog page interfaces
export interface BlogPageHero {
  title: string;
  latestNewsBadge: string;
  featuredPostSuffix: string;
  readMoreText: string;
}

export interface BlogPageArticlesSection {
  title: string;
  nextButtonText: string;
}

export interface BlogPageCallToAction {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface BlogPageData {
  hero: BlogPageHero;
  articlesSection: BlogPageArticlesSection;
  callToAction: BlogPageCallToAction;
}

// Blog article page interfaces
export interface BlogArticleNavigation {
  backToBlogs: string;
  previous: string;
  next: string;
}

export interface BlogArticleContent {
  relatedImagesTitle: string;
  notFoundTitle: string;
  notFoundMessage: string;
}

export interface BlogArticlePageData {
  navigation: BlogArticleNavigation;
  content: BlogArticleContent;
}

export interface ContentData {
  projects: Record<string, ProjectData>;
  availableOpportunities: AvailableOpportunitiesData;
  howItWorks: HowItWorksData;
  investmentPlans: InvestmentPlansData;
  referralProgram: ReferralProgramData;
  riskMitigation: RiskMitigationData;
  testimonials: TestimonialsData;
  transparentReports: TransparentReportsData;
  blog: BlogData;
  whyJoin: WhyJoinData;
  hero: HeroData;
  aboutUs: AboutUsData;
  investing: InvestingData;
  projectsPage: ProjectsPageData;
  projectDetailPage: ProjectDetailPageData;
  blogPage: BlogPageData;
  blogArticlePage: BlogArticlePageData;
} 