const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.all = jest.fn(array => Promise.all(array));
mockAxios.spread = jest.fn(callback =>
	jest.fn(arr => callback.apply(null, arr)),
);
mockAxios.delete = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.post = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.put = jest.fn(() => Promise.resolve({ data: {} }));

export default mockAxios;
