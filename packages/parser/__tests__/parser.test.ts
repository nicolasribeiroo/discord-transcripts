import { describe, test, expect } from 'vitest';
import { parseEmoji } from '../src/index.js';

const TEST_EMOJI = {
	id: '1107789494511468604',
	twemoji: '👍',
};

describe('Parsers', () => {
	describe('parseEmoji', () => {
		test('custom emoji', () => {
			expect(
				parseEmoji({
					id: TEST_EMOJI.id,
				}),
			).toEqual('https://cdn.discordapp.com/emojis/1107789494511468604.png');
		});

		test('by twemoji', () => {
			expect(
				parseEmoji({
					name: TEST_EMOJI.twemoji,
				}),
			).toEqual('https://twemoji.maxcdn.com/v/latest/svg/1f44d.svg');
		});
	});
});
