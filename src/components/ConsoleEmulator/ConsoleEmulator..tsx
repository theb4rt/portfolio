import React, { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import styles from './ConsoleEmulator.module.css';

const ConsoleEmulator: React.FC<{ resetSignal: boolean }> = ({ resetSignal }) => {
    let currentCommandIndex = 0;
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);
    const [userCommand, setUserCommand] = useState('');
    const [outputText, setOutputText] = useState<string>('');
    const commands: string[] = [
        ' whoami',
        ' echo "Welcome to my page!"',
        ' ls -al',
        ' cat projects.txt',
    ];

    const getResponse = (command: string): string => {
        switch (command) {
            case ' whoami':
                return 'Jose Manuel\n';
            case ' echo "Welcome to my page!"':
                return 'Welcome to my page!';
            case ' ls -al':
                return 'drwxr-xr-x  2 b4rt b4rt 4096 Aug 25 12:34  about_me.txt\ndrwxr-xr-x  6 b4rt b4rt 4096 Aug 25 12:24 projects.txt';
            case ' cat projects.txt':
                return 'PiZ0mn1aTool: https://github.com/theb4rt/pizomniatool\n ' +
                    'Dyssomnia-scanner https://github.com/theb4rt/dyssomnia-scanner\n' +
                    'IotManagementPlatform https://github.com/theb4rt/iot-devices\n';

            default:
                return `${command}: command not found`;
        }
    };

    const typeCommand = () => {
        if (currentCommandIndex >= commands.length) {
            setIsAnimationFinished(true);
            return;
        }
        if (currentCommandIndex >= commands.length) return;

        const command = commands[currentCommandIndex];
        let index = 0;

        const typeLetter = () => {
            if (index < command.length) {
                setOutputText(prev => prev + command.charAt(index));
                index += 1;
                setTimeout(typeLetter, Math.random() * 150 + 50);
            } else {
                setOutputText(prev => `${prev}\n${getResponse(command)}\n`);
                setTimeout(() => {
                    setOutputText(prev => `${prev}[b4rt@-pc] $ `);
                    currentCommandIndex += 1;
                    setTimeout(typeCommand, 100);
                }, 100);
            }
        };

        typeLetter();
    };
    const resetConsole = () => {
        setIsAnimationFinished(false);
        setOutputText('[b4rt@-pc] $ ');
        currentCommandIndex = 0;

        setTimeout(typeCommand, 1000);
    };

    useEffect(() => {
        setOutputText('[b4rt@-pc] $ ');
        setTimeout(typeCommand, 1000);
    }, []);

    return (
        <div className={styles.console}>
            <Button
              color="lime"
              radius="xl"
              className={styles.resetButton}
              onClick={() => resetConsole()}
            >Reset
            </Button>

            {outputText.split('\n')
                .map((line, index, array) => {
                    const urlMatch = line.match(/https:\/\/[^ ]+/);
                    const isLastLine = index === array.length - 1;

                    if (urlMatch) {
                        const url = urlMatch[0];
                        return (
                            <div key={index}>
                                {line.replace(url, '')}
                                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                                {isLastLine && <span className={styles.cursor} />}
                            </div>
                        );
                    }

                    return (
                        <div key={index}>
                            {line}
                            {isLastLine && <span className={styles.cursor} />}
                        </div>
                    );
                })}

        </div>

    );
};

export default ConsoleEmulator;
