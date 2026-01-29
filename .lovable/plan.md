
# Two New Promotional Sections Implementation Plan

## Overview
This plan adds two high-impact promotional sections to the homepage that will drive conversions and encourage referrals.

---

## Section 1: "$199 to Start Your Project Today"

### Purpose
Create urgency and lower the barrier to entry for potential clients by highlighting that projects can begin with just a $199 down payment.

### Location
Will be placed on the homepage between the `ServicesSection` and `NonExclusiveSection` components for maximum visibility.

### Design Features
- Bold headline with trophy gold accent on "$199"
- Eye-catching gradient background (primary purple to accent)
- Shimmer/reflection animation effects (matching existing promo card styles)
- Pixie dust particle effects (consistent with brand aesthetic)
- Clear CTA button linking to the contact page

### Content Structure
- Main headline: "Start Your Web or Custom App Project Today for as Low as $199"
- Supporting text explaining the low barrier to entry
- Prominent CTA button: "Get Started Today"
- Fine print section explaining the down payment terms

### Fine Print Details
Will include legally-clear language explaining:
- The $199 is a down payment on the total project cost
- Example: "For example, if your project total is $1,498, the $199 down payment gets your project started immediately"
- Balance due according to project agreement terms

---

## Section 2: "$200 First Referral Bonus + $100 Unlimited"

### Purpose
Upgrade the existing referral program to incentivize that crucial first referral with double the bonus.

### Location
Will be placed directly after the "$199 to Start" section, before `NonExclusiveSection`.

### Design Features
- Two-tier visual layout highlighting the first referral bonus
- Accent gradient background (complementary to Section 1)
- Large "$200" and "$100" typography with trophy gold styling
- Shimmer animation effects
- Clear CTA for referrals

### Content Structure
- Main headline: "$200 First Referral Bonus"
- Subheadline: "+ Unlimited $100 Referrals After That"
- Brief explanation of the program
- CTA button linking to the Promos page for full details
- Fine print with program terms

---

## Files to Create/Modify

### New Component
`src/components/PromotionalSections.tsx`
- Contains both promotional section components
- Follows existing card and styling patterns from `Promos.tsx`
- Uses existing UI components (Card, Button)
- Includes shimmer and pixie dust animations

### Modified Files
1. `src/pages/Index.tsx` - Import and add the new promotional sections component
2. `src/components/PromotionMarquee.tsx` - Update text to reflect new "$200 First Referral" offer
3. `src/pages/Promos.tsx` - Update the referral section to match the new $200 first / $100 after structure

---

## Technical Details

### Component Structure
```text
PromotionalSections
  - StartProjectSection ($199 promo)
      - Gradient header with shimmer
      - Pixie dust particles
      - Main content area
      - CTA button
      - Fine print disclaimer
  - ReferralBonusSection ($200/$100 promo)
      - Two-tier bonus display
      - Animated elements
      - CTA button
      - Fine print terms
```

### Styling Approach
- Reuse existing gradient patterns from `index.css`
- Apply shimmer animation from button variants
- Trophy gold accents for monetary values
- Responsive grid layout for mobile/desktop
- Glass effect backgrounds for visual depth

### CTA Destinations
- "$199 to Start" section: Links to `/contact#get-in-touch`
- Referral section: Links to `/studiosweb/promos` for full program details
