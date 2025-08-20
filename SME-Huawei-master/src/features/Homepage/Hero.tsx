import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../ui/Button';

function Hero() {
  return (
    <section className="relative min-h-[85vh]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src="./hero-video.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-semibold text-secondary">
            Next-Gen Supply Chain Management
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Transform Your
            <span className="bg-gradient-to-r from-secondary to-blue-300 bg-clip-text text-transparent">
              {' '}
              Supply Chain{' '}
            </span>
            with AI
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Discover how our AI-powered solutions can revolutionize your supply
            chain management, optimize your inventory, and predict market demand
            like never before.
          </p>

          <div className="flex flex-col space-y-4 pt-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="group flex min-w-[160px] items-center justify-center space-x-2"
              >
                <span>Start Optimizing</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
