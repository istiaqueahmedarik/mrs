export default {
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'SubTitle',
        title: 'SubTitle',
        type: 'string',
      },
      {
        name: 'section1',
        title: 'Section 1',
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      },
      {
        name: 'section2',
        title: 'Section 2',
        type: 'object',
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
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      },
    ],
  };