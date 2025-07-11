-- Original generated SQL (usually not suitable for data transfer):
-- ALTER TABLE "rooms" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
-- ALTER TABLE "rooms" DROP COLUMN "nae";

-- Modified SQL to rename and preserve data:
ALTER TABLE "rooms" RENAME COLUMN "nae" TO "name";