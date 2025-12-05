"use client"

import { useState, useEffect, useRef } from "react"
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Zap,
  Heart,
  ArrowRight,
  Star,
  Leaf,
  Droplets,
  Sun,
  Play,
  Instagram,
  ChevronDown,
  ArrowUpRight,
  Clock,
  Truck,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Apple Juice",
    price: 8.0,
    description: "Fuji Apple*, Ceylon Cinnamon*",
    ingredients: "Organic Fuji Apple, Ceylon Cinnamon",
    image: "https://peoplevine.blob.core.windows.net/media/426/product/52056/apple-juice.jpg",
    category: "Classics",
    tag: "Bestseller",
    rating: 4.9,
    reviews: 342,
    color: "from-amber-50 to-orange-100",
    benefits: ["Energy", "Immunity"],
    nutrition: "120 cal • 28g sugar • 0g fat",
  },
  {
    id: 2,
    name: "Anti Inflammatory",
    price: 7.0,
    description: "Pineapple, Turmeric, Ginger",
    ingredients: "Pineapple, Coconut Water Kefir, Turmeric, Lemon, Ginger",
    image: "https://peoplevine.blob.core.windows.net/media/426/product/52081/anti-inflammatory-s1.jpg",
    category: "Wellness",
    tag: "New",
    rating: 4.8,
    reviews: 128,
    color: "from-yellow-50 to-amber-100",
    benefits: ["Recovery", "Joints"],
    nutrition: "85 cal • 18g sugar • 0g fat",
  },
  {
    id: 3,
    name: "Celery Juice",
    price: 9.5,
    description: "Pure Celery, Fresh Lemon",
    ingredients: "Fresh-pressed Organic Celery, Lemon",
    image: "https://peoplevine.blob.core.windows.net/media/426/product/67451/celery-juice.jpg",
    category: "Detox",
    tag: "Popular",
    rating: 4.9,
    reviews: 567,
    color: "from-green-50 to-emerald-100",
    benefits: ["Detox", "Digestion"],
    nutrition: "45 cal • 8g sugar • 0g fat",
  },
  {
    id: 4,
    name: "Brain Boost",
    price: 12.0,
    description: "Blueberry, Hemp, Blue Algae",
    ingredients: "Blueberry, Banana, Hemp Seeds, Red Maca, Blue Green Algae",
    image: "https://peoplevine.blob.core.windows.net/media/426/product/brain-boost-JuiceRx.jpg",
    category: "Smoothie",
    tag: "Staff Pick",
    rating: 5.0,
    reviews: 234,
    color: "from-indigo-50 to-purple-100",
    benefits: ["Focus", "Memory"],
    nutrition: "210 cal • 32g sugar • 8g fat",
  },
  {
    id: 5,
    name: "Chocolate Almond",
    price: 12.0,
    description: "Sprouted Almonds, Raw Cacao",
    ingredients: "Sprouted Almonds, Coconut Meat, Cacao Powder, Medjool Dates",
    image: "https://peoplevine.blob.core.windows.net/media/426/product/chocolate-almond-milk-juicerx.jpg",
    category: "Nut Milk",
    tag: null,
    rating: 4.7,
    reviews: 189,
    color: "from-amber-100 to-orange-200",
    benefits: ["Protein", "Indulgent"],
    nutrition: "280 cal • 12g sugar • 18g fat",
  },
  {
    id: 6,
    name: "Carrot Glow",
    price: 9.0,
    description: "Pure Carrot, Beta Carotene",
    ingredients: "Cold-pressed organic carrots",
    image: "https://peoplevine.blob.core.windows.net/media/426/commerce/426/product/images/carrot-juice.jpg",
    category: "Glow",
    tag: null,
    rating: 4.8,
    reviews: 156,
    color: "from-orange-50 to-red-100",
    benefits: ["Skin", "Vision"],
    nutrition: "95 cal • 18g sugar • 0g fat",
  },
]

