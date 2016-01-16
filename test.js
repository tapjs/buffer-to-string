import test from 'ava';
import fn from './';

test('defaults to width of 20', t => {
	const arr = [];
	for (var i = 0; i < 50; i++) {
		arr[i] = i;
	}
	t.is(fn(new Buffer(arr)), [
		'00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f 10 11 12 13',
		'14 15 16 17 18 19 1a 1b 1c 1d 1e 1f 20 21 22 23 24 25 26 27',
		'28 29 2a 2b 2c 2d 2e 2f 30 31'
	].join('\n'));
});

test('width is customizable', t => {
	const arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = i;
	}
	t.is(fn(new Buffer(arr), 3), [
		'00 01 02',
		'03 04 05',
		'06 07 08',
		'09'
	].join('\n'));
});
