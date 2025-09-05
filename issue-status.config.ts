import { defineConfig } from "issue-status";
import { github } from "issue-status/providers";

export default defineConfig({
  name: "Blockstream Status",
  description: "Overview of Blockstream component status",
  provider: github({
    owner: "Blockstream",
    repo: "status",
  }),
});
