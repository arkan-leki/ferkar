import { Router, type IRouter } from "express";
import { and, eq, ilike, or } from "drizzle-orm";
import { db, blogPostsTable } from "@workspace/db";
import {
  CreateBlogPostBody,
  UpdateBlogPostBody,
  GetBlogPostParams,
  UpdateBlogPostParams,
  DeleteBlogPostParams,
  ListBlogPostsQueryParams,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/blog", async (req, res): Promise<void> => {
  const query = ListBlogPostsQueryParams.safeParse(req.query);
  const { category, search } = query.success ? query.data : { category: undefined, search: undefined };

  const conditions = [];
  if (category) conditions.push(eq(blogPostsTable.category, category));
  if (search) {
    conditions.push(
      or(
        ilike(blogPostsTable.title, `%${search}%`),
        ilike(blogPostsTable.excerpt, `%${search}%`),
      )!,
    );
  }

  const posts =
    conditions.length > 0
      ? await db
          .select()
          .from(blogPostsTable)
          .where(and(...conditions))
          .orderBy(blogPostsTable.createdAt)
      : await db.select().from(blogPostsTable).orderBy(blogPostsTable.createdAt);

  res.json(posts);
});

router.get("/blog/featured", async (_req, res): Promise<void> => {
  const [post] = await db
    .select()
    .from(blogPostsTable)
    .where(and(eq(blogPostsTable.featured, true), eq(blogPostsTable.published, true)))
    .orderBy(blogPostsTable.createdAt)
    .limit(1);

  if (!post) {
    res.status(404).json({ error: "No featured post" });
    return;
  }

  res.json(post);
});

router.get("/blog/:id", async (req, res): Promise<void> => {
  const params = GetBlogPostParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [post] = await db
    .select()
    .from(blogPostsTable)
    .where(eq(blogPostsTable.id, params.data.id));

  if (!post) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  res.json(post);
});

router.post("/blog", async (req, res): Promise<void> => {
  const parsed = CreateBlogPostBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [post] = await db
    .insert(blogPostsTable)
    .values({
      ...parsed.data,
      published: parsed.data.published ?? false,
      featured: parsed.data.featured ?? false,
    })
    .returning();

  res.status(201).json(post);
});

router.patch("/blog/:id", async (req, res): Promise<void> => {
  const params = UpdateBlogPostParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdateBlogPostBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [post] = await db
    .update(blogPostsTable)
    .set(parsed.data)
    .where(eq(blogPostsTable.id, params.data.id))
    .returning();

  if (!post) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  res.json(post);
});

router.delete("/blog/:id", async (req, res): Promise<void> => {
  const params = DeleteBlogPostParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [post] = await db
    .delete(blogPostsTable)
    .where(eq(blogPostsTable.id, params.data.id))
    .returning();

  if (!post) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  res.sendStatus(204);
});

export default router;
