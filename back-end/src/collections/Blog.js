// src/collections/Blog.js

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
    slug: "blog",
    admin: {
      useAsTitle: "title",
    },
    fields: [
      {
        name: "title",
        type: "text",
        required: true,
      },
      {
        name: "date",
        type: "date",
        admin: {
          date: {
            pickerAppearance: "dayOnly",
            displayFormat: "d MMM yyy",
          },
        },
      },
      {
        name: "author",
        type: "relationship",
        relationTo: ["author"],
        filterOptions: ({ relationTo, siblingData }) => {
          return {
            division: { equals: "content writer" },
          };
        },
      },
      {
        name: "content",
        type: "textarea",
        required: true,
      },
    //   {
    //     name: "gambar",
    //     type: "upload", // Perubahan tipe field "image" menjadi "upload"
    //     label: "Gambar",
    //     required: true,
    //     uploadDir: () => "uploads/blog-images",
    //   },
      {
        name: "category",
        type: "select",
        options: [
          { label: "Hublu", value: "hublu" },
          { label: "Ristek", value: "ristek" },
          { label: "KWU", value: "kwu" },
          // Tambahkan kategori lain sesuai kebutuhan
        ],
        required: true,
      },
    ],
    hooks: {
        afterRead: [
          async ({ doc, existingData, payload, options }) => {
            if (doc && doc.category && typeof doc.category === "string") {
              doc.category = [doc.category];
            }
          },
        ],
        afterChange: [
          async ({ doc, existingData, payload, options }) => {
            if (doc && doc.category && typeof doc.category === "string") {
              doc.category = [doc.category];
            }
          },
        ],
      },
      access: {
        read: () => true,
        create: ({ authentication }) => {
          return (
            authentication &&
            authentication.item &&
            authentication.item.division &&
            authentication.item.division === "content writer"
          );
        },
        update: ({ authentication }) => {
          return (
            authentication &&
            authentication.item &&
            authentication.item.division &&
            authentication.item.division === "content writer"
          );
        },
        delete: ({ authentication }) => {
          return (
            authentication &&
            authentication.item &&
            authentication.item.division &&
            authentication.item.division === "content writer"
          );
        },
      },
    };
    
    export default Blog;