import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import mdxOptions from "./src/config/mdx";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
  readingTime: {
    type: "json",
    resolve: (doc) => readingTime(doc.body.raw),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    thumbnail: { type: "json", required: true },
    toc: { type: "boolean", required: true },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    demoUrl: { type: "string", required: true },
    repoUrl: { type: "string", required: true },
  },
  computedFields,
}));

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "archives/articles/*.mdx",
  contentType: "mdx",
  fields: {
    url: { type: "string", required: true },
    title: { type: "string", required: true },
    publishedOn: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
  },
  computedFields,
}));

export const Tweet = defineDocumentType(() => ({
  name: "Tweet",
  filePathPattern: "archives/tweets/*.mdx",
  fields: {
    url: { type: "string", required: true },
    profilePicture: { type: "string", required: true },
    name: { type: "string", required: true },
    userName: { type: "string", required: true },
    tweet: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
  },
}));

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields,
}));

const contentlayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Project, Article, Tweet, Snippet],
  mdx: mdxOptions,
});

export default contentlayerConfig;
