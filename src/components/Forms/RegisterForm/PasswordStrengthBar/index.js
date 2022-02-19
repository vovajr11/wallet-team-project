import React from 'react';
import { StyledLinearProgress } from './PasswordStrengthBar.styles';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        passwordColorDefault: {
            main: '#24CCA7',
        },

        passwordColorWeak: {
            main: '#D32F2F',
        },
    },
});

const PasswordStrengthBar = ({ value }) => {
    const passwordStrength = {
        empty: { progress: 0, color: 'passwordColorDefault' },
        weak: { progress: 30, color: 'passwordColorWeak' },
        average: { progress: 50, color: 'passwordColorDefault' },
        strong: { progress: 100, color: 'passwordColorDefault' },
    };

    const { empty, weak, average, strong } = passwordStrength;

    let currentProgress = empty;

    if (value.length < 6) {
        currentProgress = weak;
    }

    if (!value.length) {
        currentProgress = empty;
    }

    if (value.length >= 6) {
        currentProgress = average;
    }

    if (value.length > 12) {
        currentProgress = strong;
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledLinearProgress
                variant="determinate"
                value={currentProgress.progress}
                color={currentProgress.color}
            />
        </ThemeProvider>
    );
};

export default PasswordStrengthBar;
