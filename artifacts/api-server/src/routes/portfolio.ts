import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, portfolioTable } from "@workspace/db";
import {
  CreatePortfolioItemBody,
  UpdatePortfolioItemBody,
  UpdatePortfolioItemParams,
  DeletePortfolioItemParams,
  ListPortfolioItemsQueryParams,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/portfolio", async (req, res): Promise<void> => {
  const query = ListPortfolioItemsQueryParams.safeParse(req.query);
  const category = query.success ? query.data.category : undefined;

  let items;
  if (category) {
    items = await db
      .select()
      .from(portfolioTable)
      .where(eq(portfolioTable.category, category))
      .orderBy(portfolioTable.sortOrder);
  } else {
    items = await db
      .select()
      .from(portfolioTable)
      .orderBy(portfolioTable.sortOrder);
  }

  res.json(items);
});

router.get("/portfolio/categories", async (_req, res): Promise<void> => {
  const rows = await db
    .selectDistinct({ category: portfolioTable.category })
    .from(portfolioTable)
    .orderBy(portfolioTable.category);

  res.json(rows.map((r) => r.category));
});

router.post("/portfolio", async (req, res): Promise<void> => {
  const parsed = CreatePortfolioItemBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [item] = await db
    .insert(portfolioTable)
    .values({ ...parsed.data, sortOrder: parsed.data.sortOrder ?? 0 })
    .returning();

  res.status(201).json(item);
});

router.patch("/portfolio/:id", async (req, res): Promise<void> => {
  const params = UpdatePortfolioItemParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdatePortfolioItemBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [item] = await db
    .update(portfolioTable)
    .set(parsed.data)
    .where(eq(portfolioTable.id, params.data.id))
    .returning();

  if (!item) {
    res.status(404).json({ error: "Portfolio item not found" });
    return;
  }

  res.json(item);
});

router.delete("/portfolio/:id", async (req, res): Promise<void> => {
  const params = DeletePortfolioItemParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [item] = await db
    .delete(portfolioTable)
    .where(eq(portfolioTable.id, params.data.id))
    .returning();

  if (!item) {
    res.status(404).json({ error: "Portfolio item not found" });
    return;
  }

  res.sendStatus(204);
});

export default router;
