import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

import packageConfig from "./package.json" assert { type: "json" };

await emptyDir("./npm");

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  compilerOptions: {
    lib: ["DOM"],
  },
  package: {
    name: packageConfig.name,
    version: packageConfig.version,
    description: packageConfig.description,
    license: packageConfig.license,
    repository: packageConfig.repository,
    bugs: packageConfig.bugs,
    peerDependencies: {
      "@emotion/react": "^11.11.1",
      "@emotion/styled": "^11.11.0",
      "@mui/material": "^5.13.7",
      react: "^18.2.0",
      "react-dom": "^18.2.0",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE.md", "npm/LICENSE.md");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
  mappings: {
    "npm:@mui/material": {
      name: "@mui/material",
      version: "^5.13.7",
      peerDependency: true,
    },
    "npm:react": {
      name: "react",
      version: "^18.2.0",
      peerDependency: true,
    },
  },
});
