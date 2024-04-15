const teamPage = {
        name: 'teamPage',
        title: 'Team Details',
        type: 'document',
        fields: [
            {
                name: 'teamName',
                title: 'Team Name',
                type: 'string',
            },
            {
                name: 'teamImage',
                title: 'Team Image',
                type: 'image',
                options: {
                    hotspot: true,
                  },
            },
            {
                name: 'teamNameSlug',
                title: 'Team Name Slug',
                type: 'slug',
                options: {
                    source: 'teamName',
                    maxLength: 96,
                },
            },
            {
                name: 'description',
                title: 'Description',
                type: 'text',
            },
            {
                name: 'leaderName',
                title: 'Team Lead Name',
                type: 'string',
            },
            {
                name:'leaderSubtitle',
                title:'Team Lead Subtitle',
                type:'string',
            },
            {
                name: 'leaderImage',
                title: 'Team Lead Image',
                type: 'image',
                options: {
                    hotspot: true,
                  },
            },
            {
                name: 'teamMembers',
                title: 'Team Members',
                type: 'array',
                of: [
                    {
                        type: 'object',
                        fields: [
                            {
                                name: 'name',
                                title: 'Name',
                                type: 'string',
                            },
                            {
                                name:'subtitle',
                                title:'Subtitle',
                                type:'string',
                            },
                            {
                                name: 'image',
                                title: 'Image',
                                type: 'image',
                                options: {
                                    hotspot: true,
                                  },
                            },
                        ],
                    },
                ],
            },
            {
                name:  'teamImageGallery',
                title: 'Team Image Gallery',
                type: 'array',
                of: [
                    {
                        type: 'object',
                        fields: [
                            {
                                name: 'image',
                                title: 'Image',
                                type: 'image',
                                options: {
                                    hotspot: true,
                                  },
                            },
                            {
                                name: 'Title',
                                title: 'Title',
                                type: 'string',
                            },
                            {
                                name: 'description',
                                title: 'Description',
                                type: 'string',
                            }
                        ],
                    }
                ],
            }
        ],
    };

export default teamPage;
