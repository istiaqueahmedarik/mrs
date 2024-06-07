export default {
    name: 'mainSection',
    title: 'Main Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'subTitle',
        title: 'Sub Title',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'typeWriting',
        title: 'Type Writing',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'button1Text',
        title: 'Button 1 Text',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'button1Link',
        title: 'Button 1 Link',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'button2Text',
        title: 'Button 2 Text',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'button2Link',
        title: 'Button 2 Link',
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
    ],
  }