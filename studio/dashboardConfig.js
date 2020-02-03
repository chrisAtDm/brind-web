export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e37eb2ec2ca7556648669d9',
                  title: 'Sanity Studio',
                  name: 'brind-web-studio',
                  apiId: '23a7d6f0-3e84-4cf2-bc75-eca2748a4c88'
                },
                {
                  buildHookId: '5e37eb2e52044eb1b6eed1ec',
                  title: 'Portfolio Website',
                  name: 'brind-web',
                  apiId: '74836e6e-4ecf-4b0d-a60b-e8fa909911fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisAtDm/brind-web',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://brind-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
