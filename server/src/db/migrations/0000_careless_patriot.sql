CREATE TABLE "rooms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nae" text NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
