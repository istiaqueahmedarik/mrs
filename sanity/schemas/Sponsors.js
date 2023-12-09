export default {
    name: 'sponsorPage',
    title: 'Sponsor Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
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