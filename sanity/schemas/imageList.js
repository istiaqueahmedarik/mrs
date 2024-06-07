export default {
    name: 'imageItem',
    title: 'Image Item',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
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

      },
      
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
        validation: (Rule) => Rule.required(),

      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  };