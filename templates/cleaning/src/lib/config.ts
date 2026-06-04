import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Fabulous House Cleaning LLC",
    tagline: "Sparkling homes, happy clients, every time.",
    phone: "(209) 247-7293",
    phoneHref: "tel:+12092477293",
    email: "info@fabuloushousecleaning.com",
    address: "Modesto, CA",
    city: "Modesto",
    serviceAreas: ["Modesto", "Stanislaus County"],
    license: "Licensed & Insured",
    since: "2002",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ember",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "Residential Cleaning", desc: "Keep your home pristine with our regular and deep cleaning options.", urgent: false },
    { icon: "briefcase", title: "Commercial Cleaning", desc: "Maintain a professional environment with our tailored commercial cleaning solutions.", urgent: false },
    { icon: "hammer", title: "Post-Construction Cleaning", desc: "We handle the mess after construction, leaving your property spotless and ready.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Thorough cleaning for a truly refreshed and sanitized living space.", urgent: false },
    { icon: "truck", title: "Move-in/Move-out Cleaning", desc: "Ensure a smooth transition with our comprehensive move-in and move-out cleaning services.", urgent: false },
    { icon: "droplets", title: "Window Washing", desc: "Achieve streak-free, sparkling windows for a clearer view.", urgent: false }
  ],

  testimonials: [
    { name: "Krissa Barnes", location: "Modesto, CA", stars: 5, text: "Super reliable and they do consistent work even after multiple years. It is always such a treat to have my house clean and they add some nice touches that feel special. I always feel comfortable with them in my home which is really important! We love Fabiola and team. Thank you!!" },
    { name: "Michelle Borba", location: "Stanislaus County, CA", stars: 5, text: "We have used fabulous house cleaning for almost ten years. Vernice and her team are reliable, hard working and thorough. The prices are fair and they always do a great job!" },
    { name: "Kathy Cole", location: "Modesto, CA", stars: 5, text: "Fabulous health cleaning does just that they do a fabulous job! We have never been disappointed with their services.They're very accommodating, kind and thorough. I would highly recommend them and we're so glad we have them because they do such a great job." }
  ],

  trustBadges: [
    "Eco-Friendly Products", "Custom Cleaning Plans", "22+ Years Experience", "Licensed & Insured", "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 22, label: "Yrs Experience", suffix: "+", decimals: 0 },
    { value: 1000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "sparkles", title: "Eco-Friendly Products", desc: "We use safe, effective, and environmentally conscious cleaning solutions for your home." },
    { icon: "award", title: "Customized Plans", desc: "Tailored cleaning schedules and services to perfectly fit your unique needs and preferences." },
    { icon: "shield-check", title: "Trusted Professionals", desc: "Our experienced team is committed to quality, reliability, and treating your home with care." },
    { icon: "dollar-sign", title: "Affordable Rates", desc: "High-quality cleaning services at competitive and transparent prices." },
    { icon: "clock", title: "Clear & Simple Process", desc: "Easy booking, transparent pricing, and reliable scheduling for a stress-free experience." },
    { icon: "thumbs-up", title: "Results That Last", desc: "Proven methods and attention to detail ensure a truly clean and lasting shine." }
  ],

  formServiceOptions: ["Residential Cleaning", "Commercial Cleaning Services", "Construction & Post-Construction Cleaning", "Deep Cleaning", "Move-in/Move-out Cleaning", "Kitchen Cleaning", "Bathroom Cleaning", "Laundry Services", "Window Washing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!