import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  robots?: string;
  type?: "website" | "article";
  image?: string;
}

const CANONICAL_ORIGIN = "https://seraphis-it.com";

const ensureMeta = (selector: string, attribute: "name" | "property", key: string) => {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  return element;
};

const SEO = ({
  title,
  description,
  canonicalPath,
  robots = "index,follow",
  type = "website",
  image,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    ensureMeta('meta[name="description"]', "name", "description").setAttribute("content", description);
    ensureMeta('meta[name="robots"]', "name", "robots").setAttribute("content", robots);

    ensureMeta('meta[property="og:site_name"]', "property", "og:site_name").setAttribute(
      "content",
      "Seraphis IT and Data Solutions",
    );
    ensureMeta('meta[property="og:type"]', "property", "og:type").setAttribute("content", type);
    ensureMeta('meta[property="og:title"]', "property", "og:title").setAttribute("content", title);
    ensureMeta('meta[property="og:description"]', "property", "og:description").setAttribute(
      "content",
      description,
    );

    ensureMeta('meta[name="twitter:card"]', "name", "twitter:card").setAttribute(
      "content",
      image ? "summary_large_image" : "summary",
    );
    ensureMeta('meta[name="twitter:title"]', "name", "twitter:title").setAttribute("content", title);
    ensureMeta('meta[name="twitter:description"]', "name", "twitter:description").setAttribute(
      "content",
      description,
    );

    const path = canonicalPath ?? window.location.pathname;
    const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
    const canonicalUrl = `${CANONICAL_ORIGIN}${normalizedPath}`;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    ensureMeta('meta[property="og:url"]', "property", "og:url").setAttribute("content", canonicalUrl);

    const existingOgImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    const existingTwitterImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;

    if (image) {
      const imageUrl = image.startsWith("http") ? image : `${CANONICAL_ORIGIN}${image}`;
      ensureMeta('meta[property="og:image"]', "property", "og:image").setAttribute("content", imageUrl);
      ensureMeta('meta[name="twitter:image"]', "name", "twitter:image").setAttribute("content", imageUrl);
    } else {
      existingOgImage?.remove();
      existingTwitterImage?.remove();
    }
  }, [title, description, canonicalPath, robots, type, image]);

  return null;
};

export default SEO;
