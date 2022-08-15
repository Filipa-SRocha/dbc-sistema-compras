import styled from 'styled-components';

export const MeterContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Steps = styled.div`
	display: flex;
	gap: 4px;
	margin-bottom: 4px;
`;

export const Step = styled.div`
	width: 30px;
	height: 6px;

	:first-child {
		background-color: ${(props) => (props.step1 ? props.color : '#cecece')};
		border-top-left-radius: 30%;
		border-bottom-left-radius: 30%;
	}

	:nth-child(2) {
		background-color: ${(props) => (props.step2 ? props.color : '#cecece')};
	}

	:nth-child(3) {
		background-color: ${(props) => (props.step3 ? props.color : '#cecece')};
	}

	:last-child {
		border-top-right-radius: 30%;
		border-bottom-right-radius: 30%;
		background-color: ${(props) => (props.step4 ? props.color : '#cecece')};
	}
`;
