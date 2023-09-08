import { Burger, Center, Container, Group, Header, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import { LinkType } from '../../config/AppMenu';
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

    const LogoBartWrapper:
        React.FC<SvgProps> = ({
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
        <Header height={150} mb={40}>
            <Container>
                <div className={classes.inner}>
                    <LogoBartWrapper color="#58bc82" width={400} height={100} />
                    <Group spacing={10} className={classes.links}>
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                </div>
            </Container>
        </Header>
    );
};

export default AppHeader;
