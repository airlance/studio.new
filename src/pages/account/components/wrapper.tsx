'use client';

import * as React from 'react';

export function StoreClientWrapper({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
