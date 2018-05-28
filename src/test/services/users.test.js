import {fetch} from '../../services/user';

test('test services', async () => {
	console.log(await fetch({page:1}));
});
