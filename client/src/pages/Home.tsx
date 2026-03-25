import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Youtube,
  Music,
  Heart,
  Share2,
  Facebook,
  Instagram,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

/**
 * Sarah Connors Universe CEE - Home Page
 * Design Philosophy: Modern, energetic, music-focused with vibrant magenta/pink branding
 * Typography: Playfair Display for headers (elegant), Poppins for body (modern)
 * Color Palette: Magenta/Pink primary, dark backgrounds, white text
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold text-primary">Sarah Connors Universe CEE</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#news" className="hover:text-primary transition">
              News
            </a>
            <a href="#channels" className="hover:text-primary transition">
              Kanäle
            </a>
            <a href="#community" className="hover:text-primary transition">
              Community
            </a>
            <Link href="/privacy" className="hover:text-primary transition">
              Datenschutz
            </Link>
            <Link href="/guidelines" className="hover:text-primary transition">
              Richtlinien
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663406122355/FQsvvdQjKa7x9CwBZKzFMf/hero-cee-banner_58ceb068.png"
            alt="Sarah Connors Universe CEE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Sarah Connors Universe CEE
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Die ultimative Fan-Community für Sarah Connor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.facebook.com/SarahConnorsUniverseCEE/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Jetzt folgen
              </Button>
            </a>
            <a href="https://www.youtube.com/@SarahConnorsUniverseCEE" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Mehr erfahren
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Willkommen in unserer Welt
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Hier dreht sich alles um Sarah Connor – ihre Musik, ihre News, ihre
              Auftritte und besondere Fan-Momente. Tauche ein in unsere Community,
              entdecke spannende Updates und erlebe die Welt einer der erfolgreichsten
              deutschen Pop-Künstlerinnen.
            </p>
            <div className="flex justify-center gap-4">
              <Heart className="w-6 h-6 text-primary" />
              <Music className="w-6 h-6 text-primary" />
              <Zap className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Channels */}
      <section id="channels" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Folge uns überall
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* YouTube */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">YouTube</h3>
                  <Youtube className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/70 mb-4">
                  5.770 Abonnenten • 114 Videos
                </p>
                <p className="text-sm text-foreground/60 mb-4">
                  Exklusive Interviews, Musikvideos und Live-Auftritte
                </p>
                <a href="https://www.youtube.com/@SarahConnorsUniverseCEE" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Besuchen
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* TikTok */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">TikTok</h3>
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/70 mb-4">
                  4.496 Follower • 47.600 Likes
                </p>
                <p className="text-sm text-foreground/60 mb-4">
                  Kurze Clips, Tour-Highlights und Behind-the-Scenes
                </p>
                <a href="https://www.tiktok.com/@s_c_u_cee" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Besuchen
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Instagram</h3>
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/70 mb-4">
                  786 Follower • 237 Beiträge
                </p>
                <p className="text-sm text-foreground/60 mb-4">
                  Tägliche News, Fotos und exklusive Einblicke
                </p>
                <a href="https://www.instagram.com/sarahconnoruniversecee/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Besuchen
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Facebook</h3>
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/70 mb-4">
                  6.000 Follower • Aktiv täglich
                </p>
                <p className="text-sm text-foreground/60 mb-4">
                  News, Updates und Community-Diskussionen
                </p>
                <a href="https://www.facebook.com/SarahConnorsUniverseCEE/reels/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Besuchen
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="news" className="py-16 md:py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Aktuelle Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Item 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
              <div className="h-48 bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center" style={{marginBottom: '-34px', width: '347px'}}>
                <Music className="w-16 h-16 text-white/50" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Neue Single: Interstellar</h3>
                <p className="text-foreground/70 mb-4">
                  Sarah Connors neuester Song ist jetzt überall verfügbar. Ein
                  emotionaler Track, der die Herzen der Fans berührt.
                </p>
                <a href="https://www.youtube.com/@SarahConnor" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    Mehr erfahren
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Featured Item 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
              <div className="h-48 bg-gradient-to-br from-primary/70 to-primary/30 flex items-center justify-center">
                <Zap className="w-16 h-16 text-white/50" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Tour 2026</h3>
                <p className="text-foreground/70 mb-4">
                  Sarah Connor geht 2026 auf große Tour! Sichern Sie sich jetzt
                  Ihre Tickets für ein unvergessliches Konzert-Erlebnis.
                </p>
                <a href="https://www.sarah-connor.com/tour" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    Tickets kaufen
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Unsere Community
          </h2>

          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Tritt unserer Gruppe bei
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Wir haben mehrere aktive Facebook-Gruppen für unsere Community. Wähle deine Lieblingsgruppe und werde Teil unserer lebendigen Community!
                  </p>
                </div>

                <div className="space-y-3">
                  <a href="https://www.facebook.com/groups/2098972467214306/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Gruppe 1 beitreten
                    </Button>
                  </a>
                  <a href="https://www.facebook.com/groups/1051696438193761/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Gruppe 2 beitreten
                    </Button>
                  </a>
                  <a href="https://www.facebook.com/groups/128098680725870/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Gruppe 3 beitreten
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Sarah Connors Universe CEE</h4>
              <p className="text-foreground/70 text-sm">
                Die ultimative Fan-Community für Sarah Connor. News, Updates und
                exklusive Inhalte.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kanäle</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="https://www.youtube.com/@SarahConnorsUniverseCEE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@s_c_u_cee" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sarahconnoruniversecee/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/SarahConnorsUniverseCEE/reels/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="/privacy" className="hover:text-primary transition">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="hover:text-primary transition">
                    Richtlinien
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>
              &copy; 2026 Sarah Connors Universe CEE. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
