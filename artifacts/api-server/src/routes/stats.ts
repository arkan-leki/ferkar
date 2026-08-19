import { Router, type IRouter } from "express";
import { db, projectsTable, servicesTable, portfolioTable, blogPostsTable, careersTable, contactMessagesTable, testimonialsTable } from "@workspace/db";
import { sql } from "drizzle-orm";

const router: IRouter = Router();

router.get("/stats", async (_req, res): Promise<void> => {
  const [
    [projects],
    [services],
    [portfolio],
    [blog],
    [careers],
    [messages],
    [testimonials],
  ] = await Promise.all([
    db.select({ count: sql<number>`count(*)::int` }).from(projectsTable),
    db.select({ count: sql<number>`count(*)::int` }).from(servicesTable),
    db.select({ count: sql<number>`count(*)::int` }).from(portfolioTable),
    db.select({ count: sql<number>`count(*)::int` }).from(blogPostsTable),
    db.select({ count: sql<number>`count(*)::int` }).from(careersTable),
    db.select({ count: sql<number>`count(*)::int` }).from(contactMessagesTable),
    db.select({ count: sql<number>`count(*)::int` }).from(testimonialsTable),
  ]);

  res.json({
    projectCount: projects?.count ?? 0,
    serviceCount: services?.count ?? 0,
    portfolioCount: portfolio?.count ?? 0,
    blogCount: blog?.count ?? 0,
    careerCount: careers?.count ?? 0,
    messageCount: messages?.count ?? 0,
    testimonialCount: testimonials?.count ?? 0,
  });
});

export default router;
