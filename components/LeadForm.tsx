export default function LeadForm() {
  return (
    <form className="lead-form" action="#" method="post" aria-label="Get a free cleaning quote">
      <h3>Get Your Free Quote</h3>
      <p className="muted">Tell us about your home and we will call you back quickly.</p>

      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" required />

      <label htmlFor="bedrooms">Bedrooms</label>
      <input id="bedrooms" name="bedrooms" type="number" min="0" max="20" required />

      <label htmlFor="bathrooms">Bathrooms</label>
      <input id="bathrooms" name="bathrooms" type="number" min="0" max="20" step="0.5" required />

      <label htmlFor="cleaningType">Cleaning Type</label>
      <select id="cleaningType" name="cleaningType" required>
        <option value="">Select one</option>
        <option value="move-out">Move-Out Cleaning</option>
        <option value="deep">Deep Cleaning</option>
        <option value="standard">House Cleaning</option>
      </select>

      <label htmlFor="message">Optional Message</label>
      <textarea id="message" name="message" rows={4} />

      <button className="button" type="submit">
        Request Free Quote
      </button>
    </form>
  );
}
