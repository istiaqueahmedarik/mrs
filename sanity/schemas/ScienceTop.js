export default {
    name: 'scienceTop',
    title: 'Science Top',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
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
      
    ],
  };