import type { APIMessageComponentEmoji } from 'discord-api-types/v10';
import twemoji from 'twemoji';
import { DISCORD_CDN_BASE_URL, TWEMOJI_CDN_BASE_URL } from './util/constants';

/**
 * Formats a Discord emoji object into a URL.
 *
 * @param emoji - The emoji object to parse.
 */
export function parseEmoji<E extends APIMessageComponentEmoji>(
	emoji: E,
):
	| `https://cdn.discordapp.com/emojis/${string}.${'gif' | 'png'}`
	| `https://twemoji.maxcdn.com/v/latest/svg/${string}.svg`;

export function parseEmoji<E extends APIMessageComponentEmoji>(
	emoji: E,
):
	| `https://cdn.discordapp.com/emojis/${string}.${'gif' | 'png'}`
	| `https://twemoji.maxcdn.com/v/latest/svg/${string}.svg` {
	if ('id' in emoji) {
		return `${DISCORD_CDN_BASE_URL}/emojis/${emoji.id}.${emoji.animated ? 'gif' : 'png'}`;
	}

	const codepoints = twemoji.convert
		.toCodePoint(emoji.name!.includes(String.fromCodePoint(0x200d)) ? emoji.name!.replaceAll('️', '') : emoji.name!)
		.toLowerCase();

	return `${TWEMOJI_CDN_BASE_URL}/svg/${codepoints}.svg`;
}
