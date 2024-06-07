export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        
      {
        name: 'facebook',
        title: 'Facebook',
        type: 'url',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
        validation: (Rule) => Rule.required(),

      },
      {
        name: 'instagram',
        title: 'Instagram',
        type: 'url',
        validation: (Rule) => Rule.required(),

      },
    ],
  };