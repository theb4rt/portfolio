export type LinkType = {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
};

export const links: LinkType[] = [
    {
        link: '/about',
        label: 'About',
    },
    {
        link: '/blog',
        label: 'Blog',
    },
    {
        link: '/projects',
        label: 'Projects',
    },
    {
        link: '/contact',
        label: 'Contact',
    },
];
