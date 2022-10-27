import { FC } from 'react';
import styled from 'styled-components';
import { success, critical } from '@salutejs/plasma-core';

import { Caption } from '../Typography';

import { StatusType } from './types';

const statuses = {
    error: {
        color: critical,
    },
    success: {
        color: success,
    },
};

// NOTE: don't know how to fix ts error TS2742
type uploadMessage = React.FC<{ status?: StatusType; children?: React.ReactNode }>;

export const UploadMessage: uploadMessage = styled(Caption)<{ status?: StatusType }>`
    margin-top: 0.25rem;
    text-align: center;

    ${({ status }) => status && statuses[status]}
`;
