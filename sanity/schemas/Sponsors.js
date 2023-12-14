export default {
    name: 'sponsorPage',
    title: 'Sponsor Page',
    type: 'document',
    fields: [
      {
        name: 'type',
        title: 'Type of Sponsorship',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'sponsors',
        title: 'Sponsors',
        type: 'array',
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
              {
                name: 'logo',
                title: 'Logo',
                type: 'image',
              },
            ],
          },
        ],
      },
    ],
  };