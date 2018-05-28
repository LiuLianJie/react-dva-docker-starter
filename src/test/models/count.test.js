import count from '../../models/count';

test('reducer', () => {
	count.state = 1;
	expect(count.reducers.add(1)).toEqual(2)
});