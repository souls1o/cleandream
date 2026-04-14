"use client";

import { useEffect, useMemo, useState } from "react";

type ReviewItem = {
  author: string;
  rating: number;
  text: string;
  time?: string;
};

const fallbackReviews: ReviewItem[] = [
  {
    author: "Placeholder Review",
    rating: 5,
    text: '"They helped us pass our move-out walkthrough in Visalia. Quick and professional."'
  },
  {
    author: "Placeholder Review",
    rating: 5,
    text: '"Clean Dream handled our rental turnover in Tulare in one day. Great work."'
  }
];

export default function ReviewsMarquee() {
  const [reviews, setReviews] = useState<ReviewItem[]>(fallbackReviews);

  useEffect(() => {
    const syncReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = (await response.json()) as { reviews?: ReviewItem[] };
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch {
        // Keep fallback reviews if API sync fails.
      }
    };

    syncReviews();
  }, []);

  const marqueeReviews = useMemo(() => [...reviews, ...reviews], [reviews]);

  return (
    <div className="testimonials-marquee">
      <div className="marquee-row">
        <div className="marquee-track">
          {marqueeReviews.map((review, index) => (
            <blockquote key={`${review.author}-${index}`} className="card testimonial-card">
              <span className="stars">{"★".repeat(Math.max(1, Math.min(5, review.rating)))}</span>
              {review.text} - {review.author}
            </blockquote>
          ))}
        </div>
      </div>
      <div className="marquee-row">
        <div className="marquee-track marquee-track-reverse">
          {marqueeReviews.map((review, index) => (
            <blockquote key={`reverse-${review.author}-${index}`} className="card testimonial-card">
              <span className="stars">{"★".repeat(Math.max(1, Math.min(5, review.rating)))}</span>
              {review.text} - {review.author}
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
