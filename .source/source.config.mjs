// source.config.ts
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      title: z.string().optional().default("Untitled")
    })
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    // MDX options
  }
});
export {
  source_config_default as default,
  docs
};
