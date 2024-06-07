export default {
    name: 'mechanicalImage',
    title: 'Mechanical Images',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title for the image card',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description for the image card',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),

        description: 'Image for the image card',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  };