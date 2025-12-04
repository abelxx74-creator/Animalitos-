"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Heart, Sparkles, Package } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const products = [
    {
      name: "Ranitas Donas",
      emoji: "🐸",
      description: "Deliciosas donas con forma de ranita",
      color: "from-green-200 to-green-300",
    },
    {
      name: "Ositos Cookies",
      emoji: "🐻",
      description: "Galletas crujientes en forma de osito",
      color: "from-amber-200 to-amber-300",
    },
    {
      name: "Tortuguitas",
      emoji: "🐢",
      description: "Alfajores de maicena súper tiernos",
      color: "from-emerald-200 to-emerald-300",
    },
    {
      name: "Cabritas",
      emoji: "🐐",
      description: "Medialunas esponjosas y deliciosas",
      color: "from-yellow-200 to-yellow-300",
    },
    {
      name: "Pinguinitos",
      emoji: "🐧",
      description: "Brownies intensos de chocolate",
      color: "from-cyan-200 to-cyan-300",
    },
  ]

  const pricing = [
    { name: "1 Animalito", quantity: "1 unidad", price: "$800" },
    { name: "Parejita", quantity: "2 animalitos", price: "$1.500", badge: "Ahorrás $100" },
    { name: "Manada", quantity: "3 animalitos", price: "$2.200", badge: "Ahorrás $200" },
    { name: "Minizoo", quantity: "5 animalitos", price: "$3.500", badge: "Ahorrás $500" },
    { name: "Reserva", quantity: "8 animalitos", price: "$5.800", badge: "Ahorrás $600" },
    { name: "Safari", quantity: "12 animalitos", price: "$8.400", badge: "Ahorrás $1.200", popular: true },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐾</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Animalitos
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Inicio
              </a>
              <a href="#catalogo" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Catálogo
              </a>
              <a href="#precios" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Precios
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Contacto
              </a>
            </div>
            <Link href="https://wa.me/5493543304470" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <MessageCircle className="mr-2 h-4 w-4" />
                Pedir Ya
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Postres Artesanales
              <br />
              con Forma de Animales
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubrí nuestros adorables postres hechos con amor. Cada animalito es único y está listo para endulzar tu
              día 🌸
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://wa.me/5493543304470" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full text-lg px-8 py-6 shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-110"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Hacer un Pedido
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 py-6 border-2 border-pink-300 hover:bg-pink-50 transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Ver Catálogo
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {["🐸", "🐻", "🐢", "🐐", "🐧"].map((emoji, i) => (
              <div
                key={i}
                className="text-7xl animate-bounce-slow hover:scale-125 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalogo" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Nuestros Animalitos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada uno hecho con ingredientes de primera calidad y mucho cariño
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-white rounded-3xl"
              >
                <CardContent className="p-0">
                  <div
                    className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 transition-all duration-500"></div>
                    <span className="text-9xl group-hover:scale-125 transition-transform duration-500 relative z-10">
                      {product.emoji}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Precios y Combos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elegí la cantidad perfecta para vos o para compartir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl ${
                  plan.popular ? "border-pink-400 shadow-2xl shadow-pink-200" : "border-pink-200 hover:border-pink-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 text-sm font-bold rounded-bl-2xl">
                    MÁS ELEGIDO
                  </div>
                )}
                <CardContent className="p-8 text-center bg-white">
                  <div className="mb-4">
                    <Package className={`h-12 w-12 mx-auto ${plan.popular ? "text-pink-500" : "text-purple-400"}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                  <p className="text-gray-500 mb-4">{plan.quantity}</p>
                  <div className="text-4xl font-bold text-pink-500 mb-4">{plan.price}</div>
                  {plan.badge && (
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {plan.badge}
                    </div>
                  )}
                  <Link
                    href={`https://wa.me/5493543304470?text=Hola! Me gustaría pedir: ${plan.name} (${plan.quantity})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      className={`w-full rounded-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                          : "bg-pink-400 hover:bg-pink-500"
                      } text-white shadow-lg transition-all duration-300`}
                    >
                      Pedir Ahora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">💌</div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                ¡Hacé tu Pedido!
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Contactanos por WhatsApp y preparamos tus animalitos con todo el amor
              </p>
              <Link href="https://wa.me/5493543304470" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl px-12 py-7 rounded-full shadow-2xl hover:shadow-green-300 transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp: 3543 304470
                </Button>
              </Link>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-400" />
                  <span>Hecho con amor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  <span>Ingredientes premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-pink-400" />
                  <span>Entrega coordinada</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🐾</span>
            <span className="text-3xl font-bold">Animalitos</span>
          </div>
          <p className="text-pink-100 mb-6 text-lg">Postres artesanales con forma de animales</p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#inicio" className="hover:text-pink-200 transition-colors">
              Inicio
            </a>
            <a href="#catalogo" className="hover:text-pink-200 transition-colors">
              Catálogo
            </a>
            <a href="#precios" className="hover:text-pink-200 transition-colors">
              Precios
            </a>
            <a href="#contacto" className="hover:text-pink-200 transition-colors">
              Contacto
            </a>
          </div>
          <p className="text-pink-200 text-sm">© 2025 Animalitos. Todos los derechos reservados. Hecho con 💖</p>
        </div>
      </footer>
    </main>
  )
}
