export default {
    name: 'joinUsAndFooter',
    title: 'Join Us and Footer',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'copyright',
        title: 'Copyright',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
    ],
  }