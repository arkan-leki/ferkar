import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const companyInfoTable = pgTable("company_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  whatsapp: text("whatsapp"),
  address: text("address").notNull(),
  foundedYear: integer("founded_year").notNull(),
  facebook: text("facebook"),
  instagram: text("instagram"),
  linkedin: text("linkedin"),
  missionStatement: text("mission_statement"),
  visionStatement: text("vision_statement"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertCompanyInfoSchema = createInsertSchema(companyInfoTable).omit({ id: true, updatedAt: true });
export type InsertCompanyInfo = z.infer<typeof insertCompanyInfoSchema>;
export type CompanyInfoRow = typeof companyInfoTable.$inferSelect;
