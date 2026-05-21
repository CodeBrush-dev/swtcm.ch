// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.swtcm.ch",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.swtcm.ch/","title_tag":"Akupunktur Uster & Traditionelle Chinesische Medizin | SW-TCM","meta_description":"Akupunktur Uster, TCM und chinesische Kräuterheilmittel in Uster und Winterthur. Schmerztherapie Akupunktur, Tuina-Massage und Stressbehandlung für Ihre Gesundheit."},{"page_url":"https://www.swtcm.ch/challenges","title_tag":"Stressbehandlung & Tuina-Massage Winterthur | SW-TCM","meta_description":"Stressbehandlung Winterthur mit Tuina-Massage und TCM. Natürliche Schmerztherapie mit Akupunktur für Rückenbeschwerden und ganzheitliche Gesundheit in Winterthur."}],"keywords":["Akupunktur Uster","TCM Uster","Heilungsdienst Winterthur","Chinesische Kräuterheilmittel Uster","Tuina-Massage Winterthur","Traditionelle Chinesische Medizin Uster","Stressbehandlung Winterthur","Rückenschmerzen TCM Uster","Schmerztherapie Akupunktur","Gesundheit Uster"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.swtcm.ch/#medicalclinic",
  "name": "SW-TCM",
  "url": "https://www.swtcm.ch/",
  "image": [
    "https://static.wixstatic.com/media/54968b657bda4a3d970733b2059a9a66.jpg/v1/fill/w_940,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Acupuncture%20Treatment.jpg",
    "https://static.wixstatic.com/media/297a53004ad044dab0035fb00ae9093e.jpg/v1/fill/w_940,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Back%20Massage.jpg",
    "https://static.wixstatic.com/media/7ce97e0733cf45f688096da58b8c8e5d.jpg/v1/crop/x_411,y_422,w_3440,h_2170/fill/w_953,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Acupuncture%20old%20book.jpg",
    "https://static.wixstatic.com/media/63f16ba8cf964b398dddab3b8c9bcb50.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/63f16ba8cf964b398dddab3b8c9bcb50.jpg"
  ],
  "description": "SW-TCM in Uster und Winterthur bietet natürliche Heilungsdienste der Traditionellen Chinesischen Medizin (TCM) wie Akupunktur, Tuina-Massage, Schröpfen und chinesische Kräuter an, um Körper, Geist und Seele zu verjüngen.",
  "telephone": "+41762076388",
  "email": "swtcm@hotmail.com",
  "medicalSpecialty": [
    "Acupuncture",
    "PainManagement",
    "Rehabilitation",
    "Dermatology",
    "Cardiovascular",
    "Gastroenterologic",
    "Gynecologic",
    "Respiratory",
    "Nutritional"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Uster"
    },
    {
      "@type": "City",
      "name": "Winterthur"
    }
  ],
  "sameAs": [],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Winterthurerstrasse 2",
      "addressLocality": "Uster",
      "postalCode": "8610",
      "addressCountry": "CH"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Bankstrasse 12",
      "addressLocality": "Winterthur",
      "postalCode": "8400",
      "addressCountry": "CH"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Wednesday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00",
      "name": "Uster"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00",
      "name": "Winterthur"
    }
  ],
  "department": [
    {
      "@type": "MedicalClinic",
      "name": "SW-TCM Uster",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Winterthurerstrasse 2",
        "addressLocality": "Uster",
        "postalCode": "8610",
        "addressCountry": "CH"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Wednesday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "telephone": "+41762076388"
    },
    {
      "@type": "MedicalClinic",
      "name": "SW-TCM Winterthur",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bankstrasse 12",
        "addressLocality": "Winterthur",
        "postalCode": "8400",
        "addressCountry": "CH"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Tuesday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "telephone": "+41762076388"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Hong Wang",
    "jobTitle": "TCM Arzt, Akupunkteur",
    "description": "TCM-Arzt mit 30 Jahren Berufserfahrung in Traditioneller Chinesischer Medizin, spezialisiert auf Akupunktur, Tuina und Phytotherapie.",
    "identifier": "ZSR-Nr. F449563"
  },
  "employee": {
    "@type": "Person",
    "name": "Hong Wang",
    "jobTitle": "TCM Arzt, Akupunkteur"
  },
  "service": [
    {
      "@type": "MedicalTherapy",
      "name": "Akupunktur",
      "description": "Akupunkturbehandlung zur Beruhigung des Körpers, Schmerzlinderung und Förderung des Energieflusses im Körper."
    },
    {
      "@type": "MedicalTherapy",
      "name": "Tuina-Massage",
      "description": "Tuina-Massage zur Lösung von Muskelverspannungen, Entspannung und Förderung eines gesünderen Lebensstils."
    },
    {
      "@type": "MedicalTherapy",
      "name": "Schröpfen",
      "description": "Schröpfbehandlung zur Stärkung des Immunsystems und Unterstützung der natürlichen Heilung."
    },
    {
      "@type": "MedicalTherapy",
      "name": "Chinesische Kräuterheilmittel",
      "description": "Individuell abgestimmte chinesische Kräutertherapie basierend auf Yin-Yang und den fünf Elementen zur Behandlung zugrunde liegender Krankheitsursachen."
    },
    {
      "@type": "MedicalTherapy",
      "name": "Beratung",
      "description": "Beratung zu natürlichen Heilmitteln und Kombinationsbehandlungen der Traditionellen Chinesischen Medizin."
    }
  ],
  "priceRange": "CHF 13 pro 5 Minuten; max. CHF 156 pro Sitzung",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "TCM Behandlungen und Preise",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "TCM-Behandlung (Akupunktur, Tuina, Schröpfen, Ohrnadel, Wärmetherapie)",
        "price": "13",
        "priceCurrency": "CHF",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "13",
          "priceCurrency": "CHF",
          "unitText": "pro 5 Minuten"
        }
      },
      {
        "@type": "Offer",
        "name": "Maximalpreis pro Sitzung",
        "price": "156",
        "priceCurrency": "CHF",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "156",
          "priceCurrency": "CHF",
          "description": "Maximaler Betrag pro Sitzung (ca. 60 Minuten) für kombinierte TCM-Behandlungen."
        }
      },
      {
        "@type": "Offer",
        "name": "Rezeptgebühr",
        "price": "39",
        "priceCurrency": "CHF"
      },
      {
        "@type": "Offer",
        "name": "Versäumte Konsultation",
        "price": "80",
        "priceCurrency": "CHF"
      }
    ]
  },
  "keywords": [
    "Akupunktur Uster",
    "Akupunktur Winterthur",
    "TCM Uster",
    "TCM Winterthur",
    "Traditionelle Chinesische Medizin",
    "Tuina-Massage",
    "Schröpfen",
    "chinesische Kräuter",
    "Burnout Behandlung",
    "Kopfschmerzen",
    "Migräne",
    "Rückenschmerzen",
    "Heuschnupfen",
    "Kinderwunsch",
    "Geburtsvorbereitung"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
