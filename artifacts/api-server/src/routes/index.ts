import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import statsRouter from "./stats";
import companyRouter from "./company";
import projectsRouter from "./projects";
import servicesRouter from "./services";
import portfolioRouter from "./portfolio";
import blogRouter from "./blog";
import careersRouter from "./careers";
import contactRouter from "./contact";
import testimonialsRouter from "./testimonials";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(statsRouter);
router.use(companyRouter);
router.use(projectsRouter);
router.use(servicesRouter);
router.use(portfolioRouter);
router.use(blogRouter);
router.use(careersRouter);
router.use(contactRouter);
router.use(testimonialsRouter);

export default router;
