type Props = {
  title: string;
  text: string;
};

export default function CallToAction({ title, text }: Props) {
  return (
    <section>
      <div className="container card">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-row">
          <a className="button" href="tel:+15595550123">
            Call Now: (559) 555-0123
          </a>
          <a className="button secondary" href="#quote-form">
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
