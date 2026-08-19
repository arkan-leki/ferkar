import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, careersTable } from "@workspace/db";
import {
  CreateCareerBody,
  UpdateCareerBody,
  UpdateCareerParams,
  DeleteCareerParams,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/careers", async (_req, res): Promise<void> => {
  const careers = await db
    .select()
    .from(careersTable)
    .orderBy(careersTable.createdAt);
  res.json(careers);
});

router.post("/careers", async (req, res): Promise<void> => {
  const parsed = CreateCareerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [career] = await db
    .insert(careersTable)
    .values({ ...parsed.data, active: parsed.data.active ?? true })
    .returning();

  res.status(201).json(career);
});

router.patch("/careers/:id", async (req, res): Promise<void> => {
  const params = UpdateCareerParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdateCareerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [career] = await db
    .update(careersTable)
    .set(parsed.data)
    .where(eq(careersTable.id, params.data.id))
    .returning();

  if (!career) {
    res.status(404).json({ error: "Career not found" });
    return;
  }

  res.json(career);
});

router.delete("/careers/:id", async (req, res): Promise<void> => {
  const params = DeleteCareerParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [career] = await db
    .delete(careersTable)
    .where(eq(careersTable.id, params.data.id))
    .returning();

  if (!career) {
    res.status(404).json({ error: "Career not found" });
    return;
  }

  res.sendStatus(204);
});

export default router;
