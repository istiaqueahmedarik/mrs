export default {
  name: 'singleImageCard',
  title: 'All Images',
  type: 'document',
  fields: [
    {
      name: 'Title',
      title: 'Title',
      type: 'string',
      description: 'Section for the image card',
      validation: (Rule) => Rule.required(),

    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'description for the image card',
      validation: (Rule) => Rule.required(),

    },
    {
      name: 'image',
      title: 'Home Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image for the Home card',
      validation: (Rule) => Rule.required(),

    },
    {
      name: 'children',
      title: 'Children',
      type: 'array',
      validation: (Rule) => Rule.required(),

      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'Title',
              title: 'Title',
              type: 'string',
              description: 'Title for the image card',
              validation: (Rule) => Rule.required(),

            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Description for the image card',
              validation: (Rule) => Rule.required(),

            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Image for the image card',
              validation: (Rule) => Rule.required(),

            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
