export default {
    name: 'singleImageCard',
    title: 'All Images',
    type: 'document',
    fields: [
      {
        name: 'Title',
        title: 'Title',
        type: 'string',
        description: 'Title for the image card',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description for the image card',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
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