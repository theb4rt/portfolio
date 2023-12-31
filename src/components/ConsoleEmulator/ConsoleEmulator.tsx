import React, { useEffect, useState, useRef } from 'react';
import { Box, Button } from '@mantine/core';
import styles from './ConsoleEmulator.module.css';

const ConsoleEmulator: React.FC = () => {
    let currentCommandIndex = 0;
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);
    const [outputText, setOutputText] = useState<string>('');
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const buttonFocusRef = useRef<HTMLButtonElement>(null);

    const commands: string[] = [
        ' whoami',
        ' echo "Welcome to my page!"',
        ' ls -al',
        ' cat about_me.txt',
        ' cat projects.txt',

    ];

    useEffect(() => {
        if (spanRef.current && inputRef.current) {
            const spanWidth = spanRef.current.offsetWidth;
            inputRef.current.style.width = `${spanWidth + 1}px`;
        }
    }, [inputValue]);

    const getResponse = (command: string): string => {
        switch (command) {
            case ' whoami':
                return 'Jose Manuel a.k.a. "B4rt"\n';
            case ' echo "Welcome to my page!"':
                return 'Welcome to my page!';
            case ' ls -al':
                return 'drwxr-xr-x  2 b4rt b4rt 4096 Aug 25 12:34  about_me.txt\ndrwxr-xr-x  6 b4rt b4rt 4096 Aug 25 12:24 projects.txt';
            case ' cat about_me.txt':
                return 'Software Engineer, Python Developer, Linux Enthusiast, Security Researcher, and more...\n';
            case ' cat projects.txt':
                return 'PiZ0mn1aTool: https://github.com/theb4rt/pizomniatool\n ' +
                    'Dyssomnia-scanner: https://github.com/theb4rt/dyssomnia-scanner\n' +
                    'IotManagementPlatform: https://github.com/theb4rt/iot-devices\n';

            default:
                return `${command}: command not found`;
        }
    };

    const handleUserCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const response = getResponse(` ${inputValue}`);
            setOutputText(prev => `${prev}${inputValue}\n${response}\n[b4rt@-pc] $ `);
            setInputValue('');
        }
    };

    const handleConsoleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const typeCommand = () => {
        if (currentCommandIndex >= commands.length) {
            setIsAnimationFinished(true);

            inputRef.current?.focus();

            setTimeout(() => {
                setInputValue(' ');

                setTimeout(() => {
                    setInputValue('');
                }, 1);
            }, 1);
            buttonFocusRef.current?.click();

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
        <Box className={styles.console} onClick={handleConsoleClick}>
            <Button
              color="lime"
              radius="xl"
              className={styles.resetButton}
              onClick={() => resetConsole()}
              disabled={!isAnimationFinished}
            >
                Reset
            </Button>

            <Button
              ref={buttonFocusRef}
              onClick={() => inputRef.current?.focus()}
              style={{
                    visibility: 'hidden',
                    position: 'absolute',
                }}
            />

            {outputText.split('\n')
                .map((line, index, array) => {
                    const urlMatch = line.match(/https:\/\/[^ ]+/);
                    const isLastLine = index === array.length - 1;
                    if (isLastLine && isAnimationFinished && line.trim() === '[b4rt@-pc] $') {
                        return null;
                    }
                    if (urlMatch) {
                        const url = urlMatch[0];
                        return (
                            <div key={index}>
                                {line.replace(url, '')}
                                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                                {isLastLine && <span className={styles.cursor} />

                                }

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

            {isAnimationFinished && <div className={styles.inputLine}>
                <span>[b4rt@-pc] $ </span>
                <div className={styles.inputContainer}>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleUserCommand}
                      placeholder=""
                      className={styles.consoleInput}
                      autoFocus
                    />
                    <span ref={spanRef} className={styles.mirrorText}>{inputValue}</span>
                    <span className={styles.cursor} />
                </div>

                                    </div>}

        </Box>

    );
};

export default ConsoleEmulator;
