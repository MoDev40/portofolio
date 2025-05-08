import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FloatingParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-primary/20 rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 2, 1],
      opacity: [0.5, 1, 0],
      y: [-20, -40],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const GradientWord = ({ word }: { word: string }) => (
  <motion.span
    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {word}
  </motion.span>
);

const HomeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const words = ["MUKTAR", "AHMED"];
  const roles = ["Full Stack Developer", "MERN Specialist"];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 8 }).map((_, i) => (
    <FloatingParticle key={i} delay={i * 0.2} />
  ));

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/50"
      style={{ y, opacity }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Animated particles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl mx-auto">
          {particles}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center space-y-8">
          <motion.div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold space-x-4">
              {words.map((word, i) => (
                <GradientWord key={word} word={word} />
              ))}
            </h1>
            <motion.div
              className="h-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground"
                animate={{ y: -currentRole * 32 }}
                transition={{ duration: 0.5 }}
              >
                {roles.map((role) => (
                  <span key={role} className="h-8 block">
                    {role}
                  </span>
                ))}
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg relative"
          >
            <span className="relative">
              Crafting innovative web solutions with modern technologies.
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              asChild
            >
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 2000,
                    behavior: "smooth",
                  });
                }}
              >
                View Projects
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                  animate={{
                    x: ["0%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden"
              asChild
            >
              <Link href="mailto:modev.404@gmail.com">
                Contact Me
                <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/MoDev40" },
              { icon: Linkedin, href: "https://linkedin.com/in/Mukhtar Ahmed" },
            ].map(({ icon: Icon, href }, i) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <motion.span
                  className="absolute -inset-2 bg-primary/10 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
