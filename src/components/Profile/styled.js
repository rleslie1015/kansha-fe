import styled from 'styled-components';

export const Badge = styled.li`
	list-style-type: none;
	position: relative;

	${({ count }) =>
		count > 1 &&
		`&::before {
		content: 'x ${count}';
        background: #b4114c;
        color: #fff;
        position: absolute;
        right: 30px;
        top: 5px;
        text-align: center;
        padding: 2px 8px;
        border-radius: 10px;
	}`}
`;
