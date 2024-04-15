export default {
    name: 'imageItem',
    title: 'Image Item',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  };