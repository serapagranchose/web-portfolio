import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/serapagranchose/web-portfolio',
        user: {
            name: 'Séraphin Perrot',
            email: 'seraphin.perrot@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);