const cleanses = [
  {
    name: "Beginner Reset",
    days: 1,
    juices: 6,
    price: 65,
    description: "Perfect introduction to cleansing",
    color: "bg-accent/20",
  },
  {
    name: "Deep Cleanse",
    days: 3,
    juices: 18,
    price: 185,
    description: "Full system reset and renewal",
    color: "bg-primary/20",
  },
  {
    name: "Ultimate Detox",
    days: 5,
    juices: 30,
    price: 295,
    description: "Transformative wellness journey",
    color: "bg-secondary/20",
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    location: "Lincoln Park, Chicago",
    text: "The celery juice has completely transformed my mornings. I've never felt more energized and my skin has never looked better!",
    rating: 5,
    image: "/smiling-woman-portrait.png",
    product: "Celery Juice",
  },
  {
    name: "James K.",
    location: "Wicker Park, Chicago",
    text: "Best juice cleanse I've ever done. The flavors are incredible and I lost 8 lbs in 5 days while feeling amazing.",
    rating: 5,
    image: "/man-portrait-happy.jpg",
    product: "5-Day Cleanse",
  },
  {
    name: "Emma L.",
    location: "River North, Chicago",
    text: "Finally found a juice brand that tastes as good as it makes you feel. The Brain Boost is my daily must-have!",
    rating: 5,
    image: "/young-woman-portrait.png",
    product: "Brain Boost",
  },
]

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      itemScope
      itemType="https://schema.org/Product"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div
          className={`relative aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br ${product.color} transition-all duration-700 ${isHovered ? "shadow-2xl shadow-primary/20" : "shadow-lg"}`}
        >
          {/* Image */}
          <img
            src={product.image || "/placeholder.svg"}
            alt={`${product.name} - organic cold-pressed juice by JuiceRx Chicago`}
            className={`h-full w-full object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            itemProp="image"
            loading={index < 3 ? "eager" : "lazy"}
          />

          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />

          {/* Tag */}
          {product.tag && (
            <Badge className="absolute left-4 top-4 bg-background/90 text-foreground backdrop-blur-sm border-0 font-sans text-xs font-semibold tracking-wide rounded-full px-3 py-1.5 shadow-lg">
              {product.tag}
            </Badge>
          )}

          {/* Quick info on hover */}
          <div
            className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <p className="text-white/80 text-sm font-sans mb-3">{product.nutrition}</p>
            <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-full font-sans font-semibold shadow-xl">
              Add to Cart — ${product.price.toFixed(2)}
            </Button>
          </div>

          {/* Category pill */}
          <div className="absolute right-4 top-4">
            <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-sans font-medium text-foreground shadow-lg">
              {product.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2">
          {product.benefits.map((benefit) => (
            <span
              key={benefit}
              className="text-[10px] font-sans font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full"
            >
              {benefit}
            </span>
          ))}
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="text-xl font-serif font-semibold text-foreground editorial-hover inline-block"
              itemProp="name"
            >
              {product.name}
            </h3>
            <p className="text-sm font-sans text-muted-foreground mt-1" itemProp="description">
              {product.description}
            </p>
          </div>
          <p className="text-2xl font-serif font-bold text-foreground whitespace-nowrap" itemProp="price">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "fill-muted text-muted"}`}
              />
            ))}
          </div>
          <span className="text-sm font-sans text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <meta itemProp="priceCurrency" content="USD" />
      </div>
    </article>
  )
}

