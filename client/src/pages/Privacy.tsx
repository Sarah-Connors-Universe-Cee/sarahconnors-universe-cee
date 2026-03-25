import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Privacy Policy - Sarah Connors Universe CEE
 * Datenschutzerklärung mit Deutsch und Englisch
 */

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:text-primary transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück</span>
          </Link>
          <h1 className="text-xl font-bold text-primary">Datenschutz</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>
          <p className="text-lg text-foreground/70 mb-8">Sarah Connors Universe CEE</p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Datenschutz / Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Wir respektieren deine Privatsphaere und behandeln deine Daten vertraulich. Es werden keine personenbezogenen Daten ohne Einwilligung weitergegeben.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  We respect your privacy and handle your data confidentially. No personal data is shared without consent.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Cookies & Tracking</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Unsere Webseite verwendet Cookies, um die Nutzererfahrung zu verbessern. Tracking erfolgt anonym und nur mit Einwilligung.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Our website uses cookies to improve user experience. Tracking is anonymous and only with consent.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Verantwortlich / Data Controller</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Verantwortlich im Sinne der DSGVO ist die Betreiber des Kanals Sarah Connors Universe CEE. Kontakt über offizielle Kanäle wie Nachrichten.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  The data controller under GDPR is the operator of Sarah Connors Universe CEE. Contact is possible only via official channels such as messages.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Erhobene Daten / Data Collected</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Es werden nur Daten erhoben, die entsprechenden Plattformen bereitstellt, wie Nutzername, Profilbild und Kommentare.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Only data provided by the respective platforms, such as username, profile picture and comments, is collected.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Nutzung der Plattformen / Use of Platform Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Verarbeitung gemäss Datenschutzbestimmungen auf den entsprechenden Plattformen: YouTube Privacy Policy
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Processing in accordance with data protection regulations on the respective platforms: YouTube Privacy Policy
                </p>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="mt-16">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
