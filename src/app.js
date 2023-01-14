import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/empleados.routes.js";
import indexRoutes from "./routes/inventario.routes.js";
import indexRoutes from "./routes/ventas.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", empleadosRoutes);
app.use("/api", inventarioRoutes);
app.use("/api", ventasRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
