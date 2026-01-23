# Security Audit Report - Studios by Dave Website

**Date:** January 22, 2026  
**Project:** studiosbydave-official-site1  
**Type:** React + Vite + TypeScript SPA with Supabase Backend

---

## Executive Summary

This security audit identified **3 HIGH priority issues**, **5 MEDIUM priority issues**, and **2 LOW priority issues**. The application has implemented some good security practices but requires immediate attention for critical vulnerabilities.

---

## Critical Issues Found

### 🔴 HIGH PRIORITY

#### 1. **Environment Variables Missing in .gitignore**
- **Severity:** HIGH
- **Location:** `.gitignore`
- **Issue:** The `.gitignore` file doesn't have explicit entries for `.env` files. This is a critical oversight as `.env` files contain sensitive API keys and secrets.
- **Risk:** Accidental exposure of API keys, database credentials, and other secrets to version control
- **Recommendation:**
  ```
  Add to .gitignore:
  .env
  .env.local
  .env.*.local
  .env*.prod
  ```

#### 2. **Supabase Publishable Key Stored in Client-Side Code**
- **Severity:** HIGH (Acceptable for Supabase, but still risks)
- **Location:** `src/integrations/supabase/client.ts`
- **Issue:** The `SUPABASE_PUBLISHABLE_KEY` is exposed in client-side code (as designed by Supabase), but combined with Row Level Security gaps could be problematic.
- **Risk:** Without proper RLS, unauthorized access to database
- **Recommendation:**
  - Verify all Supabase tables have proper RLS policies enabled
  - Current RLS policies look good for contact_submissions (Service role only)
  - Ensure no other tables allow public read/write access

#### 3. **Missing HTTPS Enforcement & Security Headers**
- **Severity:** HIGH
- **Location:** All responses, `vite.config.ts`
- **Issue:** No mention of HTTPS enforcement, HSTS headers, or CSP (Content Security Policy)
- **Risk:** Man-in-the-middle attacks, XSS vulnerabilities
- **Recommendation:**
  - Add HSTS header: `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  - Implement Content Security Policy (CSP)
  - Enforce HTTPS redirects at server level

---

### 🟠 MEDIUM PRIORITY

#### 4. **localStorage Usage Without Encryption**
- **Severity:** MEDIUM
- **Location:** `src/integrations/supabase/client.ts` (line 13)
- **Issue:** Supabase auth tokens stored in localStorage without encryption
  ```typescript
  storage: localStorage,
  persistSession: true,
  autoRefreshToken: true,
  ```
- **Risk:** XSS attacks could steal session tokens from localStorage
- **Recommendation:**
  - Consider using sessionStorage for sensitive tokens (less persistent but more secure)
  - Implement Content Security Policy to prevent XSS
  - Add HttpOnly cookie support if backend allows

#### 5. **Sidebar State Cookie Missing Security Attributes**
- **Severity:** MEDIUM
- **Location:** `src/components/ui/sidebar.tsx` (lines 85)
- **Issue:** Cookie set without `Secure` and `HttpOnly` flags:
  ```typescript
  document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
  ```
- **Risk:** Cookie can be accessed by JavaScript (vulnerable to XSS)
- **Recommendation:**
  ```typescript
  document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}; Secure; SameSite=Strict`
  ```

#### 6. **External Script Loading Without Integrity Checks**
- **Severity:** MEDIUM
- **Location:** `index.html` (line 75)
- **Issue:** Third-party scripts loaded without Subresource Integrity (SRI):
  ```html
  <script src="https://omnisnippet1.com/inshop/launcher-v2.js"></script>
  ```
- **Risk:** Man-in-the-middle attack could inject malicious code
- **Recommendation:**
  - Add SRI hash to external scripts when available
  - Use CORS attributes
  - Load scripts asynchronously

#### 7. **Rate Limiting Could Be More Robust**
- **Severity:** MEDIUM
- **Location:** `supabase/functions/send-contact-email/index.ts` (lines 48-70)
- **Issue:** Rate limiting uses in-memory Map that resets on server restart:
  ```typescript
  const submissionLog = new Map<string, number[]>();
  ```
