import type { PropsWithChildren } from 'react';
import { cn } from '../util';

export interface DiscordMessageProps {
	readonly rounded?: boolean;
}

export function DiscordMessages({ children, rounded }: PropsWithChildren<DiscordMessageProps>) {
	return (
		<div
			className={cn('font-source-sans-pro pt-0.1 bg-[rgb(54_57_63)] pb-4', rounded && 'rounded')}
			id="messages-wrapper"
		>
			{children}
		</div>
	);
}
