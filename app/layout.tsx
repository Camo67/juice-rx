import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-fraunces",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-satoshi",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://juicerx.com"),
  title: {
    default: "JuiceRx | Best Cold-Pressed Organic Juices & Cleanses in Chicago",
    template: "%s | JuiceRx - Premium Organic Juice Bar",
  },
  description:
    "JuiceRx crafts the best cold-pressed organic juices in Chicago. Shop our celery juice, green juice cleanses, immunity shots & plant-based smoothies. Made fresh daily from 100% USDA organic ingredients. Free local delivery on orders $75+. Rated 4.9/5 from 2,847+ reviews.",
  keywords: [
    "best cold-pressed juice Chicago",
    "organic juice delivery",
    "juice cleanse near me",
    "celery juice benefits",
    "green juice detox",
    "immunity shot",
    "plant-based smoothie",
    "raw vegan juice",
    "non-GMO juice",
    "organic juice bar Chicago",
    "healthy juice delivery",
    "detox cleanse program",
    "fresh pressed juice",
    "wellness drinks",
    "anti-inflammatory juice",
    "turmeric ginger shot",
    "cold pressed green juice",
    "organic apple juice",
    "nut milk Chicago",
    "juice subscription",
  ],
  authors: [{ name: "JuiceRx", url: "https://juicerx.com" }],
  creator: "JuiceRx",
  publisher: "JuiceRx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://juicerx.com",
    languages: {
      "en-US": "https://juicerx.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juicerx.com",
    siteName: "JuiceRx",
    title: "JuiceRx | Best Cold-Pressed Organic Juices & Cleanses in Chicago",
    description:
      "Chicago's #1 rated organic juice bar. Shop cold-pressed juices, cleanses & wellness shots made fresh daily. Free delivery on orders $75+.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JuiceRx - Premium Cold-Pressed Organic Juices featuring green juice, celery juice, and immunity shots",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@juicerx",
    title: "JuiceRx | Best Cold-Pressed Organic Juices & Cleanses",
    description:
      "Chicago's #1 rated organic juice bar. Cold-pressed juices, cleanses & wellness shots made fresh daily.",
    images: ["/og-image.jpg"],
    creator: "@juicerx",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Food & Beverage",
  classification: "Organic Juice Bar",
  other: {
    "geo.region": "US-IL",
    "geo.placename": "Chicago",
    "geo.position": "41.8781;-87.6298",
    ICBM: "41.8781, -87.6298",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2eb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1f18" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://juicerx.com/#organization",
    name: "JuiceRx",
    url: "https://juicerx.com",
    logo: {
      "@type": "ImageObject",
      url: "https://juicerx.com/logo.png",
      width: 512,
      height: 512,
    },
    description:
      "JuiceRx is Chicago's premier organic juice bar, crafting cold-pressed juices, cleanses, and wellness shots from 100% USDA organic ingredients since 2020.",
    foundingDate: "2020",
    foundingLocation: "Chicago, IL",
    slogan: "Drink Your Greens. Feel Alive.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-312-555-0123",
        contactType: "customer service",
        email: "hello@juicerx.com",
        availableLanguage: "English",
        areaServed: "US",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "07:00",
          closes: "20:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-312-555-0124",
        contactType: "sales",
        email: "wholesale@juicerx.com",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      "https://www.instagram.com/juicerx",
      "https://www.facebook.com/juicerx",
      "https://twitter.com/juicerx",
      "https://www.tiktok.com/@juicerx",
      "https://www.youtube.com/@juicerx",
      "https://www.yelp.com/biz/juicerx-chicago",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Wellness Ave",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60601",
      addressCountry: "US",
    },
    brand: {
      "@type": "Brand",
      name: "JuiceRx",
      slogan: "Drink Your Greens. Feel Alive.",
    },
    award: ["Best Juice Bar Chicago 2024", "Top 10 Organic Juice Bars - Wellness Magazine"],
    knowsAbout: [
      "Cold-pressed juice",
      "Organic nutrition",
      "Juice cleansing",
      "Plant-based wellness",
      "Detox programs",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://juicerx.com/#website",
    name: "JuiceRx",
    url: "https://juicerx.com",
    description: "Premium cold-pressed organic juices and cleanses made fresh daily in Chicago",
    publisher: { "@id": "https://juicerx.com/#organization" },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://juicerx.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "OrderAction",
        target: "https://juicerx.com/shop",
        deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
      },
    ],
    inLanguage: "en-US",
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment", "Store"],
    "@id": "https://juicerx.com/#localbusiness",
    name: "JuiceRx",
    image: [
      "https://juicerx.com/storefront-1x1.jpg",
      "https://juicerx.com/storefront-4x3.jpg",
      "https://juicerx.com/storefront-16x9.jpg",
    ],
    url: "https://juicerx.com",
    telephone: "+1-312-555-0123",
    email: "hello@juicerx.com",
    priceRange: "$$",
    servesCuisine: ["Organic", "Vegan", "Raw Food", "Juice Bar"],
    acceptsReservations: false,
    paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Wellness Ave",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60601",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8781,
      longitude: -87.6298,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    menu: "https://juicerx.com/menu",
    hasMenu: {
      "@type": "Menu",
      name: "JuiceRx Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Cold-Pressed Juices",
          description: "Fresh cold-pressed organic juices made daily",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Celery Juice",
              description: "Pure cold-pressed organic celery with fresh lemon. Best seller for gut health and detox.",
              suitableForDiet: ["https://schema.org/VeganDiet", "https://schema.org/GlutenFreeDiet"],
              nutrition: { "@type": "NutritionInformation", calories: "45 calories", servingSize: "16oz" },
              offers: {
                "@type": "Offer",
                price: "9.50",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "MenuItem",
              name: "Green Detox",
              description: "Kale, spinach, cucumber, celery, apple, lemon, ginger",
              suitableForDiet: ["https://schema.org/VeganDiet", "https://schema.org/GlutenFreeDiet"],
              offers: {
                "@type": "Offer",
                price: "11.00",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Juice Cleanses",
          description: "Multi-day cleanse programs for detox and wellness",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "3-Day Deep Cleanse",
              description: "18 cold-pressed juices for a full system reset. Includes meal plan and wellness guide.",
              offers: { "@type": "Offer", price: "185.00", priceCurrency: "USD" },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "2847",
      reviewCount: "1523",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Sarah M." },
        reviewBody: "The celery juice has completely transformed my mornings. I've never felt more energized!",
        datePublished: "2024-11-15",
      },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 41.8781, longitude: -87.6298 },
      geoRadius: "30 mi",
    },
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://juicerx.com/shop",
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      deliveryMethod: [
        "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
        "http://purl.org/goodrelations/v1#DeliveryModePickUp",
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is cold-pressed juice and why is it better?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cold-pressed juice is made using a hydraulic press that extracts juice without heat or oxidation, preserving up to 5x more nutrients, enzymes, and vitamins than traditional centrifugal juicers. At JuiceRx, our cold-pressed juices maintain maximum nutritional value for up to 72 hours when kept refrigerated.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a juice cleanse last and what are the benefits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JuiceRx offers 1-day, 3-day, and 5-day cleanse programs. Benefits include improved digestion, increased energy, clearer skin, reduced inflammation, and mental clarity. Our 3-day Deep Cleanse is most popular, providing 18 juices designed to reset your digestive system while delivering essential nutrients.",
        },
      },
      {
        "@type": "Question",
        name: "Are JuiceRx juices organic and where do you source ingredients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all JuiceRx juices are made with 100% USDA certified organic ingredients. We partner with local organic farms in the Midwest and source produce fresh daily. Our commitment to organic means no pesticides, no GMOs, and no artificial additives in any of our products.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer juice delivery in Chicago?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! JuiceRx offers same-day and next-day delivery throughout the Chicago metro area. Orders over $75 qualify for free delivery. We also ship nationwide with cold packaging to ensure freshness. Subscribe to our weekly juice delivery and save 15% on every order.",
        },
      },
    ],
  }

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JuiceRx Bestselling Cold-Pressed Juices",
    description: "Our most popular organic cold-pressed juices, voted best in Chicago",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          "@id": "https://juicerx.com/product/celery-juice",
          name: "Celery Juice",
          description: "Pure cold-pressed organic celery with fresh lemon. Our #1 bestseller for gut health.",
          image: "https://peoplevine.blob.core.windows.net/media/426/product/67451/celery-juice.jpg",
          brand: { "@type": "Brand", name: "JuiceRx" },
          offers: {
            "@type": "Offer",
            price: "9.50",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "JuiceRx" },
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "567" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          "@id": "https://juicerx.com/product/apple-juice",
          name: "Organic Apple Juice",
          description: "Cold-pressed Fuji apple with Ceylon cinnamon. A naturally sweet classic.",
          image: "https://peoplevine.blob.core.windows.net/media/426/product/52056/apple-juice.jpg",
          brand: { "@type": "Brand", name: "JuiceRx" },
          offers: { "@type": "Offer", price: "8.00", priceCurrency: "USD", availability: "https://schema.org/InStock" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "342" },
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://juicerx.com" },
      { "@type": "ListItem", position: 2, name: "Shop", item: "https://juicerx.com/shop" },
      { "@type": "ListItem", position: 3, name: "Cleanses", item: "https://juicerx.com/cleanses" },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://peoplevine.blob.core.windows.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productCollectionSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${jakarta.variable} font-sans antialiased grain`}>{children}</body>
    </html>
  )
}
