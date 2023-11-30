// src/collections/Author.js

/** @type {import('payload/types').CollectionConfig} */
const Author = {
    slug: "author",
    admin: {
      useAsTitle: "nama",
    },
    fields: [
      {
        name: "nama",
        type: "text",
        required: true,
      },
      {
        name: "email",
        type: "email",
        required: true,
        unique: true,
      },
      {
        name: "division",
        type: "radio",
        options: [
          {
            label: "Content Writer",
            value: "content writer",
          },
          {
            label: "Social Media",
            value: "social media",
          },
        ],
        defaultValue: "content writer",
      },
      {
        name: "blogs",
        type: "relationship",
        relationTo: ["blog"],
        hasMany: true,
      },
    ],
    access: {
      read: () => true,
      create: ({ authentication: { item } }) => item && item.division === "content writer",
      update: ({ authentication: { item } }) => item && item.division === "content writer",
      delete: ({ authentication: { item } }) => item && item.division === "content writer",
    },
  };
  
  export default Author;
  