export default function JuiceRxHomepage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(2)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-12 text-sm font-sans font-medium flex items-center gap-8">
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4" /> Free delivery $75+
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Made fresh daily
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" /> 100% organic certified
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Subscribe & save 15%
              </span>
            </span>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"}`}
      >
        <nav className="container mx-auto px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            <button
              className="lg:hidden text-foreground p-2 -ml-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="hidden lg:flex items-center gap-10">
              {[
                { label: "Shop", href: "/shop" },
                { label: "Cleanses", href: "/cleanses" },
                { label: "Our Story", href: "/about" },
                { label: "Locations", href: "/locations" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-sans font-medium text-foreground/80 hover:text-primary transition-colors editorial-hover py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2" aria-label="JuiceRx Home">
              <h1 className="text-3xl font-serif font-bold tracking-tight">
                <span className="text-foreground">Juice</span>
                <span className="text-secondary">Rx</span>
              </h1>
            </Link>

            <div className="flex items-center gap-5">
              <button
                className="hidden sm:flex text-foreground/70 hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/checkout"
                className="relative text-foreground/70 hover:text-primary transition-colors"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-sans font-bold text-secondary-foreground">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Button className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-9 text-sm font-sans font-medium">
                Order Now
              </Button>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-6 py-8 space-y-6" aria-label="Mobile navigation">
              {["Shop All", "Cleanses", "Our Story", "Locations", "Gift Cards"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-2xl font-serif font-medium text-foreground"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <section
          ref={heroRef}
          className="relative min-h-[95vh] flex items-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-20 right-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-sans font-semibold">New: Winter Immunity Collection</span>
                </div>

                <h2
                  id="hero-heading"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] text-foreground"
                >
                  <span className="block animate-slide-up">Drink your</span>
                  <span className="block text-primary animate-slide-up animation-delay-200">greens.</span>
                  <span className="block animate-slide-up animation-delay-400">Feel</span>
                  <span className="block text-secondary italic animate-slide-up animation-delay-600">alive.</span>
                </h2>

                <p className="text-xl font-sans text-muted-foreground leading-relaxed max-w-lg animate-slide-up animation-delay-600">
                  Cold-pressed, organic, obsessively fresh. Each bottle is crafted with love to nourish your body and
                  elevate your day.
                </p>

                <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-600">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-sans font-semibold rounded-full shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] group">
                    Shop Bestsellers
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base font-sans font-semibold rounded-full bg-transparent transition-all"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Our Story
                  </Button>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-8 pt-6 border-t border-border/50 animate-slide-up animation-delay-600">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <img
                        key={i}
                        src={`/happy-customer.png?height=48&width=48&query=happy healthy customer ${i}`}
                        alt=""
                        className="w-12 h-12 rounded-full border-2 border-background object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                      <span className="ml-2 text-sm font-sans font-bold">4.9</span>
                    </div>
                    <p className="text-sm font-sans text-muted-foreground">
                      from <strong className="text-foreground">2,847+</strong> happy customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero image */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl animate-blob" />
                  <img
                    src="/organic-green-juice-bottles-with-fresh-vegetables-.jpg"
                    alt="Collection of organic cold-pressed juices including green juice, carrot juice, and beet juice with fresh vegetables"
                    className="relative z-10 w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl animate-scale-in"
                  />

                  {/* Floating badges */}
                  <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-5 shadow-xl z-20 animate-float">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                        <Leaf className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <p className="text-3xl font-serif font-bold text-foreground">100%</p>
                        <p className="text-sm font-sans text-muted-foreground">Organic</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-background rounded-2xl p-5 shadow-xl z-20 animate-float animation-delay-2000">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center">
                        <Zap className="h-7 w-7 text-secondary" />
                      </div>
                      <div>
                        <p className="text-3xl font-serif font-bold text-foreground">Fresh</p>
                        <p className="text-sm font-sans text-muted-foreground">Made Daily</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
              <span className="text-xs font-sans uppercase tracking-widest">Scroll</span>
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-border/50" aria-label="Product categories">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Cold-Pressed", icon: Droplets, active: true },
                { name: "Smoothies", icon: Sparkles, active: false },
                { name: "Cleanses", icon: Leaf, active: false },
                { name: "Nut Milks", icon: Heart, active: false },
                { name: "Wellness Shots", icon: Zap, active: false },
                { name: "Snacks", icon: Sun, active: false },
              ].map((category) => (
                <button
                  key={category.name}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans font-medium text-sm transition-all ${
                    category.active
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-background border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" aria-labelledby="products-heading">
          <div className="container mx-auto px-6">
            <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-sm font-sans font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
                  Crafted with care
                </p>
                <h2
                  id="products-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance"
                >
                  Our Bestsellers
                </h2>
              </div>
              <p className="text-lg font-sans text-muted-foreground max-w-md leading-relaxed">
                Every bottle is packed with nutrients from fresh, organic produce. No added sugars, no
                preservatives—just pure plant power.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link href="/shop">
                <Button
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-10 py-6 font-sans font-semibold text-base bg-transparent transition-all group"
                >
                  View All Products
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Leaf className="h-12 w-12 mx-auto mb-8 opacity-60" />
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-snug mb-8">
                "We believe that what you put in your body matters. Every juice we make is a step toward a healthier,
                more vibrant you."
              </blockquote>
              <cite className="text-lg font-sans not-italic opacity-80">— The JuiceRx Team, Chicago</cite>
            </div>
          </div>
        </section>

        <section className="py-24" aria-labelledby="cleanses-heading">
          <div className="container mx-auto px-6">
            <header className="text-center mb-16">
              <p className="text-sm font-sans font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
                Reset & Renew
              </p>
              <h2
                id="cleanses-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground"
              >
                Juice Cleanses
              </h2>
              <p className="mt-6 text-lg font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Give your body the reset it deserves. Our curated cleanse programs are designed to detoxify, energize,
                and rejuvenate from the inside out.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {cleanses.map((cleanse, index) => (
                <article
                  key={cleanse.name}
                  className={`relative bg-card rounded-3xl p-8 transition-all hover:shadow-xl border ${index === 1 ? "border-primary shadow-lg md:-translate-y-4" : "border-border hover:border-primary/50"}`}
                >
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-4 py-1 font-sans text-xs font-semibold">
                      Most Popular
                    </Badge>
                  )}
                  <div className="text-center space-y-5">
                    <div className={`w-20 h-20 ${cleanse.color} rounded-2xl flex items-center justify-center mx-auto`}>
                      <span className="text-3xl font-serif font-bold text-foreground">{cleanse.days}</span>
                    </div>
                    <p className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground">
                      Day{cleanse.days > 1 ? "s" : ""} • {cleanse.juices} Juices
                    </p>
                    <h3 className="text-2xl font-serif font-semibold text-foreground">{cleanse.name}</h3>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">{cleanse.description}</p>
                    <p className="text-3xl font-serif font-bold text-foreground pt-2">${cleanse.price}</p>
                    <Button
                      className={`w-full mt-4 rounded-full font-sans font-semibold ${index === 1 ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"}`}
                    >
                      Start Cleanse
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-6">
            <header className="text-center mb-16">
              <p className="text-sm font-sans font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
                Real People, Real Results
              </p>
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                What Our Community Says
              </h2>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-border transition-all"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-sans text-foreground leading-relaxed mb-8">
                    "{testimonial.text}"
                  </blockquote>
                  <footer className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <cite className="font-sans font-semibold text-foreground not-italic block">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm font-sans text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs font-sans text-secondary mt-1">Loves: {testimonial.product}</p>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-6">
            <h2 id="benefits-heading" className="sr-only">
              Why Choose JuiceRx
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { icon: Leaf, title: "100% Organic", desc: "USDA certified organic ingredients from local farms" },
                { icon: Droplets, title: "Cold-Pressed", desc: "Hydraulic press preserves 5x more nutrients" },
                { icon: Clock, title: "Made Fresh", desc: "Crafted daily in small batches" },
                { icon: Heart, title: "Plant-Powered", desc: "100% vegan, no additives or preservatives" },
              ].map((benefit) => (
                <article key={benefit.title} className="text-center group">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                    <benefit.icon className="h-9 w-9 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-24 bg-secondary text-secondary-foreground" aria-labelledby="instagram-heading">
          <div className="container mx-auto px-6 text-center">
            <Instagram className="h-10 w-10 mx-auto mb-6 opacity-70" />
            <h2 id="instagram-heading" className="text-3xl md:text-4xl font-serif font-bold mb-3">
              @JuiceRx
            </h2>
            <p className="text-lg font-sans opacity-80 mb-10">Follow us for daily wellness inspiration</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`/organic-juice-lifestyle-photo-.jpg?height=280&width=280&query=organic juice lifestyle ${i}`}
                  alt={`JuiceRx Instagram post ${i}`}
                  className="rounded-2xl aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24" aria-labelledby="newsletter-heading">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-secondary" />
              </div>
              <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Join the Wellness Club
              </h2>
              <p className="text-lg font-sans text-muted-foreground mb-10 leading-relaxed">
                Get 15% off your first order, plus exclusive recipes, wellness tips, and early access to new products.
              </p>
              <form className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter signup">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background border-2 border-border rounded-full px-6 py-6 font-sans text-base focus:border-primary focus:ring-primary"
                  aria-label="Email address"
                  required
                />
                <Button
                  type="submit"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-10 py-6 font-sans font-semibold text-base shadow-lg shadow-secondary/20"
                >
                  Get 15% Off
                </Button>
              </form>
              <p className="text-sm font-sans text-muted-foreground mt-6">
                No spam, unsubscribe anytime. Read our{" "}
                <Link href="/privacy" className="underline hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 bg-foreground text-background" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            <div className="col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-serif font-bold">
                  <span className="text-background">Juice</span>
                  <span className="text-secondary">Rx</span>
                </span>
              </Link>
              <p className="font-sans text-background/70 leading-relaxed max-w-sm mb-6">
                Premium cold-pressed organic juices crafted for your wellness journey. Every bottle is a commitment to
                your health.
              </p>
              <p className="font-sans text-sm text-background/50">Made with love in Chicago</p>
            </div>
            <nav aria-label="Shop links">
              <h3 className="font-sans font-semibold uppercase tracking-widest text-xs mb-6 text-background/50">
                Shop
              </h3>
              <ul className="space-y-3">
                {["All Products", "Cleanses", "Subscriptions", "Gift Cards"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="font-sans text-background/80 hover:text-secondary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company links">
              <h3 className="font-sans font-semibold uppercase tracking-widest text-xs mb-6 text-background/50">
                Company
              </h3>
              <ul className="space-y-3">
                {["Our Story", "Locations", "Wholesale", "Careers"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="font-sans text-background/80 hover:text-secondary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Support links">
              <h3 className="font-sans font-semibold uppercase tracking-widest text-xs mb-6 text-background/50">
                Support
              </h3>
              <ul className="space-y-3">
                {["FAQ", "Shipping", "Returns", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="font-sans text-background/80 hover:text-secondary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-sm text-background/50">© 2025 JuiceRx. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {["Instagram", "Facebook", "TikTok", "YouTube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com/juicerx`}
                  className="text-background/50 hover:text-secondary transition-colors text-sm font-sans"
                >
                  {social}
                </a>
              ))}
            </div>
            <nav className="flex gap-6" aria-label="Legal links">
              {["Privacy", "Terms", "Accessibility"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-sans text-sm text-background/50 hover:text-secondary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