- **Risk:** Distributed DoS attacks, rate limiting ineffective across server restarts
- **Recommendation:**
  - Use Supabase database or Redis for persistent rate limiting
  - Implement IP-based rate limiting at edge/CDN level
  - Consider stricter limits (current: 5 submissions/hour seems reasonable)

#### 8. **Missing CSRF Protection on Contact Form**
- **Severity:** MEDIUM
- **Location:** `src/pages/Contact.tsx`
- **Issue:** Contact form lacks CSRF token validation
- **Risk:** Cross-Site Request Forgery attacks
- **Recommendation:**
  - Implement CSRF tokens for state-changing operations
  - Add SameSite cookie attribute to all cookies
  - Validate origin headers in Supabase function

---

### 🟡 LOW PRIORITY

#### 9. **dangerouslySetInnerHTML Usage (With Proper Escaping)**
- **Severity:** LOW (Mitigated by escaping)
- **Location:** `src/components/ui/chart.tsx` (line 79)
- **Issue:** Uses `dangerouslySetInnerHTML` for chart theme injection
- **Impact:** Minimal - the HTML is auto-generated from trusted theme config, not user input
- **Recommendation:**
  - Add explicit security comment explaining the risk mitigation
  - Consider using CSS variables instead if possible

#### 10. **Potential Email Header Injection**
- **Severity:** LOW
- **Location:** `supabase/functions/send-contact-email/index.ts` (line 169)
- **Issue:** User input used in email subject:
  ```typescript
  subject: `New Contact Form Submission from ${escapeHtml(firstName)} ${escapeHtml(lastName)}`
  ```
- **Risk:** While escapeHtml prevents XSS in HTML, newlines in subject could potentially cause header injection
- **Recommendation:**
  - Strip newlines from firstName/lastName: `.replace(/[\r\n]/g, '')`

---

## Security Best Practices Implemented ✅

1. **Input Validation** - Comprehensive client and server-side validation
2. **Data Sanitization** - HTML escaping prevents XSS in emails
3. **Honeypot Protection** - Bot detection implemented
4. **CORS Validation** - Origin checking for contact email function
5. **Row Level Security** - RLS enabled on contact_submissions table
6. **Password/Token Handling** - Environment variables used correctly
7. **Type Safety** - TypeScript prevents many common vulnerabilities

---

## Recommendations Priority List

### Immediate (Do First)
1. Add `.env` files to `.gitignore`
2. Add Secure and SameSite attributes to sidebar cookie
3. Implement HTTPS/HSTS enforcement
4. Add Content Security Policy header

### Short-term (Next Sprint)
5. Implement persistent rate limiting with Supabase
6. Add SRI hashes to external scripts
7. Implement CSRF protection
8. Strip newlines from email fields

### Long-term (Planned)
9. Consider sessionStorage for auth tokens
10. Regular dependency updates and security audits
11. Implement SIEM/security monitoring
12. Add automated security testing to CI/CD

---

## Dependency Security Status

**Current Versions:**
- react: ^19.2.3 ✅ (Latest)
- @supabase/supabase-js: ^2.86.0 ✅ (Latest)
- react-router-dom: ^7.12.0 ✅ (Latest)
- zod: ^3.25.76 ✅ (Latest)

**Recommendation:** Run `npm audit` regularly and keep dependencies updated.

---

## Testing Recommendations

- [ ] OWASP Top 10 security testing
- [ ] XSS vulnerability scanning
- [ ] CSRF attack simulation
- [ ] SQL injection testing
- [ ] Rate limiting stress testing
- [ ] Dependency vulnerability scanning (npm audit, Snyk)
- [ ] Security headers validation (securityheaders.com)

---

## Contact & Follow-up

This report should be reviewed and addressed with the development team. Schedule a follow-up audit after implementing these recommendations.

