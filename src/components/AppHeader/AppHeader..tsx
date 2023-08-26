import { createStyles, Header, Menu, Group, Center, Burger, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import Image from 'next/image';
import { LinkType } from '../../config/AppMenu';
// import B4rtLogo from '../../../public/assets/logos/b4rt-logo-1.svg';
import { useStyles } from './AppHeader.styles';
import B4rtLogo from '../../../public/assets/logos/b4rt-logo-1.svg';

const AppHeader: React.FC<{ links: LinkType[] }> = ({ links }) => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    type SvgProps = {
        color?: string;
        width?: number | string;
        height?: number | string;
    };

    const LogoB4rtWraper: React.FC<SvgProps> = ({
                                                    color = 'red',
                                                    width = 450,
                                                    height = 110,
                                                }) => (
        <div style={{
            width,
            height,
            color,
        }}
        >

            <B4rtLogo />

        </div>
    );

    const items = links.map((linkItem) => {
        const menuItems = linkItem.links && linkItem.links.length > 0
            ? linkItem.links.map((submenuItem) => (
                <Menu.Item key={submenuItem.link}>{submenuItem.label}</Menu.Item>
            ))
            : null;

        if (menuItems) {
            return (
                <Menu key={linkItem.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                          href={linkItem.link}
                          className={classes.link}
                          onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{linkItem.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
              key={linkItem.label}
              href={linkItem.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
                {linkItem.label}
            </a>
        );
    });

    return (
        <Header height={150} mb={120}>
            <Container>
                <div className={classes.inner}>
                    {/*<div style={{*/}
                    {/*    color: '#58bc82',*/}
                    {/*    display: 'inline-block',*/}
                    {/*    padding: rem(5),*/}
                    {/*    borderRadius: rem(5),*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*    <Image src={B4rtLogo} alt="Logo" width={450} height={110} />*/}
                    {/*</div>*/}
                    <LogoB4rtWraper color="#58bc82" width={500} height={120} />

                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                </div>
            </Container>
        </Header>
    );
};

export default AppHeader;
