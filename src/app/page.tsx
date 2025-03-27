"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col align-middle">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-around py-4 mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/28RidersWhite.png" alt="28Riders Logo" width={110} height={40} />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              Nosotros
            </Link>
            <Link href="#courses" className="text-sm font-medium transition-colors hover:text-primary">
              Cursos
            </Link>
            <Link href="#instructors" className="text-sm font-medium transition-colors hover:text-primary">
              Instructores
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonios
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button className="hidden md:flex bg-[#e32929] hover:bg-[#c41f1f] text-white">Inscríbete Ahora</Button>
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
              <div className="flex flex-col h-full">
                <div className="py-6">
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="#about"
                      className="text-lg font-medium py-2 border-b border-gray-100 transition-colors hover:text-primary"
                    >
                      Nosotros
                    </Link>
                    <Link
                      href="#courses"
                      className="text-lg font-medium py-2 border-b border-gray-100 transition-colors hover:text-primary"
                    >
                      Cursos
                    </Link>
                    <Link
                      href="#instructors"
                      className="text-lg font-medium py-2 border-b border-gray-100 transition-colors hover:text-primary"
                    >
                      Instructores
                    </Link>
                    <Link
                      href="#testimonials"
                      className="text-lg font-medium py-2 border-b border-gray-100 transition-colors hover:text-primary"
                    >
                      Testimonios
                    </Link>
                    <Link
                      href="#contact"
                      className="text-lg font-medium py-2 border-b border-gray-100 transition-colors hover:text-primary"
                    >
                      Contacto
                    </Link>
                  </nav>
                </div>
                <div className="mt-auto pb-8">
                  <Button className="w-full bg-[#e32929] hover:bg-[#c41f1f] text-white">Inscríbete Ahora</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div
            className="h-[80vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          ></div>
          <div className="container  absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white mx-auto">
            <Image src="/28RidersWhite.png" alt="28Riders Logo" width={300} height={150} className="h-auto w-auto mb-8" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Academia de Motociclismo
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              Formamos pilotos seguros y competentes con los más altos estándares de calidad
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#e32929] hover:bg-[#c41f1f] text-white">
                Inscríbete Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/80">
                Conoce Nuestros Cursos
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 md:px-0 md:py-24 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a1a1a]">
                  Sobre 28Riders
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Somos una academia de motociclismo comprometida con la formación de pilotos seguros y competentes.
                  Fundada en Colombia, 28Riders se ha convertido en referente de excelencia en la enseñanza de técnicas
                  de conducción para motociclistas de todos los niveles.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Nuestro equipo de instructores certificados combina años de experiencia en pista y calle para
                  ofrecerte una formación integral que mejorará tus habilidades y confianza al manillar.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#e32929] hover:bg-[#c41f1f] text-white">
                    Nuestra Historia <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/about-image.jpg" alt="Instructor de 28Riders enseñando" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-0 md:py-24 bg-[#f5f5f5]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a1a1a]">
                ¿Por qué elegirnos?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
                En 28Riders nos distinguimos por ofrecer una experiencia de aprendizaje única y efectiva
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[#e32929]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e32929"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m7 10 2 2 6-6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Instructores Certificados</h3>
                <p className="text-muted-foreground">
                  Nuestro equipo cuenta con certificaciones nacionales e internacionales y amplia experiencia en
                  competición.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[#e32929]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e32929"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Metodología Probada</h3>
                <p className="text-muted-foreground">
                  Combinamos teoría y práctica con técnicas pedagógicas que garantizan un aprendizaje efectivo y seguro.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-[#e32929]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e32929"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" x2="4" y1="22" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Instalaciones Especializadas</h3>
                <p className="text-muted-foreground">
                  Contamos con circuitos y áreas de práctica diseñadas específicamente para el aprendizaje progresivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 px-4 md:px-0 md:py-24 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a1a1a]">
                Nuestros Cursos
              </h2>
              <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
                Ofrecemos programas para todos los niveles, desde principiantes hasta pilotos avanzados
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <Image
                  src="/course-beginner.jpg"
                  alt="Curso para principiantes"
                  width={400}
                  height={300}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Curso Principiantes</h3>
                  <p className="text-white/80 mb-4">
                    Aprende las bases de la conducción segura y técnicas fundamentales.
                  </p>
                  <Button variant="outline" className="border-white text-black hover:bg-white/80 w-full">
                    Ver Detalles
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <Image
                  src="/course-intermediate.jpg"
                  alt="Curso intermedio"
                  width={400}
                  height={300}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Curso Intermedio</h3>
                  <p className="text-white/80 mb-4">Perfecciona tu técnica y aprende maniobras avanzadas de control.</p>
                  <Button variant="outline" className="border-white text-black hover:bg-white/20 w-full">
                    Ver Detalles
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <Image
                  src="/course-advanced.jpg"
                  alt="Curso avanzado"
                  width={400}
                  height={300}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Curso Avanzado</h3>
                  <p className="text-white/80 mb-4">Domina técnicas de pilotaje profesional y conducción deportiva.</p>
                  <Button variant="outline" className="border-white text-black hover:bg-white/20 w-full">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-[#e32929] hover:bg-[#c41f1f] text-white">Ver Todos los Cursos</Button>
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section id="instructors" className="py-16 px-4 md:px-0 md:py-24 bg-[#f5f5f5]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a1a1a]">
                Nuestros Instructores
              </h2>
              <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
                Conoce al equipo de profesionales que te guiará en tu aprendizaje
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-[250px] relative">
                  <Image src="/instructor-1.jpg" alt="Instructor" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Carlos Rodríguez</h3>
                  <p className="text-[#e32929] font-medium mb-3">Instructor Principal</p>
                  <p className="text-muted-foreground text-sm">
                    Ex campeón nacional con más de 15 años de experiencia en competición.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-[250px] relative">
                  <Image src="/instructor-2.jpg" alt="Instructor" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Laura Martínez</h3>
                  <p className="text-[#e32929] font-medium mb-3">Instructora Técnica</p>
                  <p className="text-muted-foreground text-sm">
                    Especialista en técnicas de conducción segura y maniobras de emergencia.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-[250px] relative">
                  <Image src="/instructor-3.jpg" alt="Instructor" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Andrés Gómez</h3>
                  <p className="text-[#e32929] font-medium mb-3">Instructor de Pista</p>
                  <p className="text-muted-foreground text-sm">
                    Piloto profesional con experiencia internacional en competiciones.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-[250px] relative">
                  <Image src="/instructor-4.jpg" alt="Instructor" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Diana Vargas</h3>
                  <p className="text-[#e32929] font-medium mb-3">Instructora Teórica</p>
                  <p className="text-muted-foreground text-sm">
                    Especialista en normativa vial y seguridad en conducción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-4 md:px-0 md:py-24 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a1a1a]">
                Lo que dicen nuestros estudiantes
              </h2>
              <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
                Experiencias de quienes ya han pasado por nuestra academia
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#f5f5f5] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6">
                &quot;La mejor decisión que tomé fue inscribirme en 28Riders. Los instructores son excelentes y la
                  metodología de enseñanza es muy efectiva. Ahora me siento mucho más seguro al conducir mi moto.&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Miguel Ángel</h4>
                    <p className="text-sm text-muted-foreground">Curso Intermedio</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6">
                &quot;Increíble experiencia. Aprendí técnicas que nunca imaginé y los instructores tienen una paciencia
                  infinita. Recomiendo 100% esta academia para cualquier nivel de experiencia.&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Carolina Pérez</h4>
                    <p className="text-sm text-muted-foreground">Curso Principiantes</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#e32929"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6">
                  &quot;Como piloto avanzado, buscaba perfeccionar mi técnica y 28Riders superó mis expectativas. El nivel de
                  detalle en la enseñanza y las instalaciones son de primer nivel.&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Javier Morales</h4>
                    <p className="text-sm text-muted-foreground">Curso Avanzado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-0 md:py-24 bg-[#1a1a1a] text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para convertirte en un mejor piloto?
                </h2>
                <p className="mt-4 text-white/80 max-w-[600px]">
                  Inscríbete ahora en nuestros cursos y comienza tu camino hacia una conducción más segura y técnica.
                  Plazas limitadas para garantizar atención personalizada.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#e32929] hover:bg-[#c41f1f] text-white">
                    Inscríbete Ahora
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/80">
                    Solicitar Información
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/cta-image.jpg" alt="Motociclista en pista" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 md:px-0 md:py-24 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a1a1a]">
                  Contáctanos
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Estamos aquí para responder todas tus preguntas. Completa el formulario o utiliza nuestros datos de
                  contacto.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#e32929] mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-muted-foreground">Av. Circunvalar #28-45, Bogotá, Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#e32929] mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-muted-foreground">+57 (1) 234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#e32929] mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@28riders.co</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#e32929] mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Horario</h3>
                      <p className="text-muted-foreground">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#e32929]/10 flex items-center justify-center text-[#e32929] hover:bg-[#e32929] hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#e32929]/10 flex items-center justify-center text-[#e32929] hover:bg-[#e32929] hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-[#e32929]/10 flex items-center justify-center text-[#e32929] hover:bg-[#e32929] hover:text-white transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-8 rounded-xl">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="course" className="text-sm font-medium">
                      Curso de interés
                    </label>
                    <select
                      id="course"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecciona un curso</option>
                      <option value="beginner">Curso Principiantes</option>
                      <option value="intermediate">Curso Intermedio</option>
                      <option value="advanced">Curso Avanzado</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px]"
                      placeholder="Tu mensaje"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#e32929] hover:bg-[#c41f1f] text-white">Enviar Mensaje</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] px-4 md:px-0 text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/28RidersWhite.png" alt="28Riders Logo" width={150} height={60} className="h-auto w-auto mb-4" />
              <p className="text-white/70 mt-4">
                Academia de motociclismo comprometida con la formación de pilotos seguros y competentes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-white/70 hover:text-white transition-colors">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="#instructors" className="text-white/70 hover:text-white transition-colors">
                    Instructores
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Cursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    Curso Principiantes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    Curso Intermedio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    Curso Avanzado
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    Clases Privadas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Boletín</h3>
              <p className="text-white/70 mb-4">Suscríbete para recibir noticias y ofertas especiales.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button className="rounded-l-none bg-[#e32929] hover:bg-[#c41f1f]">Enviar</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>© {new Date().getFullYear()} 28Riders. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

