function VideoQuote() {
  return (
    <section className="bg-9bbec8 py-16" id="about">
      <div className="container mx-auto flex max-w-[100rem] flex-col items-center px-4 md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <iframe
            className="w-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/k59VG4Vmfuk?si=_wAy52ilU9QytY6J&autoplay=1&mute=1"
            title="Overview of LogiSmart"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="560"
            height="315"
          ></iframe>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
          <div className="flex flex-col">
            <img src="./quote.png" className="w-12 -translate-y-10" />
            <blockquote className="italic text-white-text">
              "Our goal is to empower SMEs by providing cutting-edge, AI-driven
              solutions that simplify and optimize supply chain and logistics
              management. We are here to help you unlock hidden efficiencies and
              drive growth in a competitive market."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoQuote;
