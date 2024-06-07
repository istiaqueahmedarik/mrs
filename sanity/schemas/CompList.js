export default {
    name: 'compCard',
    title: 'Competitions List',
    type: 'document',
    fields: [
      {
        name: 'imageSrc',
        title: 'Image Source',
        type: 'image',
        responsive: true,
        description: 'The source URL of the image',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'imageAlt',
        title: 'Image Alt Text',
        type: 'string',
        description: 'The alt text for the image',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title text',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        description: 'The description text',
        validation: (Rule) => Rule.required(),

      }
    ]
  }