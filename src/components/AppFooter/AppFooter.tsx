import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { IconBrandBlogger, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';
import useStyles from './AppFooter.styles';

export const AppFooter = () => {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>

            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2024 b4rt.dev - All rights reserved.
                </Text>

                <Group spacing={20} className={classes.social} position="right" noWrap>
                    <ActionIcon
                      size="lg"
                      component="a"
                      target="_blank"
                      href="https://github.com/theb4rt"
                    >
                        <IconBrandGithub size="2.05rem" stroke={2} />
                    </ActionIcon>
                    <ActionIcon
                      size="lg"
                      component="a"
                      target="_blank"
                      href="https://twitter.com/the_b4rt"
                    >
                        <IconBrandTwitter size="2.05rem" stroke={2} />
                    </ActionIcon>
                    <ActionIcon
                      size="lg"
                      component="a"
                      target="_blank"
                      href="https://elblogdebart.com/"
                    >
                        <IconBrandBlogger size="2.05rem" stroke={2} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="2.05rem" stroke={2} />
                    </ActionIcon>
                    <ActionIcon
                      size="lg"
                      component="a"
                      target="_blank"
                      href="https://www.linkedin.com/in/jose-manuel-n/"
                    >
                        <IconBrandLinkedin size="2.05rem" stroke={2} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
};
