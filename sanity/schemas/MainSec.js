export default {
    name: 'mainSection',
    title: 'Main Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subTitle',
        title: 'Sub Title',
        type: 'string',
      },
      {
        name: 'button1Text',
        title: 'Button 1 Text',
        type: 'string',
      },
      {
        name: 'button1Link',
        title: 'Button 1 Link',
        type: 'string',
      },
      {
        name: 'button2Text',
        title: 'Button 2 Text',
        type: 'string',
      },
      {
        name: 'button2Link',
        title: 'Button 2 Link',
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
  }