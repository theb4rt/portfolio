export type LinkType = {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
    isExternal?: boolean;
    subMenu?: boolean;
};

export const links: LinkType[] = [
    {
        link: '/about',
        label: 'About',
        isExternal: false,
        subMenu: true,
    },
    {
        link: 'https://elblogdebart.com',
        label: 'Blog',
        isExternal: true,
        subMenu: false,
    },
    {
        link: 'https://github.com/theb4rt',
        label: 'Projects',
        isExternal: true,
        subMenu: true,
    },
    {
        link: '/contact',
        label: 'Contact',
        isExternal: false,
        subMenu: true,
    },
];
