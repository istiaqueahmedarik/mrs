export default {
    name: 'Leader',
    title: 'Leaders',
    type: 'document',
    fields: [
      {
        name:'year',
        title:'Year',
        type:'number'
      },
      {
        name:'leaders',
        title:'Leaders',
        type:'array',
        of:[
          {
            name:'leader',
          title:'Leader',
          type:'object',
          fields:[
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
        
            {
              name: 'role',
              title: 'Role',
              type: 'string',
            },
            {
              name: 'avatarImage',
              title: 'Avatar Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ]
          }
        ]
      }
      
    ],
  }