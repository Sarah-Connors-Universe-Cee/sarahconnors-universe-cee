import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Community Guidelines - Sarah Connors Universe CEE
 * Richtlinien mit Deutsch und Englisch
 */

export default function Guidelines() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:text-primary transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück</span>
          </Link>
          <h1 className="text-xl font-bold text-primary">Richtlinien</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Community Rules</h1>
          <p className="text-lg text-foreground/70 mb-8">Sarah Connors Universe CEE</p>

          {/* Rule 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Respektvoller Umgang / Respectful Conduct</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Behandle andere so, wie du selbst behandelt werden möchtest. Kein Hass, keine Beleidigungen oder Diskriminierung.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Treat others as you would like to be treated. No hate, insults, or discrimination.
                </p>
              </div>
            </div>
          </section>

          {/* Rule 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Keine Hetze oder Gewalt / No Hate or Violence</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Kommentare oder Inhalte, die zu Gewalt, Hass oder Diskriminierung aufrufen, werden entfernt. Wiederholte Verstöße können zur Sperrung führen.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Comments or content that incite violence, hate, or discrimination will be removed. Repeated violations may result in a ban.
                </p>
              </div>
            </div>
          </section>

          {/* Rule 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Kein Spam oder Werbung / No Spam or Advertising</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Bitte poste keine Eigenwerbung, Links oder Inhalte, die nichts mit dem Kanalthema zu tun haben.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Please do not post self-promotion, links, or content unrelated to the channel topic.
                </p>
              </div>
            </div>
          </section>

          {/* Rule 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Urheberrechte beachten / Respect Copyright</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Verwende keine geschützten Inhalte ohne Genehmigung. Zitate sollten immer korrekt mit Quelle angegeben werden.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Do not use copyrighted materials without permission. Always cite sources when quoting.
                </p>
              </div>
            </div>
          </section>

          {/* Rule 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Konstruktive Kritik / Constructive Feedback</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Konstruktive Kritik ist willkommen, persönliche Angriffe nicht.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Constructive feedback is welcome; personal attacks are not.
                </p>
              </div>
            </div>
          </section>

          {/* Rule 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Privatsphaere respektieren / Respect Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Veröffentliche keine persönlichen Daten von dir oder anderen in Kommentaren oder Beiträgen.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Do not post personal information about yourself or others in comments or posts.
                </p>
              </div>
            </div>
          </section>

          {/* Rule 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Moderation / Moderation</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Deutsch:</h3>
                <p className="text-foreground/80">
                  Beiträge können gelöscht und Nutzer:innen gesperrt werden, wenn gegen diese Richtlinien verstoßen wird.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">English:</h3>
                <p className="text-foreground/80">
                  Posts may be removed, and users may be blocked if these guidelines are violated.
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
