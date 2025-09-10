import React, { useState } from 'react';
import { Gift, Share2, Users, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const ReferralProgram: React.FC = () => {
  const { content } = useContent();
  const [shareStatus, setShareStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [shareMessage, setShareMessage] = useState('');
  
  // Early return if content is not available
  if (!content) {
    return null;
  }
  
  const data = content.referralProgram;

  // Generate referral link with current user's ID (you can customize this)
  const generateReferralLink = () => {
    const baseUrl = window.location.origin;
    const referralCode = `REF${Date.now()}`; // Simple referral code generation
    return `${baseUrl}?ref=${referralCode}`;
  };

  // Share content for social media
  const shareContent = {
    title: "Join Project Mocha - Sustainable Coffee Investment",
    text: "Discover sustainable coffee investment opportunities in Kenya. Join thousands of investors growing their wealth while supporting local communities.",
    url: generateReferralLink()
  };

  // Handle social media sharing
  const handleSocialShare = async () => {
    try {
      if (navigator.share) {
        // Use native Web Share API if available
        await navigator.share(shareContent);
        setShareStatus('success');
        setShareMessage('Successfully shared!');
      } else {
        // Fallback: Open share dialog or copy to clipboard
        const shareText = `${shareContent.title}\n\n${shareContent.text}\n\n${shareContent.url}`;
        await navigator.clipboard.writeText(shareText);
        setShareStatus('success');
        setShareMessage('Share content copied to clipboard!');
      }
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        // User didn't cancel, it's an actual error
        setShareStatus('error');
        setShareMessage('Failed to share. Please try again.');
      }
    }
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setShareStatus('idle');
      setShareMessage('');
    }, 3000);
  };

  // Handle personal invite
  const handlePersonalInvite = async () => {
    try {
      const inviteText = `Hi! I wanted to share an amazing investment opportunity with you.\n\n${shareContent.text}\n\nCheck it out: ${shareContent.url}\n\nLet me know if you're interested!`;
      await navigator.clipboard.writeText(inviteText);
      setShareStatus('success');
      setShareMessage('Invite message copied to clipboard!');
    } catch (error) {
      setShareStatus('error');
      setShareMessage('Failed to copy invite. Please try again.');
    }
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setShareStatus('idle');
      setShareMessage('');
    }, 3000);
  };

  // Handle copy referral link
  const handleCopyReferral = async () => {
    try {
      const referralLink = generateReferralLink();
      await navigator.clipboard.writeText(referralLink);
      setShareStatus('success');
      setShareMessage('Referral link copied to clipboard!');
    } catch (error) {
      setShareStatus('error');
      setShareMessage('Failed to copy link. Please try again.');
    }
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setShareStatus('idle');
      setShareMessage('');
    }, 3000);
  };

  return (
    <section className="py-8 md:py-10 bg-brown-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-white mb-2 font-bold">
              {data.sectionTitle}
            </h2>
            <p className="text-brown-200 max-w-2xl mx-auto">
              {data.sectionSubtitle}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6 text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-800 mb-1">{data.earnCard.title}</h3>
                  <p className="text-brown-600 text-sm">{data.earnCard.subtitle}</p>
                </div>
              </div>
              <div className="bg-brown-50 p-4 rounded-lg mb-4">
                <p className="text-brown-800 font-semibold text-lg mb-2">
                  {data.earnCard.highlightText}
                </p>
                <p className="text-brown-600 text-sm">
                  {data.earnCard.description}
                </p>
              </div>
              <ul className="space-y-2 text-brown-700 text-sm mb-4">
                {data.earnCard.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-brown-400 rounded-full mr-2"></div>
                    {benefit}
                </li>
                ))}
              </ul>
            </div> */}

            <div className="card bg-white p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                  <Share2 className="h-6 w-6 text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-800 mb-1">{data.shareCard.title}</h3>
                  <p className="text-brown-600 text-sm">{data.shareCard.subtitle}</p>
                </div>
              </div>
              <p className="text-brown-700 text-sm mb-4">
                {data.shareCard.description}
              </p>
              <div className="space-y-3">
                {data.shareCard.buttons.filter(button => button.type !== 'invite').map((button, index) => {
                  const getIcon = () => {
                    switch (button.type) {
                      case 'social':
                        return <Share2 className="mr-2 h-4 w-4" />;
                      case 'invite':
                        return <Users className="mr-2 h-4 w-4" />;
                      case 'copy':
                        return null;
                      default:
                        return null;
                    }
                  };

                  const getButtonClass = () => {
                    switch (button.type) {
                      case 'social':
                        return 'w-full btn bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center';
                      case 'invite':
                        return 'w-full btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center';
                      case 'copy':
                        return 'w-full btn btn-secondary';
                      default:
                        return 'w-full btn btn-secondary';
                    }
                  };

                  const handleButtonClick = () => {
                    switch (button.type) {
                      case 'social':
                        handleSocialShare();
                        break;
                      case 'invite':
                        handlePersonalInvite();
                        break;
                      case 'copy':
                        handleCopyReferral();
                        break;
                      default:
                        break;
                    }
                  };

                  return (
                    <button key={index} onClick={handleButtonClick} className={getButtonClass()}>
                      {getIcon()}
                      {button.text}
                </button>
                  );
                })}
                
                {/* Status Messages */}
                {shareStatus === 'success' && (
                  <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {shareMessage}
                  </div>
                )}
                {shareStatus === 'error' && (
                  <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {shareMessage}
                  </div>
                )}
              </div>
            </div>
          </div>

         {/*  <div className="text-center mt-8">
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfGl7ml1yBLsz_KNkrc2M-vkIe-9q4_-1IKCnyBsBHitAtVbA/viewform', '_blank', 'noopener,noreferrer')}
              className="btn btn-gold"
            >
              {data.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram; 