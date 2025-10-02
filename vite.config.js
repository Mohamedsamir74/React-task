import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-task/React-task", // ⚠️ اكتب اسم الريبو هنا بالضبط
  plugins: [react()],
});
