import { Router, type IRouter } from "express";
import { db, companyInfoTable } from "@workspace/db";
import { UpdateCompanyInfoBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/company", async (_req, res): Promise<void> => {
  const [info] = await db.select().from(companyInfoTable).limit(1);
  if (!info) {
    res.status(404).json({ error: "Company info not found" });
    return;
  }
  res.json(info);
});

router.patch("/company", async (req, res): Promise<void> => {
  const parsed = UpdateCompanyInfoBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [existing] = await db.select().from(companyInfoTable).limit(1);
  if (!existing) {
    res.status(404).json({ error: "Company info not found" });
    return;
  }

  const [updated] = await db
    .update(companyInfoTable)
    .set(parsed.data)
    .returning();

  res.json(updated);
});

export default router;
