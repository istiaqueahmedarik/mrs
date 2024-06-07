export default {
    name: 'achievementsPage',
    title: 'Achievements Page',
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
        name: 'time',
        title: 'Date and Time',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule) => Rule.required(),

      },
      
    ],
  };