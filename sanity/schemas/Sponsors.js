export default {
    name: 'sponsorPage',
    title: 'Sponsor Page',
    type: 'document',
    fields: [
      {
        name: 'type',
        title: 'Type of Sponsorship',
        type: 'string',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'color',
        title: 'Color(Must be in hex format)',
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
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'sponsors',
        title: 'Sponsors',
        type: 'array',
        validation: (Rule) => Rule.required(),

        of: [
          {
            name: 'sponsor',
            title: 'Sponsor',
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
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
              {
                name: 'logo',
                title: 'Logo',
                type: 'image',
                validation: (Rule) => Rule.required(),

              },
            ],
          },
        ],
      },
    ],
  };