"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Globe, Leaf, ShieldCheck, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="Lumina Beauty"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain",
      }}
      title="Unveil Your Natural Radiance"
      description="Discover curated beauty essentials crafted for your unique glow. Clean, conscious, and undeniably luxurious."
      kpis={[
        {
          value: "100%",
          label: "Natural Ingredients",
        },
        {
          value: "24h",
          label: "Visible Results",
        },
        {
          value: "50k+",
          label: "Happy Clients",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/copy-space-with-blush-brush-table_23-2148301786.jpg"
      imageAlt="Luxurious skincare products on a warm, neutral surface"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/sincere-delighted-feminine-blond-girl-with-blue-eyes-nice-happy-smile-gazing-camera-giggling-having-fun-laughing-enjoying-evening-posing-satisfied-cheerful-tender-pose-white-wall_176420-35203.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-content-media-creator-blogger-sits-her-room-records-video-her-favourite-makeup_1258-254940.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-woman-holding-paint-brushes_23-2148276443.jpg",
          alt: "User 3",
        },
        {
          src: "testi-4",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indoor-shot-happy-smiling-woman-keeps-hands-together_273609-44728.jpg",
          alt: "User 5",
        },
      ]}
      avatarText="Trusted by 50,000+ beauty lovers worldwide"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Cruelty-Free",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Vegan Certified",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Eco-Friendly",
          icon: Globe,
        },
        {
          type: "text-icon",
          text: "Dermatologist Tested",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Pure Ingredients",
          icon: Sparkles,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Clean Beauty, Redefined"
      description="We believe in transparency, efficacy, and the power of botanicals. Our mission is to simplify your routine without sacrificing the luxury you deserve."
      metrics={[
        {
          value: "100%",
          title: "Vegan Ingredients",
        },
        {
          value: "0",
          title: "Cruelty Free",
        },
        {
          value: "95%",
          title: "Sustainable Packaging",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smile-woman-with-cream-face-look-camera_197531-32898.jpg"
      imageAlt="A refined aesthetic shot of a beauty ritual"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Lumina Glow Serum",
          price: "$48",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-serum-container_23-2149249581.jpg",
        },
        {
          id: "p2",
          name: "Velvet Moisture Balm",
          price: "$32",
          imageSrc: "http://img.b2bpic.net/free-photo/rustic-cosmetic-product-presentation_23-2151947843.jpg",
        },
        {
          id: "p3",
          name: "Midnight Rose Oil",
          price: "$56",
          imageSrc: "http://img.b2bpic.net/free-photo/blank-label-perfume-bottle-blank-business-card_53876-153476.jpg",
        },
        {
          id: "p4",
          name: "Hydration Mist",
          price: "$28",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-eucalyptus-with-beauty-products_23-2149440672.jpg",
        },
        {
          id: "p5",
          name: "Professional Brush Set",
          price: "$65",
          imageSrc: "http://img.b2bpic.net/free-photo/set-cosmetic-paint-brush-makeup_1232-2061.jpg",
        },
        {
          id: "p6",
          name: "Radiance Face Oil",
          price: "$42",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-serum-bottle-hand-orange-background_185193-162127.jpg",
        },
      ]}
      title="Our Collection"
      description="Essential beauty staples designed to elevate your daily self-care ritual."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Transformative",
          quote: "My skin has never felt better. The glow is real!",
          name: "Elena R.",
          role: "Beauty Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/sincere-delighted-feminine-blond-girl-with-blue-eyes-nice-happy-smile-gazing-camera-giggling-having-fun-laughing-enjoying-evening-posing-satisfied-cheerful-tender-pose-white-wall_176420-35203.jpg",
        },
        {
          id: "t2",
          title: "So Gentle",
          quote: "Finally found products that don't irritate my sensitive skin.",
          name: "Sarah K.",
          role: "Skincare Expert",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-content-media-creator-blogger-sits-her-room-records-video-her-favourite-makeup_1258-254940.jpg",
        },
        {
          id: "t3",
          title: "Essential",
          quote: "The hydration mist is a life-saver during long travel days.",
          name: "Mark D.",
          role: "Frequent Traveler",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-paint-brushes_23-2148276443.jpg",
        },
        {
          id: "t4",
          title: "Luxurious",
          quote: "Every item feels so premium and the results are stunning.",
          name: "Chloe L.",
          role: "Make-up Artist",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-posing-indoors_23-2148750546.jpg",
        },
        {
          id: "t5",
          title: "Best Quality",
          quote: "I am so impressed with the quality and transparency of ingredients.",
          name: "Jasmine T.",
          role: "Wellness Blogger",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-happy-smiling-woman-keeps-hands-together_273609-44728.jpg",
        },
      ]}
      title="Loved by You"
      description="See why thousands of beauty enthusiasts have made us part of their daily routine."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Are your products cruelty-free?",
          content: "Yes, we are 100% cruelty-free and never test on animals.",
        },
        {
          id: "f2",
          title: "How long does shipping take?",
          content: "Orders typically process within 24 hours and arrive in 3-5 business days.",
        },
        {
          id: "f3",
          title: "Do you offer international shipping?",
          content: "Yes, we ship globally with various carrier options available at checkout.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/shining-white-paint-strokes_23-2147746807.jpg"
      imageAlt="Product texture closeup"
      mediaAnimation="slide-up"
      title="Frequently Asked"
      description="Have questions? We have answers to help you glow with confidence."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to elevate your beauty ritual? Let's stay in touch for exclusive offers and skincare tips."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@luminabeauty.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "Best Sellers",
              href: "#",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
            {
              label: "Support",
              href: "mailto:support@luminabeauty.com",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Lumina Beauty"
      bottomRightText="Crafted with care."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
