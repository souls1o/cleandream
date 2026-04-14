import { NextResponse } from "next/server";

type GoogleReview = {
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
};

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { reviews: [], error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID environment variables." },
      { status: 200 }
    );
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews"
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return NextResponse.json({ reviews: [], error: "Unable to fetch Google reviews." }, { status: 200 });
    }

    const data = (await response.json()) as { reviews?: GoogleReview[] };
    const reviews = (data.reviews ?? [])
      .filter((review) => review.text?.text)
      .slice(0, 8)
      .map((review) => ({
        author: review.authorAttribution?.displayName ?? "Google Reviewer",
        rating: review.rating ?? 5,
        text: review.text?.text ?? "",
        time: review.relativePublishTimeDescription ?? ""
      }));

    return NextResponse.json({ reviews });
  } catch {
    return NextResponse.json({ reviews: [], error: "Unexpected error while syncing reviews." }, { status: 200 });
  }
}
