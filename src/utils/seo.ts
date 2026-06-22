/**
 * Production-ready SEO Utility for Zera Dental India
 * Dynamically updates document metadata, Open Graph labels, and injects Schema.org JSON-LD structured data.
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  schemaId?: string;
  schemaData?: object;
}

/**
 * Updates all critical search engine tags dynamically on route changes.
 */
export function updatePageSEO(config: SEOConfig) {
  // 1. Title
  document.title = config.title;

  // 2. Map standard meta tags
  const standardMetas = [
    { name: 'description', content: config.description },
    { name: 'keywords', content: config.keywords },
    { name: 'author', content: 'Zera Dental' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' }
  ];

  standardMetas.forEach(tag => {
    let element = document.querySelector(`meta[name="${tag.name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', tag.name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', tag.content);
  });

  // 3. Map Open Graph & Twitter meta tags
  const ogImageFallback = 'https://og-image.vercel.app/Zera%20Dental.png?theme=dark&md=0&fontSize=100px';
  const ogUrlFallback = config.ogUrl || 'https://zeradental.in';

  const socialTags = [
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Zera Dental' },
    { property: 'og:url', content: ogUrlFallback },
    { property: 'og:title', content: config.ogTitle || config.title },
    { property: 'og:description', content: config.ogDescription || config.description },
    { property: 'og:image', content: config.ogImage || ogImageFallback },
    { property: 'og:image:secure_url', content: config.ogImage || ogImageFallback },
    
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.ogTitle || config.title },
    { name: 'twitter:description', content: config.ogDescription || config.description },
    { name: 'twitter:image', content: config.ogImage || ogImageFallback }
  ];

  socialTags.forEach(tag => {
    let selector = '';
    if ('property' in tag) {
      selector = `meta[property="${tag.property}"]`;
    } else {
      selector = `meta[name="${tag.name}"]`;
    }

    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if ('property' in tag) {
        element.setAttribute('property', tag.property);
      } else {
        element.setAttribute('name', tag.name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute('content', tag.content);
  });

  // 4. Update canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', ogUrlFallback);

  // 5. Dynamic JSON-LD Structured Data Injection
  // Clean up any stale schemas first
  const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
  existingSchemas.forEach(el => {
    if (el.id && el.id.startsWith('zera-seo-')) {
      el.remove();
    }
  });

  // Inject New Schema if provided
  if (config.schemaId && config.schemaData) {
    const scriptId = `zera-seo-${config.schemaId}`;
    let schemaScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = scriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(config.schemaData);
  }
}
