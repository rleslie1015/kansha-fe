const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.all = jest.fn(array => Promise.all(array));
mockAxios.spread = jest.fn(callback =>
	jest.fn(arr => callback.apply(null, arr)),
);

export default mockAxios;
